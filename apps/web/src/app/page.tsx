'use client';

import { Canvas } from '@react-three/fiber';
import Metaball from '@/components/metaball';

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
        <Metaball />
      </Canvas>
    </div>
  );
}
