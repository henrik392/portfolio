'use client';

import { Canvas } from '@react-three/fiber';
import Metaball from '@/components/metaball';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={Math.PI / 2} />
        <Metaball />
      </Canvas>

      {/* Content that can be scrolled to */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 p-8">
        <div className="text-center text-white">
          <h1 className="mb-4 font-bold text-4xl md:text-6xl">
            Interactive Metaballs
          </h1>
          <p className="text-lg opacity-80 md:text-xl">
            Move your mouse to interact
          </p>
        </div>
      </div>
    </section>
  );
}
