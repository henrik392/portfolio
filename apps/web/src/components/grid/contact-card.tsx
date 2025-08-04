import { TiltCard } from '@/components/tilt-card';

interface ContactCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function ContactCard({ colSpan = 1, rowSpan = 1 }: ContactCardProps) {
  return (
    <TiltCard
      className="flex h-full flex-col justify-center p-6 text-center"
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      <h3 className="mb-2 font-semibold text-sm text-white/70">Contact</h3>
      <div className="space-y-2">
        <button
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 font-medium text-white text-xs backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
          type="button"
        >
          Get In Touch
        </button>
        <button
          className="w-full rounded-lg border border-blue-400/30 bg-blue-500/10 px-3 py-2 font-medium text-blue-200 text-xs backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-500/20"
          type="button"
        >
          LinkedIn
        </button>
      </div>
    </TiltCard>
  );
}
