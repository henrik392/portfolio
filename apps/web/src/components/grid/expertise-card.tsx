import { TiltCard } from '@/components/tilt-card';

export function ExpertiseCard() {
  return (
    <TiltCard className="p-8 lg:p-10" colSpan={4}>
      <h3 className="mb-2 font-semibold text-sm text-white/70">Expertise</h3>
      <h2 className="mb-4 font-bold text-2xl text-white tracking-tight sm:text-3xl lg:text-4xl">
        Full-Stack Engineering
      </h2>
      <p className="mb-8 max-w-2xl text-white/80 leading-relaxed">
        Full-stack development, mobile applications, AI engineering, and
        algorithm design. I craft solutions across the entire technology stack,
        from elegant frontends to robust backend systems.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="mb-1 font-medium text-sm text-white">Frontend</h4>
          <p className="text-white/60 text-xs">React, Next.js, TypeScript</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="mb-1 font-medium text-sm text-white">Backend</h4>
          <p className="text-white/60 text-xs">Rust, Python, Hono</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="mb-1 font-medium text-sm text-white">Data & AI</h4>
          <p className="text-white/60 text-xs">PostgreSQL, AI/ML</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h4 className="mb-1 font-medium text-sm text-white">Mobile</h4>
          <p className="text-white/60 text-xs">React Native, Swift</p>
        </div>
      </div>
    </TiltCard>
  );
}
