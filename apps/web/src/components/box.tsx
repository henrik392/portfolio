'use client';

import { type ThreeElements, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import type * as THREE from 'three';

export default function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
    }
  });

  return (
    <mesh
      {...props}
      onClick={() => click(!clicked)}
      onPointerOut={() => hover(false)}
      onPointerOver={() => hover(true)}
      ref={ref}
      scale={clicked ? 1.5 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
