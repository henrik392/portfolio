import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import { TiltCard } from '@/components/tilt-card';
import { Button } from '@/components/ui/button';

interface ContactCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function ContactCard({ colSpan = 1, rowSpan = 1 }: ContactCardProps) {
  return (
    <TiltCard
      className="flex h-full flex-col justify-center p-8 lg:p-10"
      colSpan={colSpan}
      hoverBrightness={true}
      rowSpan={rowSpan}
      tiltIntensity="subtle"
    >
      <div className="text-center">
        <div className="mb-4">
          <MessageCircle className="mx-auto h-12 w-12 text-white/80" />
        </div>
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
          <Button asChild size="lg" variant="glass">
            <a href="mailto:henrik@henrikkvamme.dev">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
          <Button
            asChild
            className="border-blue-400/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20"
            size="lg"
            variant="glass"
          >
            <a
              href="https://linkedin.com/in/henrik-kvamme"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </TiltCard>
  );
}
