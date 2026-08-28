/** @typedef {{ id: string, labelKey: string, icon: string }} NavItem */

/** @type {NavItem[]} */
export const navItems = [
  { id: 'hero', labelKey: 'nav.home', icon: 'home' },
  { id: 'about', labelKey: 'nav.about', icon: 'user' },
  { id: 'skills', labelKey: 'nav.skills', icon: 'skills' },
  { id: 'projects', labelKey: 'nav.projects', icon: 'projects' },
  { id: 'services', labelKey: 'nav.services', icon: 'services' },
  { id: 'certifications', labelKey: 'nav.certifications', icon: 'certifications' },
  { id: 'testimonials', labelKey: 'nav.testimonials', icon: 'testimonials' },
  { id: 'contact', labelKey: 'nav.contact', icon: 'contact' },
];

export const sectionIds = navItems.map((item) => item.id);
