import { AchievementCard } from './achievement-card';
import { ContactCard } from './contact-card';
import { ExpertiseCard } from './expertise-card';
import { GithubCard } from './github-card';
import { HeroIntroCard } from './hero-intro-card';
import { LinkedinCard } from './linkedin-card';
import { LocationCard } from './location-card';
import { PhilosophyCard } from './philosophy-card';
import { ProfileCard } from './profile-card';
import { TechCard } from './tech-card';

export function BentoGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <HeroIntroCard colSpan={3} />
      <ExpertiseCard colSpan={3} />
      <ProfileCard colSpan={1} />
      <AchievementCard colSpan={2} />
      <PhilosophyCard colSpan={2} />
      <LocationCard colSpan={1} rowSpan={2} />
      <TechCard
        colSpan={1}
        description="Frontend framework"
        icon="⚛️"
        name="React"
      />
      <TechCard
        colSpan={1}
        description="Systems programming"
        icon="🦀"
        name="Rust"
      />
      <ContactCard colSpan={2} rowSpan={2} />
      <GithubCard colSpan={1} rowSpan={1} />
      <LinkedinCard colSpan={1} rowSpan={1} />
    </div>
  );
}
