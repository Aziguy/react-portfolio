import { author, siteConfig, social } from '../data/site.config.js';
import { skillGroups } from '../data/skills.js';
import { projects } from '../data/projects.js';
import { translate } from '../i18n/translate.js';

const knowsAbout = [...new Set(skillGroups.flatMap((group) => group.skills.map((s) => s.name)))];

/** @param {import('../i18n/i18n-context.js').Locale} locale */
export const buildPersonSchema = (locale) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: author.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/preview.jpg`,
  email: `mailto:${author.email}`,
  jobTitle: translate(locale, 'hero.role'),
  description: translate(locale, 'meta.description'),
  knowsLanguage: ['fr', 'en'],
  knowsAbout,
  address: {
    '@type': 'PostalAddress',
    addressLocality: author.location.city,
    addressCountry: author.location.countryCode,
  },
  sameAs: [social.linkedin, social.github, social.credly],
  hasOccupation: {
    '@type': 'Occupation',
    name: translate(locale, 'hero.role'),
    occupationLocation: { '@type': 'Country', name: author.location.country },
  },
});

/** @param {import('../i18n/i18n-context.js').Locale} locale */
export const buildProjectsSchema = (locale) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: translate(locale, 'projects.title'),
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'SoftwareSourceCode',
      name: project.title[locale],
      description: project.summary[locale],
      programmingLanguage: project.stack,
      codeRepository: project.repo,
      url: project.demo ?? project.repo,
    },
  })),
});

/** @param {import('../i18n/i18n-context.js').Locale} locale */
export const buildWebSiteSchema = (locale) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: translate(locale, 'meta.title'),
  url: siteConfig.url,
  inLanguage: locale,
  author: { '@type': 'Person', name: author.name },
});
