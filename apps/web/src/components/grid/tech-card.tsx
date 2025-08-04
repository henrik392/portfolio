import { TiltCard } from '@/components/tilt-card';

interface TechCardProps {
  icon: string;
  name: string;
  description: string;
}

export function TechCard({ icon, name, description }: TechCardProps) {
  return (
    <TiltCard
      className="flex h-full flex-col justify-center p-6 text-center"
      colSpan={1}
    >
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-1 font-semibold text-sm text-white">{name}</h3>
      <p className="text-white/60 text-xs">{description}</p>
    </TiltCard>
  );
}
