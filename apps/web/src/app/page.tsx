'use client';

import { Canvas } from '@react-three/fiber';
import Box from '@/components/box';

export default function Home() {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          angle={0.15}
          decay={0}
          intensity={Math.PI}
          penumbra={1}
          position={[10, 10, 10]}
        />
        <pointLight decay={0} intensity={Math.PI} position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
