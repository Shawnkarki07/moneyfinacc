/**
 * Utility Helper Functions
 * Reusable functions for common operations
 */

/**
 * Safely access nested object properties
 * @param obj - The object to access
 * @param path - The path to the property (e.g., 'user.profile.name')
 * @param defaultValue - Default value if path doesn't exist
 * @returns The value at the path or the default value
 */
export function get<T>(
  obj: Record<string, any>,
  path: string,
  defaultValue?: T
): T | undefined {
  const keys = path.split('.');
  let result: any = obj;

  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }

  return result !== undefined ? result : defaultValue;
}

/**
 * Debounce function calls
 * @param func - The function to debounce
 * @param wait - The delay in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function calls
 * @param func - The function to throttle
 * @param limit - The time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Format number with commas
 * @param num - The number to format
 * @returns Formatted number string
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Clamp a number between min and max
 * @param num - The number to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped number
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/**
 * Linear interpolation between two values
 * @param start - Start value
 * @param end - End value
 * @param t - Interpolation factor (0-1)
 * @returns Interpolated value
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Check if code is running on client side
 * @returns True if running in browser
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Check if user prefers reduced motion
 * @returns True if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (!isClient()) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Generate a unique ID
 * @param prefix - Optional prefix for the ID
 * @returns Unique ID string
 */
export function generateId(prefix?: string): string {
  const id = Math.random().toString(36).substring(2, 9);
  return prefix ? `${prefix}-${id}` : id;
}

/**
 * Classnames utility for conditional class application
 * @param classes - Object with class names as keys and booleans as values
 * @returns Space-separated class string
 */
export function classNames(
  ...classes: (string | undefined | null | false | Record<string, boolean>)[]
): string {
  return classes
    .map((cls) => {
      if (!cls) return '';
      if (typeof cls === 'string') return cls;
      return Object.entries(cls)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(' ');
    })
    .filter(Boolean)
    .join(' ');
}
