import { TiltCard } from '@/components/tilt-card';

interface LocationCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function LocationCard({ colSpan = 1, rowSpan = 2 }: LocationCardProps) {
  return (
    <TiltCard
      className="flex h-full flex-col p-6"
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      <h3 className="mb-4 font-semibold text-sm text-white/70">Location</h3>
      <div className="flex flex-1 flex-col justify-center text-center">
        <div className="mb-3 text-4xl">📍</div>
        <h2 className="mb-1 font-bold text-sm text-white">Trondheim</h2>
        <p className="text-white/60 text-xs">Norway</p>
      </div>

      <div className="mt-6 space-y-3">
        <div className="text-center">
          <div className="mb-1 text-xl">🏃‍♂️</div>
          <p className="text-white/60 text-xs">Active lifestyle</p>
        </div>
        <div className="text-center">
          <div className="mb-1 text-xl">🎸</div>
          <p className="text-white/60 text-xs">Music & guitar</p>
        </div>
      </div>
    </TiltCard>
  );
}
