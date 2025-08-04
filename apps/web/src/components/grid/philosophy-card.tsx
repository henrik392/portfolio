import { TiltCard } from '@/components/tilt-card';

export function PhilosophyCard() {
  return (
    <TiltCard className="p-8" colSpan={3}>
      <h3 className="mb-2 font-semibold text-sm text-white/70">Philosophy</h3>
      <h2 className="mb-4 font-bold text-white text-xl tracking-tight">
        User Experience First
      </h2>
      <p className="mb-6 text-white/80 leading-relaxed">
        I'm passionate about crafting exceptional user experiences that feel
        intuitive and delightful. Great technology should be invisible—users
        should focus on their goals, not figuring out how things work.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-2xl">✨</div>
          <h4 className="mb-1 font-medium text-sm text-white">
            Design Thinking
          </h4>
          <p className="text-white/60 text-xs">User-centered approach</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 text-2xl">⚡</div>
          <h4 className="mb-1 font-medium text-sm text-white">Performance</h4>
          <p className="text-white/60 text-xs">Fast, responsive apps</p>
        </div>
      </div>
    </TiltCard>
  );
}
