import type { WorkExperience } from '@/types/experience';
import experienceData from './experience.json' with { type: 'json' };

export const experiences: WorkExperience[] = experienceData as WorkExperience[];

export function getExperiences(): WorkExperience[] {
  return experiences.sort((a, b) => {
    // Sort by current role first, then by start date (newest first)
    if (a.isCurrentRole && !b.isCurrentRole) {
      return -1;
    }
    if (!a.isCurrentRole && b.isCurrentRole) {
      return 1;
    }
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

export function getCurrentRole(): WorkExperience | undefined {
  return experiences.find((exp) => exp.isCurrentRole);
}

export function formatDatePeriod(
  startDate: string,
  endDate?: string | null
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const formatDate = (date: Date) => {
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const startFormatted = formatDate(start);
  const endFormatted = end ? formatDate(end) : 'Present';

  return `${startFormatted} - ${endFormatted}`;
}

export function calculateDuration(
  startDate: string,
  endDate?: string | null
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffInMs = end.getTime() - start.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInYears >= 1) {
    const remainingMonths = diffInMonths % 12;
    if (remainingMonths === 0) {
      return diffInYears === 1 ? '1 year' : `${diffInYears} years`;
    }
    const yearText = diffInYears === 1 ? '1 year' : `${diffInYears} years`;
    const monthText =
      remainingMonths === 1 ? '1 month' : `${remainingMonths} months`;
    return `${yearText}, ${monthText}`;
  }

  if (diffInMonths >= 1) {
    return diffInMonths === 1 ? '1 month' : `${diffInMonths} months`;
  }

  return diffInDays <= 1 ? '1 day' : `${diffInDays} days`;
}

export function getExperienceWithDuration(
  experience: WorkExperience
): WorkExperience & { calculatedDuration: string } {
  return {
    ...experience,
    calculatedDuration: calculateDuration(
      experience.startDate,
      experience.endDate
    ),
  };
}

export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  for (const exp of experiences) {
    for (const tech of exp.technologies) {
      techSet.add(tech);
    }
  }
  return Array.from(techSet).sort();
}
