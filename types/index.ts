/**
 * Application-wide TypeScript type definitions
 * Provides type safety and better IDE support
 */

// ============================================================================
// Common Types
// ============================================================================

export type Theme = 'light' | 'dark';

export type SectionId =
  | 'video'
  | 'why'
  | 'start'
  | 'who'
  | 'trackers'
  | 'club'
  | 'request'
  | 'dashboard'
  | 'custom'
  | 'how'
  | 'quotes';

// ============================================================================
// Component Props
// ============================================================================

export interface HeaderProps {
  activeSection: string;
}

export interface SideRailProps {
  activeSection: string;
}

export interface TrackersProps {
  onOpenModal: (productKey: string) => void;
}

export interface ProductModalProps {
  productKey: string | null;
  onClose: () => void;
}

// ============================================================================
// Data Types
// ============================================================================

export interface NavLink {
  href: string;
  label: string;
}

export interface Persona {
  biz: string;
  loc: string;
  tag: string;
  figLabel: string;
  fig: string;
  delta: string;
  down?: boolean;
  note: string;
  chip: string;
  series: number[];
}

export interface TrackerSlide {
  type: 'bars' | 'table' | 'kpis' | 'notes';
  title: string;
  data?: {
    labels?: string[];
    values?: number[];
    rows?: Array<Record<string, string | number>>;
    kpis?: Array<{ label: string; value: string; delta?: string }>;
    items?: string[];
  };
}

export interface Tracker {
  kind: string;
  title: string;
  price: string;
  unit: string;
  buy: string;
  href: string;
  good: string;
  list: string[];
  slides: TrackerSlide[];
  modNote: string;
}

export interface Quote {
  text: string;
  avatar: string;
  author: string;
  role: string;
}

export interface ClubTier {
  name: string;
  price: string;
  unit: string;
  desc: string;
  list: string[];
  cta: string;
  highlight?: boolean;
}

// ============================================================================
// Utility Types
// ============================================================================

export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: React.ReactNode;
}

export interface WithAriaLabel {
  'aria-label'?: string;
}

// ============================================================================
// Hook Return Types
// ============================================================================

export interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

export interface UseScrollSpyReturn {
  activeSection: string;
}

// ============================================================================
// CSS Custom Properties
// ============================================================================

export interface AnimatedElementStyle extends React.CSSProperties {
  '--d'?: string;
  '--r'?: string;
  '--w'?: string;
  '--a'?: number;
  '--b'?: number;
}
