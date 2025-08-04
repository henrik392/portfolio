import { TiltCard } from '@/components/tilt-card';

export function CtaBannerCard() {
  return (
    <TiltCard className="p-8 sm:p-12 lg:p-16" colSpan={4}>
      <div className="text-center">
        <h2 className="mb-4 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
          Let's Build Something Amazing
        </h2>
        <p className="text-lg text-white/70 italic">
          Whether you have a project in mind, want to collaborate, or just want
          to chat about tech
        </p>
      </div>
    </TiltCard>
  );
}
