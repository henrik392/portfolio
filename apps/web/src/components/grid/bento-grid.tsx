import { motion } from 'motion/react';
import { AchievementCard } from './achievement-card';
import { ContactCard } from './contact-card';
import { ExpertiseCard } from './expertise-card';
import { GithubCard } from './github-card';
import { HeroIntroCard } from './hero-intro-card';
import { LocationCard } from './location-card';
import { PhilosophyCard } from './philosophy-card';
import { ProfileCard } from './profile-card';
import { TechCard } from './tech-card';

export function BentoGrid() {
  return (
    <motion.div
      className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <HeroIntroCard colSpan={3} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <ExpertiseCard colSpan={3} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <ProfileCard colSpan={1} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <AchievementCard colSpan={2} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <PhilosophyCard colSpan={2} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <LocationCard colSpan={1} rowSpan={2} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <TechCard
          colSpan={1}
          description="Frontend framework"
          icon="⚛️"
          name="React"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <TechCard
          colSpan={1}
          description="Systems programming"
          icon="🦀"
          name="Rust"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <GithubCard colSpan={1} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <ContactCard colSpan={2} />
      </motion.div>
    </motion.div>
  );
}
