import { ProjectCard } from '@/components/project-card';

// Placeholder project data
const projects = [
  {
    title: 'AI Chat Application',
    description:
      'A modern chat application with AI-powered responses, real-time messaging, and beautiful UI.',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'OpenAI'],
    githubUrl: 'https://github.com/henrik392/ai-chat',
    liveUrl: 'https://ai-chat-demo.vercel.app',
  },
  {
    title: 'E-commerce Platform',
    description:
      'Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.',
    technologies: ['Next.js', 'Rust', 'PostgreSQL', 'Stripe', 'Tailwind'],
    githubUrl: 'https://github.com/henrik392/ecommerce',
  },
  {
    title: 'Developer Portfolio',
    description:
      'This very portfolio website built with modern technologies and beautiful animations.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    githubUrl: 'https://github.com/henrik392/portfolio',
    liveUrl: 'https://henrikkvamme.dev',
  },
];

export function Projects() {
  return (
    <section className="relative mt-36">
      {/* Section Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="mb-3 font-bold text-4xl text-white sm:text-5xl lg:text-6xl">
          Projects
        </h2>
        <p className="text-white/70 text-xl sm:text-2xl">In progress 🚧</p>
      </div>
      {/* Projects List with Blur Overlay */}
      <div className="relative">
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard
              description={project.description}
              githubUrl={project.githubUrl}
              key={project.title}
              liveUrl={project.liveUrl}
              technologies={project.technologies}
              title={project.title}
            />
          ))}
        </div>

        {/* Blur Overlay - Only over Projects List */}
        <div className="pointer-events-none absolute inset-0 bg-black/10 backdrop-blur-sm" />
      </div>
    </section>
  );
}
