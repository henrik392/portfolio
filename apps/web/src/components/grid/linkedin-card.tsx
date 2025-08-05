import { Linkedin } from 'lucide-react';
import { TiltCard } from '@/components/tilt-card';

interface LinkedinCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function LinkedinCard({ colSpan = 1, rowSpan = 1 }: LinkedinCardProps) {
  return (
    <TiltCard className="p-6" colSpan={colSpan} rowSpan={rowSpan}>
      <a
        className="flex h-full flex-col items-center justify-center text-center transition-colors hover:text-white/90"
        href="https://linkedin.com/in/henrik-kvamme"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Linkedin className="mb-4 h-12 w-12 text-white" />
        <h3 className="mb-2 font-semibold text-lg text-white">LinkedIn</h3>
        <p className="text-sm text-white/60">Connect with me professionally</p>
      </a>
    </TiltCard>
  );
}
