import { TiltCard } from '@/components/tilt-card';

interface ProfileCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function ProfileCard({ colSpan = 1, rowSpan = 1 }: ProfileCardProps) {
  return (
    <TiltCard
      className="flex h-full flex-col justify-center p-6 text-center"
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        <div className="text-3xl">👨‍💻</div>
      </div>
      <h3 className="mb-1 font-semibold text-sm text-white">Profile</h3>
      <p className="text-white/60 text-xs">Henrik Kvamme</p>
    </TiltCard>
  );
}
