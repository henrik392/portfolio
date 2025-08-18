import { TiltCard } from '@/components/tilt-card';

interface ContactCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function ContactCard({ colSpan = 1, rowSpan = 1 }: ContactCardProps) {
  return (
    <TiltCard
      className="flex h-full flex-col justify-center p-8 lg:p-10"
      clickable={true}
      colSpan={colSpan}
      hoverBrightness={true}
      rowSpan={rowSpan}
    >
      <div className="text-center">
        <div className="mb-4 text-4xl">💬</div>
        <h3 className="mb-2 font-semibold text-sm text-white/70">
          Let's Connect
        </h3>
        <h2 className="mb-6 font-bold text-2xl text-white tracking-tight lg:text-3xl">
          Ready to Collaborate?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-white/80 leading-relaxed">
          Open for freelance opportunities and interesting challenges. Let's
          build something amazing together.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
            href="mailto:henrik@henrikkvamme.dev"
          >
            <span className="mr-2 text-lg">📧</span>
            Get In Touch
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 px-8 py-4 font-medium text-blue-200 backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-500/20"
            href="https://linkedin.com/in/henrik-kvamme"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="mr-2 text-lg">💼</span>
            LinkedIn
          </a>
        </div>
      </div>
    </TiltCard>
  );
}
