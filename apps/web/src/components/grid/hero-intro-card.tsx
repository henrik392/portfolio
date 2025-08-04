import { TiltCard } from '@/components/tilt-card';

export function HeroIntroCard() {
  return (
    <TiltCard className="p-6 sm:p-8 lg:p-10" colSpan={3}>
      <section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
            Building the Future, One Line at a Time
          </h2>
          <p className="text-lg text-white/90 leading-relaxed sm:text-xl">
            With a{' '}
            <span className="font-medium text-white">
              decade of development experience,
            </span>{' '}
            I have worked at multiple startups, and I'm now a{' '}
            <span className="font-medium text-white">
              consultant at Texicon
            </span>{' '}
            and passionate freelancer.
          </p>
        </div>
      </section>
    </TiltCard>
  );
}
