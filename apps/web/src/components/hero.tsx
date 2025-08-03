'use client';

import { Canvas } from '@react-three/fiber';
import Metaball from '@/components/metaball';
import { WordRotate } from './magicui/word-rotate';

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Canvas className="absolute inset-0">
        <ambientLight intensity={Math.PI / 2} />
        <Metaball />
      </Canvas>

      {/* Content that can be scrolled to */}
      <div className="-translate-x-1/2 pointer-events-none absolute top-64 left-1/2 flex w-full max-w-full justify-center p-12">
        <div className="w-full max-w-4xl text-center">
          <WordRotate
            className="font-[family-name:var(--font-uncial-antiqua)] font-bold text-9xl text-white/80 mix-blend-difference drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-sm"
            words={['Developer', 'Designer', 'Creator']}
          />
        </div>
      </div>
    </section>
  );
}
