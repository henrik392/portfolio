import { TiltCard } from '@/components/tilt-card';

interface AchievementCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function AchievementCard({
  colSpan = 2,
  rowSpan = 1,
}: AchievementCardProps) {
  return (
    <TiltCard className="p-8" colSpan={colSpan} rowSpan={rowSpan}>
      <h3 className="mb-2 font-semibold text-sm text-white/70">
        Experience Summary
      </h3>
      <div className="flex items-center gap-6">
        <div className="text-center">
          <div className="mb-3 text-5xl">🚀</div>
        </div>
        <div className="flex-1">
          <h2 className="mb-2 font-bold text-white text-xl tracking-tight">
            10+ Years, 3 Companies
          </h2>
          <p className="text-white/80 leading-relaxed">
            What started as a hobby in secondary school, is now my career.
            Full-stack development across startups and consultancy. From
            maritime tech to AI platforms, delivering solutions with modern tech
            stacks.
          </p>
        </div>
      </div>
    </TiltCard>
  );
}
