'use client';

import Hero from '@/components/hero';
import { TiltCard } from '@/components/tilt-card';

export default function Home() {
  return (
    <div>
      {/* Full-width hero */}
      <Hero />

      {/* Constrained content sections */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero intro - compact */}
        <TiltCard className="mb-6 p-6 sm:p-8 lg:p-10">
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

        {/* Simplified Layout */}
        <div className="space-y-6">
          {/* First Row - Technical & Achievement */}
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* Large Technical Expertise */}
            <TiltCard className="p-8 lg:col-span-2 lg:p-10">
              <h2 className="mb-6 font-bold text-2xl text-white sm:text-3xl lg:text-4xl">
                Technical Expertise
              </h2>
              <p className="mb-8 text-lg text-white/80 leading-relaxed">
                Full-stack development, mobile applications, AI engineering, and
                algorithm design. I craft solutions across the entire technology
                stack, from elegant frontends to robust backend systems.
              </p>

              {/* Nested tech grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <h4 className="mb-2 font-medium text-sm text-white">
                    Frontend
                  </h4>
                  <p className="text-white/60 text-xs">
                    React, Next.js, TypeScript
                  </p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <h4 className="mb-2 font-medium text-sm text-white">
                    Backend
                  </h4>
                  <p className="text-white/60 text-xs">Rust, Python, Hono</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <h4 className="mb-2 font-medium text-sm text-white">
                    Data & AI
                  </h4>
                  <p className="text-white/60 text-xs">PostgreSQL, AI/ML</p>
                </div>
              </div>
            </TiltCard>

            {/* Achievement Card */}
            <TiltCard className="flex h-full flex-col p-8 lg:col-span-1">
              <div className="mb-6 text-center">
                <div className="mb-4 text-5xl">🏆</div>
                <h2 className="mb-4 font-bold text-white text-xl lg:text-2xl">
                  Norwegian Olympiad
                </h2>
                <p className="text-sm text-white/80 lg:text-base">
                  5th place winner in Informatics
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="mb-2 text-2xl">💻</div>
                  <h4 className="mb-2 font-medium text-sm text-white">
                    Competitive Programming
                  </h4>
                  <p className="text-white/60 text-xs">
                    Algorithm optimization
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="mb-2 text-2xl">⚡</div>
                  <h4 className="mb-2 font-medium text-sm text-white">
                    Problem Solving
                  </h4>
                  <p className="text-white/60 text-xs">Complex challenges</p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Second Row - Philosophy & Skills */}
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* Philosophy Card */}
            <TiltCard className="p-8 lg:col-span-2 lg:p-10">
              <div>
                <h2 className="mb-4 block w-full font-bold text-white text-xl sm:text-2xl">
                  User Experience First
                </h2>
                <div className="relative">
                  <div
                    className="float-right mb-4 ml-6 w-56 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:w-64"
                    style={
                      {
                        shapeOutside: 'border-radius(1rem)',
                        WebkitShapeOutside: 'border-radius(1rem)',
                      } as React.CSSProperties
                    }
                  >
                    <div className="mb-3 text-3xl">✨</div>
                    <p className="font-medium text-sm text-white">
                      Crafting experiences that users love
                    </p>
                    <p className="mt-2 text-white/60 text-xs">
                      Design meets functionality
                    </p>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    I'm passionate about crafting exceptional user experiences
                    that feel intuitive and delightful. Great technology should
                    be invisible—users should focus on their goals, not figuring
                    out how things work.
                  </p>
                </div>
                <div className="clear-both" />
              </div>
            </TiltCard>

            {/* Current Stack */}
            <TiltCard className="flex h-full flex-col p-8 lg:col-span-1">
              <h2 className="mb-6 font-bold text-white text-xl lg:text-2xl">
                Current Stack
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-white/5 bg-white/5 p-4 text-center">
                  <div className="mb-1 text-lg">⚛️</div>
                  <p className="font-medium text-sm text-white/70">React</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-4 text-center">
                  <div className="mb-1 text-lg">🔥</div>
                  <p className="font-medium text-sm text-white/70">Hono</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-4 text-center">
                  <div className="mb-1 text-lg">🦀</div>
                  <p className="font-medium text-sm text-white/70">Rust</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-4 text-center">
                  <div className="mb-1 text-lg">🐘</div>
                  <p className="font-medium text-sm text-white/70">
                    PostgreSQL
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Personal & CTA Layout */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Personal Info */}
          <TiltCard className="p-8 lg:col-span-2 lg:p-10">
            <h2 className="mb-8 font-bold text-2xl text-white sm:text-3xl">
              Beyond the Code
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      Based in Trondheim, Norway
                    </h3>
                    <p className="text-sm text-white/70">
                      Tech hub where innovation meets tradition
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-center">
                  <div className="mb-3 text-2xl">🏃‍♂️</div>
                  <h3 className="mb-2 font-semibold text-sm text-white">
                    Active Lifestyle
                  </h3>
                  <p className="text-white/70 text-xs">
                    Strong body, strong mind
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-center">
                  <div className="mb-3 text-2xl">🎸</div>
                  <h3 className="mb-2 font-semibold text-sm text-white">
                    Music & People
                  </h3>
                  <p className="text-white/70 text-xs">Guitar & connections</p>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* CTA */}
          <TiltCard className="flex h-full flex-col justify-center p-8 lg:col-span-1">
            <div className="text-center">
              <h2 className="mb-4 font-bold text-white text-xl sm:text-2xl">
                Ready to Collaborate?
              </h2>

              <p className="mb-6 text-sm text-white/80 leading-relaxed">
                Open for{' '}
                <span className="font-medium text-white">
                  freelance opportunities
                </span>
                and interesting challenges.
              </p>

              <div className="space-y-3">
                <button
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
                  type="button"
                >
                  Get In Touch
                </button>

                <button
                  className="w-full rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-3 font-medium text-blue-200 backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-500/20"
                  type="button"
                >
                  Follow on LinkedIn
                </button>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Large CTA Banner */}
        <TiltCard className="mt-6 p-8 sm:p-12 lg:p-16">
          <div className="text-center">
            <h2 className="mb-4 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-white/70 italic">
              Whether you have a project in mind, want to collaborate, or just
              want to chat about tech
            </p>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}
