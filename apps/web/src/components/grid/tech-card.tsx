import { TiltCard } from '@/components/tilt-card';

type TechCardProps = {
  icon: string;
  name: string;
  description: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
};

export function TechCard({
  icon,
  name,
  description,
  colSpan = 1,
  rowSpan = 1,
}: TechCardProps) {
  return (
    <TiltCard
      className="flex h-full flex-col justify-center p-6 text-center"
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-1 font-semibold text-sm text-white">{name}</h3>
      <p className="text-white/60 text-xs">{description}</p>
    </TiltCard>
  );
}
