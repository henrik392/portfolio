import { Rocket } from 'lucide-react';
import { TiltCard } from '@/components/tilt-card';

interface StartCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function StartCard({ colSpan = 1, rowSpan = 1 }: StartCardProps) {
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
          <Rocket className="h-8 w-8 text-orange-400" />
          <div>
            <h3 className="font-semibold text-lg text-white">Start NTNU</h3>
            <p className="text-sm text-white/70">Entrepreneurship Hub</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="mb-1 font-medium text-sm text-white">
              Hackathon Organizer
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Helped organize hackathons and secured sponsorships from major
              companies including Jane Street and Equinor.
            </p>
          </div>

          <div className="rounded-lg border border-orange-400/20 bg-orange-500/10 p-3">
            <h4 className="mb-1 font-medium text-orange-200 text-sm">
              Sponsors
            </h4>
            <p className="text-orange-300/80 text-xs">
              Jane Street • Equinor • Event management • Business development
            </p>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
