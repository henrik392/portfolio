'use client';

import Hero from '@/components/hero';

export default function Home() {
  return (
    <div>
      {/* Full-width hero */}
      <Hero />

      {/* Constrained content sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Additional content for scrolling */}
        <section className="min-h-screen bg-gray-900 py-8 text-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-bold text-3xl md:text-5xl">About</h2>
            <p className="mb-8 text-lg leading-relaxed md:text-xl">
              This interactive metaballs effect uses ray marching and signed
              distance functions to create fluid, organic shapes that respond to
              your mouse movement.
            </p>
            <p className="mb-8 text-lg leading-relaxed md:text-xl">
              The effect is built with React Three Fiber and custom GLSL
              shaders, implementing advanced techniques like smooth minimum
              blending and 3D noise for surface texture.
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              Move your mouse around the screen above to see how the metaballs
              dynamically follow your cursor, creating beautiful organic
              formations.
            </p>
          </div>
        </section>

        <section className="min-h-screen bg-gray-800 py-8 text-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-bold text-3xl md:text-5xl">
              Technical Details
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-semibold text-xl">Ray Marching</h3>
                <p className="text-gray-300">
                  Uses distance fields to render complex 3D shapes efficiently
                  in real-time.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-xl">
                  Metaball Blending
                </h3>
                <p className="text-gray-300">
                  Smooth minimum functions create organic blob-like connections
                  between spheres.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-xl">
                  Interactive Trail
                </h3>
                <p className="text-gray-300">
                  Mouse movement creates a trail of spheres that influence the
                  metaball field.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-xl">3D Noise</h3>
                <p className="text-gray-300">
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
