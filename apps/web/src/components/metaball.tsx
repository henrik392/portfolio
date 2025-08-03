'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useCallback, useRef, useState } from 'react';
import { type RawShaderMaterial, Vector2, Vector3 } from 'three';

const vertexShader = `
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;

varying vec2 vUv;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_mouse[10];
uniform int u_mouseCount;

// Noise function
float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  
  return mix(
    mix(mix(hash(i + vec3(0, 0, 0)), hash(i + vec3(1, 0, 0)), f.x),
        mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x),
        mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}

// SDF for sphere
float sdSphere(vec3 p, float s) {
  return length(p) - s;
}

// Smooth minimum for blending
float smoothMin(float d1, float d2, float k) {
  float h = exp(-k * d1) + exp(-k * d2);
  return -log(h) / k;
}

// Scene SDF
float map(vec3 p) {
  float d = 1000.0;
  
  // Add noise to create organic surface
  float noiseValue = noise(p * 2.0 + u_time * 0.5) * 0.1;
  
  // Main sphere
  d = smoothMin(d, sdSphere(p, 0.8) + noiseValue, 8.0);
  
  // Mouse trail spheres
  for(int i = 0; i < 10; i++) {
    if(i >= u_mouseCount) break;
    
    vec3 mousePos = u_mouse[i];
    float size = 0.3 * (1.0 - float(i) * 0.1);
    d = smoothMin(d, sdSphere(p - mousePos, size) + noiseValue * 0.5, 12.0);
  }
  
  return d;
}

// Calculate normal
vec3 calcNormal(vec3 p) {
  const float eps = 0.001;
  vec2 h = vec2(eps, 0);
  return normalize(vec3(
    map(p + h.xyy) - map(p - h.xyy),
    map(p + h.yxy) - map(p - h.yxy),
    map(p + h.yyx) - map(p - h.yyx)
  ));
}

// Ray marching
float rayMarch(vec3 ro, vec3 rd) {
  float t = 0.0;
  for(int i = 0; i < 80; i++) {
    vec3 p = ro + rd * t;
    float d = map(p);
    if(d < 0.001 || t > 20.0) break;
    t += d;
  }
  return t;
}

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  uv.x *= u_resolution.x / u_resolution.y;
  
  // Camera setup
  vec3 ro = vec3(0.0, 0.0, 3.0);
  vec3 rd = normalize(vec3(uv, -1.0));
  
  // Ray march
  float t = rayMarch(ro, rd);
  
  vec3 color = vec3(0.0);
  
  if(t < 20.0) {
    vec3 p = ro + rd * t;
    vec3 n = calcNormal(p);
    
    // Lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diff = max(dot(n, lightDir), 0.0);
    
    // Reflection
    vec3 refl = reflect(rd, n);
    float spec = pow(max(dot(refl, lightDir), 0.0), 32.0);
    
    // Color based on position and noise
    vec3 baseColor = mix(
      vec3(0.2, 0.8, 1.0),
      vec3(1.0, 0.4, 0.8),
      noise(p * 3.0 + u_time)
    );
    
    color = baseColor * (diff + 0.2) + vec3(spec);
  }
  
  gl_FragColor = vec4(color, 1.0);
}
`;

const createUniforms = (resolution: Vector2) => {
  return {
    u_resolution: { value: resolution },
    u_time: { value: 0 },
    u_mouse: { value: new Array(10).fill(new Vector3()) },
    u_mouseCount: { value: 0 },
  };
};

export default function Metaball() {
  const { size, viewport } = useThree();
  const materialRef = useRef<RawShaderMaterial>(null);
  const [mouseTrail, setMouseTrail] = useState<Vector3[]>([]);
  const [uniforms] = useState(() =>
    createUniforms(new Vector2(size.width, size.height))
  );

  // Handle mouse movement
  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      const z = 0;

      const newPos = new Vector3(
        (x * viewport.width) / 2,
        (y * viewport.height) / 2,
        z
      );

      setMouseTrail((prev) => {
        const newTrail = [newPos, ...prev.slice(0, 9)];
        return newTrail;
      });
    },
    [viewport]
  );

  // Set up mouse listener
  useState(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('pointermove', handlePointerMove);
      return () => window.removeEventListener('pointermove', handlePointerMove);
    }
    return;
  });

  useFrame((_state, delta) => {
    if (uniforms.u_time) {
      uniforms.u_time.value += delta;
    }

    if (uniforms.u_resolution) {
      uniforms.u_resolution.value.set(size.width, size.height);
    }

    if (uniforms.u_mouse && uniforms.u_mouseCount) {
      uniforms.u_mouse.value = mouseTrail.slice(0, 10);
      uniforms.u_mouseCount.value = Math.min(mouseTrail.length, 10);
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
