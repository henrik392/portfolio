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
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-sm text-center sm:max-w-2xl md:max-w-4xl">
          <WordRotate
            className="font-[family-name:var(--font-uncial-antiqua)] font-bold text-7xl text-white/80 mix-blend-difference drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] md:text-8xl lg:text-9xl"
            words={['Developer', 'Designer', 'Creator']}
          />
        </div>
      </div>
    </section>
  );
}
