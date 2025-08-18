'use client';

import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { Footer } from '@/components/footer';
import { BentoGrid } from '@/components/grid/bento-grid';
import Hero from '@/components/hero';
import { Projects } from '@/components/projects';
import { WorkExperience } from '@/components/work-experience';

export default function Home() {
  useEffect(() => {
    // Show development toast after a short delay
    const timer = setTimeout(() => {
      toast.warning(
        '🚧 This website is still under development - not all information may be accurate',
        {
          duration: 8000,
          dismissible: true,
        }
      );
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Toast notifications */}
      <Toaster position="bottom-right" richColors />

      {/* Full-width hero */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Hero />
      </motion.div>

      {/* Constrained content sections */}
      <motion.div
        className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        whileInView={{ opacity: 1 }}
      >
        {/* Work Experience Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <WorkExperience />
        </motion.div>

        <BentoGrid />

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Projects />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
