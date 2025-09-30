import type { Project } from '@/types/project';

type ProjectStatus = Project['status'];

export function getStatusColor(status: ProjectStatus): string {
  switch (status) {
    case 'completed':
      return 'bg-theme-primary/20 text-theme-primary/90';
    case 'in-progress':
      return 'bg-yellow-500/20 text-yellow-200';
    case 'archived':
      return 'bg-theme-dark/30 text-white/60';
    default:
      return 'bg-theme-dark/30 text-white/60';
  }
}

export function getStatusText(status: ProjectStatus): string {
  switch (status) {
    case 'completed':
      return '✓ Completed';
    case 'in-progress':
      return '🚧 In Progress';
    case 'archived':
      return '📁 Archived';
    default:
      return '📁 Archived';
  }
}

// Alias for consistency with existing code
export const getStatusStyles = getStatusColor;
