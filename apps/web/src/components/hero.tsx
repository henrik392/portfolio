'use client';

import { Canvas } from '@react-three/fiber';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Metaball from '@/components/metaball';
import { useAnimation } from '@/contexts/animation-context';
import { WordRotate } from './magicui/word-rotate';

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { isAnimationEnabled } = useAnimation();
  const isThreeJSDisabled =
    process.env.NEXT_PUBLIC_DISABLE_THREEJS === 'true' || !isAnimationEnabled;

  const scrollToContent = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      // Scroll to the height of the hero section (100vh)
      mainElement.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

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
      {!isThreeJSDisabled && (
        <Canvas
          className="absolute inset-0 touch-none select-none overflow-hidden"
          resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            touchAction: 'pan-y pinch-zoom',
            overscrollBehavior: 'none',
          }}
        >
          <ambientLight intensity={Math.PI / 2} />
          <Metaball />
        </Canvas>
      )}

      {/* Fallback background when three.js is disabled */}
      {isThreeJSDisabled && <div className="absolute inset-0 bg-black" />}

      {/* Content that can be scrolled to */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12">
        <div className="w-full max-w-sm text-center sm:max-w-2xl md:max-w-4xl">
          <WordRotate
            className="font-bold font-geist-mono text-7xl text-white/80 mix-blend-difference drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] md:text-8xl lg:text-9xl"
            words={[
              'Full-Stack Developer',
              'Designer',
              'Backend Developer',
              'Frontend Developer',
              'Creator',
              'Algorithm Engineer',
              'Computer Scientist',
            ]}
          />
        </div>
      </div>

      {/* Scroll hint arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        className="-translate-x-1/2 absolute bottom-8 left-1/2 z-10 cursor-pointer"
        onClick={scrollToContent}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </motion.div>
    </section>
  );
}
