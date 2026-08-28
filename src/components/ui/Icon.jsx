import {
  FiActivity,
  FiArrowUp,
  FiAward,
  FiCheck,
  FiCheckSquare,
  FiChevronLeft,
  FiChevronRight,
  FiClipboard,
  FiCode,
  FiCopy,
  FiCpu,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiHome,
  FiLayers,
  FiLayout,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiMessageSquare,
  FiMoon,
  FiServer,
  FiSun,
  FiTerminal,
  FiTrendingUp,
  FiUser,
  FiZap,
} from 'react-icons/fi';
import { SiCredly, SiWhatsapp } from 'react-icons/si';

const registry = {
  home: FiHome,
  user: FiUser,
  skills: FiLayers,
  projects: FiCode,
  services: FiZap,
  certifications: FiAward,
  testimonials: FiMessageSquare,
  contact: FiMail,

  testing: FiCheckSquare,
  alm: FiClipboard,
  frontend: FiLayout,
  backend: FiServer,
  devops: FiTerminal,
  methods: FiActivity,

  award: FiAward,
  trending: FiTrendingUp,
  folder: FiLayers,
  cpu: FiCpu,

  github: FiGithub,
  linkedin: FiLinkedin,
  credly: SiCredly,
  whatsapp: SiWhatsapp,
  messenger: FiMessageCircle,
  email: FiMail,

  sun: FiSun,
  moon: FiMoon,
  check: FiCheck,
  copy: FiCopy,
  download: FiDownload,
  external: FiExternalLink,
  code: FiCode,
  globe: FiGlobe,
  arrowUp: FiArrowUp,
  chevronLeft: FiChevronLeft,
  chevronRight: FiChevronRight,
};

/** @typedef {keyof typeof registry} IconName */

/**
 * @param {{ name: IconName, className?: string, size?: number | string }} props
 */
export const Icon = ({ name, className, size }) => {
  const Glyph = registry[name];
  if (!Glyph) return null;
  return <Glyph className={className} size={size} aria-hidden="true" focusable="false" />;
};
