import { AchievementCard } from './achievement-card';
import { ContactCard } from './contact-card';
import { CtaBannerCard } from './cta-banner-card';
import { ExpertiseCard } from './expertise-card';
import { HeroIntroCard } from './hero-intro-card';
import { LocationCard } from './location-card';
import { PhilosophyCard } from './philosophy-card';
import { ProfileCard } from './profile-card';
import { TechCard } from './tech-card';

export function BentoGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <HeroIntroCard />
      <ExpertiseCard />
      <ProfileCard />
      <AchievementCard />
      <PhilosophyCard />
      <LocationCard />
      <TechCard description="Frontend framework" icon="⚛️" name="React" />
      <TechCard description="Systems programming" icon="🦀" name="Rust" />
      <ContactCard />
      <CtaBannerCard />
    </div>
  );
}
