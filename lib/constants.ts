/**
 * Application-wide constants
 * Centralized location for magic numbers, strings, and configuration values
 */

// Animation timings (in milliseconds)
export const ANIMATION_TIMINGS = {
  PERSONA_TRANSITION: 220,
  PERSONA_INTERVAL: 4200,
  TRACKER_SLIDE_INTERVAL: 3800,
  TRACKER_SLIDE_STAGGER: 1100,
  HERO_COUNT_UP_DURATION: 1400,
  HERO_COUNT_UP_DELAY: 600,
} as const;

// Scroll spy configuration
export const SCROLL_SPY_CONFIG = {
  ROOT_MARGIN: '0px 0px -80% 0px',
  THRESHOLD: 0.1,
} as const;

// Reveal animation configuration
export const REVEAL_CONFIG = {
  ROOT_MARGIN: '0px 0px -120px 0px',
  THRESHOLD: 0.15,
  ANIMATION_CLASS: 'in',
} as const;

// Stagger animation delays
export const STAGGER_DELAYS = {
  PERSONA_CARD: 0.09, // seconds per card
  TRACKER_CARD: 0.09,
  QUOTE_CARD: 0.09,
} as const;

// SVG dimensions
export const SVG_DIMENSIONS = {
  SPARKLINE: {
    WIDTH: 300,
    HEIGHT: 56,
  },
  DASHBOARD_CHART: {
    WIDTH: 560,
    HEIGHT: 200,
    PADDING: 18,
    BAR_WIDTH_RATIO: 0.42,
  },
} as const;

// Contact information
export const CONTACT_INFO = {
  EMAIL: 'hello@moneyfinacc.com',
  WHATSAPP: '9779876543210',
  WHATSAPP_URL: 'https://wa.me/9779876543210',
} as const;

// Site metadata
export const SITE_METADATA = {
  TITLE: 'moneyfinacc',
  DESCRIPTION: 'Simple trackers for the businesses Nepal\'s spreadsheets forgot.',
  COPYRIGHT_YEAR: 2026,
} as const;

// Navigation sections
export const NAVIGATION_SECTIONS = [
  'video',
  'why',
  'start',
  'who',
  'trackers',
  'club',
  'request',
  'dashboard',
  'custom',
  'how',
  'quotes',
] as const;

// CSS custom property keys (for type safety)
export const CSS_VARS = {
  STAGGER_DELAY: '--d',
  ANIMATION_ROTATION: '--r',
  PROGRESS_WIDTH: '--w',
  BAR_START: '--a',
  BAR_END: '--b',
} as const;
