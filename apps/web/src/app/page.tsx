'use client';

import { motion } from 'motion/react';
import { Footer } from '@/components/footer';
import { BentoGrid } from '@/components/grid/bento-grid';
import Hero from '@/components/hero';
import { Projects } from '@/components/projects';
import { WorkExperience } from '@/components/work-experience';

export default function Home() {
  return (
    <div>
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
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-100px' }}
        whileInView={{ opacity: 1 }}
      >
        <BentoGrid />
        {/* Work Experience Section */}
        <motion.div
          className="mb-20"
          id="work"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <WorkExperience />
        </motion.div>

        {/* Projects */}
        <motion.div
          id="projects"
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
