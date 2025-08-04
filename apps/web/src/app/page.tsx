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
              About This Experience
            </h2>

            <div className="grid gap-8 lg:gap-12">
              <div className="text-center">
                <p className="mb-8 text-lg text-white/90 leading-relaxed sm:text-xl lg:text-2xl">
                  This interactive metaballs effect uses{' '}
                  <span className="font-medium text-white">ray marching</span>{' '}
                  and{' '}
                  <span className="font-medium text-white">
                    signed distance functions
                  </span>{' '}
                  to create fluid, organic shapes that respond to your mouse
                  movement.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 font-semibold text-white text-xl">
                    Technology
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Built with React Three Fiber and custom GLSL shaders,
                    implementing advanced techniques like smooth minimum
                    blending and 3D noise for surface texture.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-4 font-semibold text-white text-xl">
                    Interaction
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Move your mouse around the screen above to see how the
                    metaballs dynamically follow your cursor, creating beautiful
                    organic formations.
                  </p>
                </div>
              </div>

              <div className="pt-8 text-center">
                <p className="text-lg text-white/70 italic">
                  Experience the intersection of mathematics, art, and
                  interactive design
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section className="glass-card p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
              Technical Details
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-lg text-white">
                  Ray Marching
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Uses distance fields to render complex 3D shapes efficiently
                  in real-time.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-lg text-white">
                  Metaball Blending
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Smooth minimum functions create organic blob-like connections
                  between spheres.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-lg text-white">
                  Interactive Trail
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Mouse movement creates a trail of spheres that influence the
                  metaball field.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 font-semibold text-lg text-white">
                  3D Noise
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Procedural noise adds organic surface detail and animation to
                  the shapes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
