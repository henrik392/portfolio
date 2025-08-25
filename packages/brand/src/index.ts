// Import and re-export styles
import './styles.css';

// biome-ignore lint/performance/noBarrelFile: This is the main package entry point
export { default as Footer } from './components/footer';
// Components
export { default as Logo } from './components/logo';

// Types
export type {
  BaseComponentProps,
  FooterLink,
  FooterProps,
  LogoProps,
  Theme,
  ThemeContextValue,
} from './types';

export { DEFAULT_SOCIAL_LINKS, EXTERNAL_SOCIAL_LINKS } from './types';
