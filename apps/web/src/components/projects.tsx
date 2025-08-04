import { ProjectCard } from '@/components/project-card';
import { TiltCard } from '@/components/tilt-card';

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
    <section className="mt-36">
      {/* Section Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="mb-3 font-bold text-4xl text-white sm:text-5xl lg:text-6xl">
          Projects
        </h2>
        <p className="text-white/70 text-xl sm:text-2xl">In progress 🚧</p>
      </div>

      {/* Progress Message */}
      <TiltCard className="mb-8 p-6 sm:p-8">
        <p className="text-center text-white/80 leading-relaxed">
          I am currently working on self-hosting my projects, you can check my
          open source projects at Github:{' '}
          <a
            className="font-medium text-blue-200 underline decoration-blue-200/30 underline-offset-2 transition-colors hover:text-blue-100 hover:decoration-blue-100/50"
            href="https://github.com/henrik392/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/henrik392/
          </a>
        </p>
      </TiltCard>

      {/* Projects List */}
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
    </section>
  );
}
