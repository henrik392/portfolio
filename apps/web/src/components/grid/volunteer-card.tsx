import { Users } from 'lucide-react';
import { TiltCard } from '@/components/tilt-card';

type VolunteerCardProps = {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
};

export function VolunteerCard({
  colSpan = 1,
  rowSpan = 1,
}: VolunteerCardProps) {
  return (
    <TiltCard
      className="p-6"
      colSpan={colSpan}
      hoverBrightness={true}
      rowSpan={rowSpan}
      tiltIntensity="subtle"
    >
      <div className="flex h-full flex-col justify-center">
        <div className="mb-4 flex items-center gap-3">
          <Users className="h-8 w-8 text-white" />
          <div>
            <h3 className="font-semibold text-lg text-white">
              Student Organizations
            </h3>
            <p className="text-sm text-white/70">NTNU Involvement</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <h4 className="mb-1 font-medium text-sm text-white">Cogito NTNU</h4>
            <p className="text-white/60 text-xs">
              Project lead for AI social media content team
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <h4 className="mb-1 font-medium text-sm text-white">Start NTNU</h4>
            <p className="text-white/60 text-xs">
              Helped organize hackathons with industry sponsors
            </p>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
