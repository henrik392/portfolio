'use client';

import { useEffect, useState } from 'react';
import Logo from './logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled ? 'py-2 sm:py-3 lg:py-4' : 'py-4 sm:py-6 lg:py-8'
      }`}
    >
      <div
        className={`glass-navbar w-full px-6 transition-all duration-300 ${
          isScrolled
            ? 'border-white/20 border-b py-3'
            : 'border-transparent border-b py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            type="button"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
