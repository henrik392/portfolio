import { ExternalLink, Github, Newspaper } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TechPill } from '@/components/tech-pill';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { getStatusColor, getStatusText } from '@/lib/status-utils';

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Henrik Kvamme`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.heroImage ? [project.heroImage] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="mt-24 min-h-screen bg-black">
      <div className="mx-auto max-w-7xl px-8 py-12 lg:px-10">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 font-medium text-sm ${getStatusColor(project.status)}`}
            >
              {getStatusText(project.status)}
            </span>
            {project.featured && (
              <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 font-medium text-blue-200 text-sm">
                ⭐ Featured
              </span>
            )}
          </div>

          <h1 className="mb-6 font-bold text-4xl text-white md:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mb-8 max-w-3xl text-lg text-white/80 leading-relaxed md:text-xl">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button asChild size="lg" variant="glass">
                <Link
                  href={project.liveUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View Live Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="lg" variant="outline">
                <a
                  href={project.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {project.heroImage && (
          <div className="mb-16">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                alt={`${project.title} screenshot`}
                className="object-cover object-top"
                fill
                priority
                src={project.heroImage}
              />
            </div>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Key Features */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="mb-12">
                <h2 className="mb-6 font-bold text-3xl text-white">
                  Key Features
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                      key={highlight}
                    >
                      <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-theme-primary" />
                      <p className="text-sm text-white/80">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Screenshots Gallery */}
            {project.screenshots.length > 1 && (
              <section className="mb-12">
                <h2 className="mb-6 font-bold text-3xl text-white">
                  Screenshots
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {project.screenshots.slice(1).map((screenshot, index) => (
                    <div
                      className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5"
                      key={screenshot}
                    >
                      <Image
                        alt={`${project.title} screenshot ${index + 2}`}
                        className="object-cover object-top"
                        fill
                        src={screenshot}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Tech Stack */}
            <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-semibold text-white text-xl">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechPill key={tech}>{tech}</TechPill>
                ))}
              </div>
            </section>

            {/* Categories */}
            <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-semibold text-white text-xl">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.category.map((cat) => (
                  <span
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/80"
                    key={cat}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Links */}
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-semibold text-white text-xl">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="glass"
                  >
                    <Link
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <a
                      href={project.githubUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
                {project.pressUrl && (
                  <Button
                    asChild
                    className="w-full justify-start border-blue-400/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20"
                    variant="outline"
                  >
                    <a
                      href={project.pressUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Newspaper className="mr-2 h-4 w-4" />
                      Press Coverage
                    </a>
                  </Button>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
