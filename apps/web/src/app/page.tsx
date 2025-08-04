'use client';

import Hero from '@/components/hero';

export default function Home() {
  return (
    <div>
      {/* Full-width hero */}
      <Hero />

      {/* Constrained content sections */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero intro - compact */}
        <section className="glass-card mb-16 p-6 sm:p-8 lg:mb-20 lg:p-10">
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

        {/* Simplified Layout */}
        <div className="space-y-8">
          {/* First Row - Technical & Achievement */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Large Technical Expertise */}
            <section className="glass-card p-8 sm:p-10 lg:col-span-2 lg:p-12">
              <h2 className="mb-6 font-bold text-2xl text-white sm:text-3xl lg:text-4xl">
                Technical Expertise
              </h2>
              <p className="mb-8 text-lg text-white/80 leading-relaxed">
                Full-stack development, mobile applications, AI engineering, and
                algorithm design. I craft solutions across the entire technology
                stack, from elegant frontends to robust backend systems.
              </p>

              {/* Nested tech grid */}
              <div className="grid gap-4 sm:grid-cols-3">
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
            </section>

            {/* Achievement Card */}
            <section className="glass-card flex flex-col p-6 sm:p-8">
              <div className="mb-6 text-center">
                <div className="mb-4 text-5xl">🏆</div>
                <h2 className="mb-4 font-bold text-white text-xl">
                  Norwegian Olympiad
                </h2>
                <p className="text-sm text-white/80">
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
            </section>
          </div>

          {/* Second Row - Philosophy & Skills */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Philosophy Card */}
            <section className="glass-card p-6 sm:p-8 lg:col-span-2">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <h2 className="mb-4 font-bold text-white text-xl sm:text-2xl">
                    User Experience First
                  </h2>
                  <p className="text-white/80 leading-relaxed">
                    I'm passionate about crafting exceptional user experiences
                    that feel intuitive and delightful. Great technology should
                    be invisible—users should focus on their goals, not figuring
                    out how things work.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:w-64 sm:flex-shrink-0">
                  <div className="mb-3 text-3xl">✨</div>
                  <p className="font-medium text-sm text-white">
                    Crafting experiences that users love
                  </p>
                  <p className="mt-2 text-white/60 text-xs">
                    Design meets functionality
                  </p>
                </div>
              </div>
            </section>

            {/* Current Stack */}
            <section className="glass-card p-6 sm:p-8">
              <h2 className="mb-6 font-bold text-white text-xl">
                Current Stack
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/5 bg-white/5 p-3 text-center">
                  <div className="mb-1 text-lg">⚛️</div>
                  <p className="font-medium text-white/70 text-xs">React</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-3 text-center">
                  <div className="mb-1 text-lg">🔥</div>
                  <p className="font-medium text-white/70 text-xs">Hono</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-3 text-center">
                  <div className="mb-1 text-lg">🦀</div>
                  <p className="font-medium text-white/70 text-xs">Rust</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-3 text-center">
                  <div className="mb-1 text-lg">🐘</div>
                  <p className="font-medium text-white/70 text-xs">
                    PostgreSQL
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Personal & CTA Layout */}
        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-7">
          {/* Personal Info */}
          <section className="glass-card p-8 lg:col-span-4">
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
          </section>

          {/* CTA */}
          <section className="glass-card flex flex-col justify-center p-8 lg:col-span-3">
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
          </section>
        </div>

        {/* Large CTA Banner */}
        <section className="glass-card mt-8 p-8 sm:p-12 lg:p-16">
          <div className="text-center">
            <h2 className="mb-4 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-white/70 italic">
              Whether you have a project in mind, want to collaborate, or just
              want to chat about tech
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
