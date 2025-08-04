'use client';

import { Footer } from '@/components/footer';
import { BentoGrid } from '@/components/grid/bento-grid';
import Hero from '@/components/hero';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <div>
      {/* Full-width hero */}
      <Hero />

      {/* Constrained content sections */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <BentoGrid />

        {/* Projects */}
        <Projects />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
