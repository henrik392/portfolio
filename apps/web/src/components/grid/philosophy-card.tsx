import { TiltCard } from '@/components/tilt-card';

interface PhilosophyCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function PhilosophyCard({
  colSpan = 2,
  rowSpan = 1,
}: PhilosophyCardProps) {
  return (
    <TiltCard
      className="p-8"
      colSpan={colSpan}
      hoverBrightness={true}
      rowSpan={rowSpan}
      tiltIntensity="subtle"
    >
      <h3 className="mb-2 font-semibold text-sm text-white/70">
        Value Delivered
      </h3>
      <h2 className="mb-4 font-bold text-white text-xl tracking-tight">
        Rapid Development & Quality
      </h2>
      <p className="mb-6 text-white/80 leading-relaxed">
        Experienced working in fast-paced startup environments. Comfortable with
        30-day intensive cycles or longer work, always while maintaining
        quality. Team player with independent execution skills.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-2xl">🚀</div>
          <h4 className="mb-1 font-medium text-sm text-white">Startup Pace</h4>
          <p className="text-white/60 text-xs">Fast iteration cycles</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-2xl">🤝</div>
          <h4 className="mb-1 font-medium text-sm text-white">Collaboration</h4>
          <p className="text-white/60 text-xs">Remote or in-person</p>
        </div>
      </div>
    </TiltCard>
  );
}
