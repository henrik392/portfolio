/**
 * Centralized display configuration for consistent UI limits
 */

export const DISPLAY = {
  // Technology pills display limits
  TECH: {
    INITIAL_LIMIT: 4,
    SHOW_MORE_THRESHOLD: 4,
  },

  // Highlights display limits
  HIGHLIGHTS: {
    INITIAL_LIMIT: 2,
    FULL_DISPLAY: Number.POSITIVE_INFINITY,
  },

  // Project cards per page
  PROJECTS: {
    PER_PAGE: 12,
  },

  // Experience cards
  EXPERIENCE: {
    MAX_HIGHLIGHTS: 2,
  },
} as const;
