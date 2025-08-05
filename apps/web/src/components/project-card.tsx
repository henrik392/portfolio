import Image from 'next/image';
import { TechPill } from '@/components/tech-pill';
import { TiltCard } from '@/components/tilt-card';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <TiltCard className="p-6" colSpan={1}>
      <div className="flex gap-6">
        {/* Project Image */}
        <div className="flex-shrink-0">
          <div className="flex h-24 w-24 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            {image ? (
              <Image
                alt={title}
                className="h-full w-full rounded-lg object-cover"
                height={96}
                src={image}
                width={96}
              />
            ) : (
              <div className="text-2xl">🚀</div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-start justify-between">
            <h3 className="font-bold text-lg text-white">{title}</h3>
            <div className="ml-4 flex gap-2">
              {githubUrl && (
                <a
                  className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 font-medium text-white text-xs backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
                  href={githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-medium text-blue-200 text-xs backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-500/20"
                  href={liveUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <p className="mb-4 text-sm text-white/80 leading-relaxed">
            {description}
          </p>

          {/* Technology Pills */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <TechPill key={tech}>{tech}</TechPill>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
