'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useCallback, useEffect, useRef, useState } from 'react';
import { type RawShaderMaterial, Vector2 } from 'three';

const vertexShader = `
attribute vec3 position;
varying vec2 vTexCoord;

void main() {
    vTexCoord = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

const int TRAIL_LENGTH = 15;
const float EPS = 1e-4;
const int ITR = 16;
const float PI = acos(-1.0);

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointerTrail[TRAIL_LENGTH];

varying vec2 vTexCoord;

float rnd3D(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453123);
}

float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);

    float a000 = rnd3D(i); // (0,0,0)
    float a100 = rnd3D(i + vec3(1.0, 0.0, 0.0)); // (1,0,0)
    float a010 = rnd3D(i + vec3(0.0, 1.0, 0.0)); // (0,1,0)
    float a110 = rnd3D(i + vec3(1.0, 1.0, 0.0)); // (1,1,0)
    float a001 = rnd3D(i + vec3(0.0, 0.0, 1.0)); // (0,0,1)
    float a101 = rnd3D(i + vec3(1.0, 0.0, 1.0)); // (1,0,1)
    float a011 = rnd3D(i + vec3(0.0, 1.0, 1.0)); // (0,1,1)
    float a111 = rnd3D(i + vec3(1.0, 1.0, 1.0)); // (1,1,1)

    vec3 u = f * f * (3.0 - 2.0 * f);
    // vec3 u = f*f*f*(f*(f*6.0-15.0)+10.0);

    float k0 = a000;
    float k1 = a100 - a000;
    float k2 = a010 - a000;
    float k3 = a001 - a000;
    float k4 = a000 - a100 - a010 + a110;
    float k5 = a000 - a010 - a001 + a011;
    float k6 = a000 - a100 - a001 + a101;
    float k7 = -a000 + a100 + a010 - a110 + a001 - a101 - a011 + a111;

    return k0 + k1 * u.x + k2 * u.y + k3 *u.z + k4 * u.x * u.y + k5 * u.y * u.z + k6 * u.z * u.x + k7 * u.x * u.y * u.z;
}

// Camera
vec3 origin = vec3(0.0, 0.0, 1.0);
vec3 lookAt = vec3(0.0, 0.0, 0.0);
vec3 cDir = normalize(lookAt - origin);
vec3 cUp = vec3(0.0, 1.0, 0.0);
vec3 cSide = cross(cDir, cUp);

float smoothMin(float d1, float d2, float k) {
    float h = exp(-k * d1) + exp(-k * d2);
    return -log(h) / k;
}

vec3 translate(vec3 p, vec3 t) {
    return p - t;
}

float sdSphere(vec3 p, float s)
{
    return length(p) - s;
}

float map(vec3 p) {
    float baseRadius = 8e-3;
    float radius = baseRadius * float(TRAIL_LENGTH);
    float k = 7.;
    float d = 1e5;

    for (int i = 0; i < TRAIL_LENGTH; i++) {
        float fi = float(i);
        vec2 pointerTrail = uPointerTrail[i];

        float sphere = sdSphere(
                translate(p, vec3(pointerTrail, .0)),
                radius - baseRadius * fi
            );

        d = smoothMin(d, sphere, k);
    }

    float sphere = sdSphere(translate(p, vec3(1.0, -0.25, 0.0)), 0.55);
    d = smoothMin(d, sphere, k);

    return d;
}

vec3 generateNormal(vec3 p) {
    return normalize(vec3(
            map(p + vec3(EPS, 0.0, 0.0)) - map(p + vec3(-EPS, 0.0, 0.0)),
            map(p + vec3(0.0, EPS, 0.0)) - map(p + vec3(0.0, -EPS, 0.0)),
            map(p + vec3(0.0, 0.0, EPS)) - map(p + vec3(0.0, 0.0, -EPS))
        ));
}

vec3 dropletColor(vec3 normal, vec3 rayDir) {
    vec3 reflectDir = reflect(rayDir, normal);

    float noisePosTime = noise3D(reflectDir * 2.0 + uTime);
    float noiseNegTime = noise3D(reflectDir * 2.0 - uTime);

    vec3 _color0 = vec3(0.1765, 0.1255, 0.2275) * noisePosTime;
    vec3 _color1 = vec3(0.4118, 0.4118, 0.4157) * noiseNegTime;

    float intensity = 2.3;
    vec3 color = (_color0 + _color1) * intensity;

    return color;
}

void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);

    // Orthographic Camera
    vec3 ray = origin + cSide * p.x + cUp * p.y;
    vec3 rayDirection = cDir;

    float dist = 0.0;

    for (int i = 0; i < ITR; ++i) {
        dist = map(ray);
        ray += rayDirection * dist;
        if (dist < EPS) break;
    }

    vec3 color = vec3(0.0);

    if (dist < EPS) {
        vec3 normal = generateNormal(ray);

        color = dropletColor(normal, rayDirection);
        // color = normal; // for debug
    }

    vec3 finalColor = pow(color, vec3(7.0));

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const createUniforms = (resolution: Vector2) => {
  return {
    uResolution: { value: resolution },
    uTime: { value: 0 },
    uPointerTrail: { value: new Array(15).fill(new Vector2()) },
  };
};

export default function Metaball() {
  const { size } = useThree();
  const materialRef = useRef<RawShaderMaterial>(null);
  const [mouseTrail, setMouseTrail] = useState<Vector2[]>([]);
  const [uniforms] = useState(() =>
    createUniforms(new Vector2(size.width, size.height))
  );

  // Handle mouse movement
  const handlePointerMove = useCallback((event: PointerEvent) => {
    // Convert to normalized coordinates that match the shader's coordinate system
    // The shader converts: (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y)
    const resolution = new Vector2(window.innerWidth, window.innerHeight);
    const minDimension = Math.min(resolution.x, resolution.y);

    const x = (event.clientX * 4.0 - resolution.x) / minDimension;
    const y =
      ((window.innerHeight - event.clientY) * 4.0 - resolution.y) /
      minDimension;

    const newPos = new Vector2(x, y);
    console.log(newPos);
    console.log(event.clientX, event.clientY);

    setMouseTrail((prev) => {
      const newTrail = [newPos, ...prev.slice(0, 14)];
      return newTrail;
    });
  }, []);

  // Set up mouse listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('pointermove', handlePointerMove);
      return () => window.removeEventListener('pointermove', handlePointerMove);
    }
  }, [handlePointerMove]);

  useFrame((_state, delta) => {
    if (uniforms.uTime) {
      uniforms.uTime.value += delta;
    }

    if (uniforms.uResolution) {
      uniforms.uResolution.value.set(size.width, size.height);
    }

    if (uniforms.uPointerTrail) {
      const trail = mouseTrail.slice(0, 15);
      while (trail.length < 15) {
        trail.push(new Vector2(0, 0));
      }
      uniforms.uPointerTrail.value = trail;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <rawShaderMaterial
        fragmentShader={fragmentShader}
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}
