import { Brain, ExternalLink } from 'lucide-react';
import { TiltCard } from '@/components/tilt-card';
import { Button } from '@/components/ui/button';

interface CogitoCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function CogitoCard({ colSpan = 1, rowSpan = 1 }: CogitoCardProps) {
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
            <Brain className="h-10 w-10 text-purple-400" />
            <div>
              <h3 className="font-semibold text-lg text-white">Cogito NTNU</h3>
              <p className="text-sm text-white/70">AI Student Organization</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="mb-2 font-medium text-sm text-white">
              Project Lead
            </h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Led team of 5 developers building AI social media content
              generator. Coordinated project timeline and technical decisions.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-lg border border-purple-400/20 bg-purple-500/10 p-3">
            <h4 className="mb-1 font-medium text-purple-200 text-sm">Impact</h4>
            <p className="text-purple-300/80 text-xs">
              Team collaboration • AI/ML application • Leadership experience
            </p>
          </div>

          <Button
            asChild
            className="w-full border-purple-400/30 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20"
            size="sm"
            variant="glass"
          >
            <a
              href="https://www.cogito-ntnu.no/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink className="mr-2 h-3 w-3" />
              Visit Cogito NTNU
            </a>
          </Button>
        </div>
      </div>
    </TiltCard>
  );
}
