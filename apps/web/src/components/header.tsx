'use client';

import { useEffect, useState } from 'react';
import Logo from './logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the main element that contains the scrollable content
      const mainElement = document.querySelector('main');
      if (mainElement) {
        const scrolled = mainElement.scrollTop > 50;
        setIsScrolled(scrolled);
      }
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      // Check initial scroll position
      handleScroll();
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'px-4 py-4 sm:px-12 sm:py-6 lg:px-20 lg:py-8'
          : 'px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8'
      }`}
    >
      <div
        className={`glass-navbar w-full py-2 backdrop-blur-sm transition-all duration-300 ${
          isScrolled
            ? 'border-white/20 border-b px-4'
            : 'border-transparent border-b px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <button
              className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              type="button"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
