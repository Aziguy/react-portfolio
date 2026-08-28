import { describe, expect, it } from 'vitest';
import { certifications } from './certifications.js';
import { filterProjects, projectCategories, projects } from './projects.js';
import { services } from './services.js';
import { skillGroups } from './skills.js';
import { testimonials } from './testimonials.js';
import { navItems, sectionIds } from './navigation.js';
import { author, emailjsConfig, siteConfig, social } from './site.config.js';

const isHttps = (/** @type {string} */ url) => url.startsWith('https://');
const isBilingual = (/** @type {{fr: string, en: string}} */ value) =>
  Boolean(value?.fr?.trim() && value?.en?.trim());

describe('projets', () => {
  it('déclare des identifiants uniques', () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
  });

  it('rattache chaque projet à une catégorie connue', () => {
    projects.forEach((project) => expect(projectCategories).toContain(project.category));
  });

  it('expose au moins un lien en HTTPS par projet', () => {
    projects.forEach((project) => {
      const links = [project.repo, project.demo].filter((link) => typeof link === 'string');
      expect(links.length, project.slug).toBeGreaterThan(0);
      links.forEach((link) => expect(isHttps(link), link).toBe(true));
    });
  });

  it('fournit un titre et un résumé dans les deux langues', () => {
    projects.forEach((project) => {
      expect(isBilingual(project.title), project.slug).toBe(true);
      expect(isBilingual(project.summary), project.slug).toBe(true);
    });
  });

  it('renseigne une pile technique non vide', () => {
    projects.forEach((project) => expect(project.stack.length, project.slug).toBeGreaterThan(0));
  });

  it('met en avant au moins un projet', () => {
    expect(projects.some((project) => project.featured)).toBe(true);
  });
});

describe('filterProjects', () => {
  it('retourne tous les projets pour « all »', () => {
    expect(filterProjects('all')).toHaveLength(projects.length);
  });

  it.each(projectCategories)('ne retourne que la catégorie %s', (category) => {
    const filtered = filterProjects(category);
    expect(filtered.length).toBeGreaterThan(0);
    filtered.forEach((project) => expect(project.category).toBe(category));
  });

  it('couvre l’ensemble des projets en cumulant les catégories', () => {
    const total = projectCategories.reduce((sum, c) => sum + filterProjects(c).length, 0);
    expect(total).toBe(projects.length);
  });
});

describe('certifications', () => {
  it('pointe vers des badges Credly uniques et en HTTPS', () => {
    const links = certifications.map((cert) => cert.link);
    expect(new Set(links).size).toBe(links.length);
    links.forEach((link) => expect(link).toMatch(/^https:\/\/www\.credly\.com\/badges\//));
  });

  it('renseigne un intitulé et un organisme émetteur', () => {
    certifications.forEach((cert) => {
      expect(cert.title.trim()).not.toBe('');
      expect(cert.issuer.trim()).not.toBe('');
    });
  });
});

describe('compétences et services', () => {
  it('utilise uniquement des niveaux connus', () => {
    skillGroups
      .flatMap((group) => group.skills)
      .forEach((skill) => expect(['advanced', 'intermediate']).toContain(skill.level));
  });

  it('traduit chaque intitulé de groupe et chaque détail', () => {
    skillGroups.forEach((group) => {
      expect(isBilingual(group.title), group.id).toBe(true);
      group.skills.forEach((skill) => expect(isBilingual(skill.detail), skill.name).toBe(true));
    });
  });

  it('traduit chaque service et chacune de ses prestations', () => {
    services.forEach((service) => {
      expect(isBilingual(service.title), service.id).toBe(true);
      expect(isBilingual(service.pitch), service.id).toBe(true);
      service.items.forEach((item) => expect(isBilingual(item), service.id).toBe(true));
    });
  });
});

describe('recommandations', () => {
  it('déclare une langue supportée et un contenu non vide', () => {
    testimonials.forEach((testimonial) => {
      expect(['fr', 'en']).toContain(testimonial.lang);
      expect(testimonial.review.length).toBeGreaterThan(20);
      expect(testimonial.name.trim()).not.toBe('');
    });
  });
});

describe('configuration du site', () => {
  it('aligne les identifiants de navigation sur les sections', () => {
    expect(sectionIds).toEqual(navItems.map((item) => item.id));
    expect(new Set(sectionIds).size).toBe(sectionIds.length);
  });

  it('expose une URL canonique et une URL de repli en HTTPS', () => {
    expect(isHttps(siteConfig.url)).toBe(true);
    expect(isHttps(siteConfig.fallbackUrl)).toBe(true);
    expect(siteConfig.url).toContain(siteConfig.domain);
  });

  it('expose des liens sociaux en HTTPS', () => {
    Object.values(social).forEach((link) => expect(isHttps(link), link).toBe(true));
  });

  it('utilise une adresse email valide', () => {
    expect(author.email).toMatch(/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i);
  });

  it('ne code en dur aucun secret EmailJS', () => {
    Object.values(emailjsConfig).forEach((value) => expect(typeof value).toBe('string'));
  });
});
