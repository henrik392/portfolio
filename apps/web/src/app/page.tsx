'use client';

import Hero from '@/components/hero';

export default function Home() {
  return (
    <div>
      {/* Full-width hero */}
      <Hero />

      {/* Constrained content sections */}
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="glass-card p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
              Building the Future, One Line at a Time
            </h2>

            <div className="grid gap-8 lg:gap-12">
              <div className="text-center">
                <p className="mb-8 text-lg text-white/90 leading-relaxed sm:text-xl lg:text-2xl">
                  With a{' '}
                  <span className="font-medium text-white">
                    decade of development experience
                  </span>{' '}
                  starting at age 10, I've worked at multiple startups, and I'm
                  now a{' '}
                  <span className="font-medium text-white">
                    consultant at Texicon
                  </span>{' '}
                  and passionate freelancer who believes development is more
                  than just work—it's my hobby, my passion, and my way of
                  creating lasting impact.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 font-semibold text-white text-xl">
                    Technical Expertise
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Full-stack development, mobile applications, AI engineering,
                    and algorithm design. I craft solutions across the entire
                    technology stack, from elegant frontends to robust backend
                    systems.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 font-semibold text-white text-xl">
                    Design & Innovation
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    I'm deeply interested in design and creating solutions that
                    don't just work—they last. Every project is an opportunity
                    to blend technical excellence with thoughtful user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Experience Section */}
        <section className="glass-card p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
              A Decade of Development Excellence
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-lg text-white">
                  Modern Web Stack
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  TypeScript, React, Next.js, Hono - building fast, scalable web
                  applications with modern tooling.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-lg text-white">
                  Backend & Systems
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Rust, C++, Java Spring Boot, Python (FastAPI/Django) - robust
                  server-side solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-lg text-white">
                  Data & AI
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  PostgreSQL, SQLite, MySQL, Drizzle, Prisma - from data
                  modeling to AI implementations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-lg text-white">
                  🏆 Achievement
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  5th place winner in the Norwegian Olympiad of Informatics -
                  competitive programming excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Touch Section */}
        <section className="glass-card p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-bold text-3xl text-white sm:text-4xl">
              Beyond the Code
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 text-2xl">📍</div>
                <h3 className="mb-3 font-semibold text-white">
                  Based in Trondheim
                </h3>
                <p className="text-sm text-white/70">
                  Norway's tech hub, where innovation meets tradition
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 text-2xl">🏃‍♂️</div>
                <h3 className="mb-3 font-semibold text-white">
                  Active Lifestyle
                </h3>
                <p className="text-sm text-white/70">
                  Gym enthusiast who believes in strong body, strong mind
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 text-2xl">🎸</div>
                <h3 className="mb-3 font-semibold text-white">
                  Music & People
                </h3>
                <p className="text-sm text-white/70">
                  Guitar player who loves getting to know new people
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="glass-card p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
              Let's Build Something Amazing
            </h2>

            <p className="mb-8 text-lg text-white/80 leading-relaxed sm:text-xl">
              Whether you have a project in mind, want to collaborate, or just
              want to chat about tech, I'd love to hear from you. I'm always
              open for{' '}
              <span className="font-medium text-white">
                freelance opportunities
              </span>
              and interesting challenges.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
                type="button"
              >
                Get In Touch
              </button>

              <button
                className="rounded-2xl border border-blue-400/30 bg-blue-500/10 px-8 py-4 font-medium text-blue-200 backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-500/20"
                type="button"
              >
                Follow on LinkedIn
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
