'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/project-card';
import {
  getAllCategories,
  getAllTechnologies,
  getProjectsByCategory,
  getProjectsByTechnology,
  projects,
} from '@/data/projects';
import type { ProjectsFilterState } from '@/types/project';

export function Projects() {
  const [filters, setFilters] = useState<ProjectsFilterState>({
    category: 'all',
    technology: 'all',
    status: 'all',
  });

  const categories = getAllCategories();
  const technologies = getAllTechnologies();

  // Apply filters
  let filteredProjects = projects;
  if (filters.category !== 'all') {
    filteredProjects = getProjectsByCategory(filters.category);
  }
  if (filters.technology !== 'all') {
    filteredProjects = getProjectsByTechnology(filters.technology);
  }
  if (filters.status !== 'all') {
    filteredProjects = filteredProjects.filter(
      (project) => project.status === filters.status
    );
  }

  return (
    <section className="relative mt-36">
      {/* Section Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <h2
          className="mb-3 font-bold text-4xl text-white sm:text-5xl lg:text-6xl"
          id="projects"
        >
          Projects
        </h2>
        <p className="text-white/70 text-xl sm:text-2xl">
          Here are some projects I've worked on
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
        {/* Category Filter */}
        <select
          className="w-full rounded-lg border border-white/20 bg-black/40 py-2 pr-8 pl-3 text-sm text-white backdrop-blur-sm focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/50 sm:w-auto"
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, category: e.target.value }))
          }
          value={filters.category}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Technology Filter */}
        <select
          className="rounded-lg border border-white/20 bg-black/40 py-2 pr-8 pl-3 text-sm text-white backdrop-blur-sm focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/50"
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, technology: e.target.value }))
          }
          value={filters.technology}
        >
          <option value="all">All Technologies</option>
          {technologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          className="rounded-lg border border-white/20 bg-black/40 py-2 pr-8 pl-3 text-sm text-white backdrop-blur-sm focus:border-blue-400/50 focus:outline-none focus:ring-1 focus:ring-blue-400/50"
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              status: e.target.value as ProjectsFilterState['status'],
            }))
          }
          value={filters.status}
        >
          <option value="all">All Status</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* All Projects */}
      <div className="space-y-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              description={project.description}
              featured={project.featured}
              githubUrl={project.githubUrl}
              image={project.image}
              key={project.id}
              liveUrl={project.liveUrl}
              status={project.status}
              technologies={project.technologies}
              title={project.title}
            />
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-white/60">
              No projects found matching the selected filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
