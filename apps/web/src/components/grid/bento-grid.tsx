import { AchievementCard } from './achievement-card';
import { CogitoCard } from './cogito-card';
import { ContactCard } from './contact-card';
import { ExpertiseCard } from './expertise-card';
import { LocationCard } from './location-card';
import { PhilosophyCard } from './philosophy-card';
import { ProfileCard } from './profile-card';
import { StartCard } from './start-card';
import { TechStackCard } from './tech-stack-card';

export function BentoGrid() {
  return (
    <div className="mb-40 grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
      <ExpertiseCard colSpan={3} />
      <ProfileCard colSpan={1} />
      <AchievementCard colSpan={2} />
      <PhilosophyCard colSpan={2} />
      <LocationCard colSpan={1} rowSpan={2} />
      <TechStackCard colSpan={2} />
      <ContactCard colSpan={1} rowSpan={2} />
      <CogitoCard colSpan={1} rowSpan={2} />
      <StartCard colSpan={1} rowSpan={2} />
    </div>
  );
}
