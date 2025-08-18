import { ExternalLink, Github, Star } from 'lucide-react';
import Image from 'next/image';
import { TechPill } from '@/components/tech-pill';
import { TiltCard } from '@/components/tilt-card';
import type { ProjectCardProps } from '@/types/project';

const getStatusStyles = (status: string) => {
  if (status === 'completed') {
    return 'bg-green-500/20 text-green-200';
  }
  if (status === 'in-progress') {
    return 'bg-yellow-500/20 text-yellow-200';
  }
  return 'bg-gray-500/20 text-gray-200';
};

const getStatusText = (status: string) => {
  if (status === 'completed') {
    return '✓ Completed';
  }
  if (status === 'in-progress') {
    return '🚧 In Progress';
  }
  return '📁 Archived';
};

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  status = 'completed',
  featured = false,
}: ProjectCardProps) {
  return (
    <TiltCard
      className={`p-4 ${featured ? 'ring-1 ring-blue-400/30' : ''}`}
      colSpan={1}
    >
      <div className="flex gap-6">
        {/* Project Image */}
        <div className="flex-shrink-0">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
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
            {featured && (
              <div className="-top-2 -right-2 absolute flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
                <Star className="h-3 w-3" fill="currentColor" />
              </div>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex flex-col">
              <h3 className="font-bold text-lg text-white">{title}</h3>
              <div className="mt-1 flex items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 font-medium text-xs ${getStatusStyles(status)}`}
                >
                  {getStatusText(status)}
                </span>
                {featured && (
                  <span className="inline-flex items-center rounded-full bg-blue-500/20 px-2 py-1 font-medium text-blue-200 text-xs">
                    ⭐ Featured
                  </span>
                )}
              </div>
            </div>
            <div className="ml-4 flex gap-2">
              {githubUrl && (
                <a
                  aria-label={`View ${title} on GitHub`}
                  className="flex items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-3 py-1 font-medium text-white text-xs backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
                  href={githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github className="h-3 w-3" />
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  aria-label={`View ${title} live demo`}
                  className="flex items-center gap-1 rounded-lg border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-medium text-blue-200 text-xs backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-500/20"
                  href={liveUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="h-3 w-3" />
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
