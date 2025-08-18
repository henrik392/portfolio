'use client';

import { useRef } from 'react';
import { TiltCard } from '@/components/tilt-card';

interface TechStackCardProps {
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

interface Technology {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile' | 'ai';
  color: string;
}

const technologies: Technology[] = [
  // Frontend
  {
    name: 'React',
    icon: '⚛️',
    category: 'frontend',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    name: 'Next.js',
    icon: '▲',
    category: 'frontend',
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'TypeScript',
    icon: '🔷',
    category: 'frontend',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'TailwindCSS',
    icon: '🎨',
    category: 'frontend',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    name: 'HTMX',
    icon: '🔥',
    category: 'frontend',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Framer Motion',
    icon: '🎭',
    category: 'frontend',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'shadcn/ui',
    icon: '🎪',
    category: 'frontend',
    color: 'from-violet-400 to-purple-600',
  },

  // Backend
  {
    name: 'Node.js',
    icon: '🟢',
    category: 'backend',
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Rust',
    icon: '🦀',
    category: 'backend',
    color: 'from-orange-600 to-red-700',
  },
  {
    name: 'Go',
    icon: '🐹',
    category: 'backend',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Python',
    icon: '🐍',
    category: 'backend',
    color: 'from-yellow-400 to-green-500',
  },
  {
    name: 'Flask',
    icon: '🌶️',
    category: 'backend',
    color: 'from-red-400 to-red-600',
  },
  {
    name: 'Hono',
    icon: '🔥',
    category: 'backend',
    color: 'from-orange-400 to-yellow-500',
  },
  {
    name: 'tRPC',
    icon: '🔗',
    category: 'backend',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'gRPC',
    icon: '📡',
    category: 'backend',
    color: 'from-green-500 to-blue-500',
  },
  {
    name: 'Protobuf',
    icon: '📦',
    category: 'backend',
    color: 'from-gray-500 to-gray-700',
  },
  {
    name: 'Tokio',
    icon: '⚡',
    category: 'backend',
    color: 'from-yellow-400 to-orange-500',
  },

  // Database
  {
    name: 'PostgreSQL',
    icon: '🐘',
    category: 'database',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    category: 'database',
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'Prisma',
    icon: '▲',
    category: 'database',
    color: 'from-indigo-400 to-purple-600',
  },

  // Mobile
  {
    name: 'Flutter',
    icon: '🐦',
    category: 'mobile',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Dart',
    icon: '🎯',
    category: 'mobile',
    color: 'from-cyan-400 to-blue-500',
  },

  // Tools
  {
    name: 'Docker',
    icon: '🐳',
    category: 'tools',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Puppeteer',
    icon: '🎭',
    category: 'tools',
    color: 'from-green-400 to-teal-500',
  },
  {
    name: 'NextAuth.js',
    icon: '🔐',
    category: 'tools',
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'jsPDF',
    icon: '📄',
    category: 'tools',
    color: 'from-red-400 to-pink-500',
  },
  {
    name: 'Figma',
    icon: '🎨',
    category: 'tools',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Bun',
    icon: '🥟',
    category: 'tools',
    color: 'from-orange-400 to-red-500',
  },
  {
    name: 'Turbo',
    icon: '⚡',
    category: 'tools',
    color: 'from-blue-400 to-purple-500',
  },

  // AI/ML
  {
    name: 'AI/ML',
    icon: '🤖',
    category: 'ai',
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'yt-dlp',
    icon: '📺',
    category: 'tools',
    color: 'from-red-500 to-pink-600',
  },
];

export function TechStackCard({
  colSpan = 2,
  rowSpan = 1,
}: TechStackCardProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollBy({ left: e.deltaY, behavior: 'auto' });
    }
  };

  return (
    <TiltCard
      className="flex h-full flex-col p-6"
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="mb-1 font-semibold text-lg text-white">Tech Stack</h3>
          <p className="text-sm text-white/60">Technologies I work with</p>
        </div>
        <div className="flex gap-2">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-white/20 hover:text-white"
            onClick={scrollLeft}
            type="button"
          >
            ←
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-white/20 hover:text-white"
            onClick={scrollRight}
            type="button"
          >
            →
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div
          className="scrollbar-hide flex gap-3 overflow-x-auto pb-2"
          onWheel={handleWheel}
          ref={scrollContainerRef}
        >
          {technologies.map((tech) => (
            <div
              className="group flex min-w-[80px] flex-shrink-0 flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              key={tech.name}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-lg ${tech.color} bg-opacity-20 transition-transform duration-300 group-hover:scale-110`}
              >
                {tech.icon}
              </div>
              <span className="text-center font-medium text-white/80 text-xs leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-white/10 border-t pt-3">
        <div className="flex gap-1">
          {[...new Set(technologies.map((t) => t.category))].map((category) => (
            <div
              className="h-1.5 w-1.5 rounded-full bg-white/30"
              key={category}
            />
          ))}
        </div>
        <span className="text-white/40 text-xs">
          Use scroll wheel or arrows
        </span>
      </div>
    </TiltCard>
  );
}
