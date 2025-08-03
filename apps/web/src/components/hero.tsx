'use client';

import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import Metaball from '@/components/metaball';
import { WordRotate } from './magicui/word-rotate';

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section className="relative h-screen w-full">
      <Canvas
        className="absolute inset-0"
        resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <Metaball />
      </Canvas>

      {/* Content that can be scrolled to */}
      <div className="-translate-x-1/2 pointer-events-none absolute top-48 left-1/2 flex w-full max-w-full justify-center p-4 sm:top-56 sm:p-8 md:top-64 md:p-12">
        <div className="w-full max-w-sm text-center sm:max-w-2xl md:max-w-4xl">
          <WordRotate
            className="font-[family-name:var(--font-uncial-antiqua)] font-bold text-4xl text-white/80 mix-blend-difference drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] backdrop-blur-sm sm:text-6xl md:text-8xl lg:text-9xl"
            words={['Developer', 'Designer', 'Creator']}
          />
        </div>
      </div>
    </section>
  );
}
