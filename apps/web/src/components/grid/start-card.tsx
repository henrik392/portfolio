import { ExternalLink, Rocket } from 'lucide-react';
import { TiltCard } from '@/components/tilt-card';
import { Button } from '@/components/ui/button';

type StartCardProps = {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
};

export function StartCard({ colSpan = 1, rowSpan = 1 }: StartCardProps) {
  return (
    <TiltCard
      className="p-6"
      colSpan={colSpan}
      hoverBrightness={true}
      rowSpan={rowSpan}
      tiltIntensity="subtle"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Rocket className="h-10 w-10 text-orange-400" />
            <div>
              <h3 className="font-semibold text-lg text-white">Start NTNU</h3>
              <p className="text-sm text-white/70">Entrepreneurship Hub</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="mb-2 font-medium text-sm text-white">
              Hackathon Organizer
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Helped organize hackathons and secured sponsorships from major
              companies including Jane Street and Equinor.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg border border-orange-400/20 bg-orange-500/10 p-3">
            <h4 className="mb-1 font-medium text-orange-200 text-sm">Impact</h4>
            <p className="text-orange-300/80 text-xs">
              Event management • Sponsorship acquisition • Marketing
            </p>
          </div>

          <Button
            asChild
            className="w-full border-orange-400/30 bg-orange-500/10 text-orange-200 hover:bg-orange-500/20"
            size="sm"
            variant="glass"
          >
            <a
              href="https://www.startntnu.no/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink className="mr-2 h-3 w-3" />
              Visit Start NTNU
            </a>
          </Button>
        </div>
      </div>
    </TiltCard>
  );
}
