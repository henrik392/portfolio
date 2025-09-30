/**
 * Centralized animation configuration for consistent motion design
 */

export const ANIMATION = {
  // Offsets for directional animations
  OFFSET: {
    SMALL: 20,
    MEDIUM: 50,
    LARGE: 100,
  },

  // Duration in seconds
  DURATION: {
    FAST: 0.3,
    NORMAL: 0.6,
    SLOW: 0.8,
  },

  // Delay multipliers for staggered animations
  DELAY: {
    MULTIPLIER: 0.2,
    BASE: 0.1,
  },

  // Easing functions
  EASING: {
    DEFAULT: 'easeOut',
    SMOOTH: 'easeInOut',
  },

  // Viewport margins for triggering animations
  VIEWPORT: {
    MARGIN: '-50px',
    MARGIN_LARGE: '-100px',
  },
} as const;

// Specific animation presets
export const WORK_EXPERIENCE_ANIMATION = {
  OFFSET: ANIMATION.OFFSET.MEDIUM,
  DURATION: ANIMATION.DURATION.NORMAL,
  DELAY_MULTIPLIER: ANIMATION.DELAY.MULTIPLIER,
} as const;
