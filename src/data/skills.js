/**
 * @typedef {'advanced' | 'intermediate'} SkillLevel
 * @typedef {{ fr: string, en: string }} Localized
 * @typedef {{ name: string, level: SkillLevel, detail: Localized }} Skill
 * @typedef {{ id: string, title: Localized, icon: string, skills: Skill[] }} SkillGroup
 */

/** @type {SkillGroup[]} */
export const skillGroups = [
  {
    id: 'testing',
    icon: 'testing',
    title: { fr: 'Tests et automatisation', en: 'Testing and automation' },
    skills: [
      {
        name: 'Cypress',
        level: 'advanced',
        detail: {
          fr: 'Tests end-to-end rapides pour applications web',
          en: 'Fast end-to-end testing for web applications',
        },
      },
      {
        name: 'Selenium',
        level: 'advanced',
        detail: {
          fr: 'Tests automatisés multi-navigateurs',
          en: 'Cross-browser automated testing',
        },
      },
      {
        name: 'Playwright',
        level: 'intermediate',
        detail: {
          fr: 'Tests UI multi-navigateurs et multi-plateformes',
          en: 'Cross-browser, cross-platform UI testing',
        },
      },
      {
        name: 'Appium',
        level: 'intermediate',
        detail: {
          fr: 'Tests automatisés pour applications mobiles',
          en: 'Automated testing for mobile applications',
        },
      },
      {
        name: 'Pytest',
        level: 'intermediate',
        detail: {
          fr: "Tests unitaires et d'intégration en Python",
          en: 'Unit and integration testing in Python',
        },
      },
      {
        name: 'Postman',
        level: 'intermediate',
        detail: {
          fr: 'Tests API REST et automatisation par scripts',
          en: 'REST API testing and script-driven automation',
        },
      },
    ],
  },
  {
    id: 'alm',
    icon: 'alm',
    title: { fr: 'ALM et gestion de tests', en: 'ALM and test management' },
    skills: [
      {
        name: 'XRay pour Jira',
        level: 'advanced',
        detail: {
          fr: 'Gestion avancée des tests automatisés',
          en: 'Advanced automated test management',
        },
      },
      {
        name: 'Gherkin / Cucumber',
        level: 'advanced',
        detail: { fr: 'Rédaction de scénarios BDD', en: 'Writing BDD scenarios' },
      },
      {
        name: 'Redmine',
        level: 'advanced',
        detail: {
          fr: 'Gestion de projets et suivi des anomalies',
          en: 'Project management and defect tracking',
        },
      },
      {
        name: 'Jira Software',
        level: 'intermediate',
        detail: { fr: 'Gestion Agile et suivi de tickets', en: 'Agile management and issue tracking' },
      },
      {
        name: 'TestRail',
        level: 'intermediate',
        detail: {
          fr: 'Gestion et planification de campagnes de tests',
          en: 'Test campaign management and planning',
        },
      },
      {
        name: 'Squash TM',
        level: 'intermediate',
        detail: {
          fr: 'Gestion des cas de tests et automatisation',
          en: 'Test case management and automation',
        },
      },
    ],
  },
  {
    id: 'frontend',
    icon: 'frontend',
    title: { fr: 'Développement Frontend', en: 'Frontend development' },
    skills: [
      {
        name: 'HTML, CSS, JavaScript',
        level: 'advanced',
        detail: { fr: 'Intégration et développement web', en: 'Web integration and development' },
      },
      {
        name: 'React.js',
        level: 'intermediate',
        detail: { fr: "Développement d'interfaces dynamiques", en: 'Building dynamic interfaces' },
      },
      {
        name: 'TypeScript',
        level: 'intermediate',
        detail: {
          fr: 'JavaScript typé pour projets structurés',
          en: 'Typed JavaScript for structured projects',
        },
      },
      {
        name: 'Tailwind CSS, Bootstrap',
        level: 'intermediate',
        detail: { fr: 'Frameworks CSS utilitaires', en: 'Utility-first CSS frameworks' },
      },
      {
        name: 'Vite / Gulp',
        level: 'advanced',
        detail: {
          fr: 'Outils de build et optimisation des performances',
          en: 'Build tooling and performance optimisation',
        },
      },
      {
        name: 'Hugo / Markdown',
        level: 'advanced',
        detail: { fr: 'Générateurs de sites statiques', en: 'Static site generators' },
      },
    ],
  },
  {
    id: 'backend',
    icon: 'backend',
    title: { fr: 'Développement Backend', en: 'Backend development' },
    skills: [
      {
        name: 'PHP',
        level: 'advanced',
        detail: { fr: 'Développement web et scripts serveur', en: 'Web development and server scripting' },
      },
      {
        name: 'WordPress',
        level: 'advanced',
        detail: {
          fr: 'Développement de thèmes et plugins sur mesure',
          en: 'Bespoke theme and plugin development',
        },
      },
      {
        name: 'Python / Django',
        level: 'intermediate',
        detail: { fr: 'Scripts, automatisation et backend', en: 'Scripting, automation and backend' },
      },
      {
        name: 'Laravel',
        level: 'intermediate',
        detail: {
          fr: 'Framework PHP pour applications robustes',
          en: 'PHP framework for robust applications',
        },
      },
      {
        name: 'Node.js',
        level: 'intermediate',
        detail: { fr: 'API REST et applications backend', en: 'REST APIs and backend applications' },
      },
      {
        name: 'C#',
        level: 'intermediate',
        detail: {
          fr: "Développement d'applications desktop et web",
          en: 'Desktop and web application development',
        },
      },
    ],
  },
  {
    id: 'devops',
    icon: 'devops',
    title: { fr: 'DevOps et Cloud', en: 'DevOps and Cloud' },
    skills: [
      {
        name: 'Git / GitHub',
        level: 'advanced',
        detail: {
          fr: 'Versionnage, stratégies de branches et revue de code',
          en: 'Versioning, branching strategies and code review',
        },
      },
      {
        name: 'GitHub Actions',
        level: 'advanced',
        detail: {
          fr: "Pipelines d'intégration et de déploiement continus",
          en: 'Continuous integration and deployment pipelines',
        },
      },
      {
        name: 'Docker',
        level: 'intermediate',
        detail: {
          fr: 'Conteneurisation et environnements reproductibles',
          en: 'Containerisation and reproducible environments',
        },
      },
      {
        name: 'GitLab CI',
        level: 'intermediate',
        detail: { fr: 'Automatisation des chaînes de livraison', en: 'Delivery pipeline automation' },
      },
      {
        name: 'Jenkins',
        level: 'intermediate',
        detail: {
          fr: "Orchestration de builds et de campagnes de tests",
          en: 'Build and test campaign orchestration',
        },
      },
      {
        name: 'Microsoft Azure',
        level: 'intermediate',
        detail: {
          fr: 'Services cloud, données et IA (certifié)',
          en: 'Cloud, data and AI services (certified)',
        },
      },
    ],
  },
  {
    id: 'methods',
    icon: 'methods',
    title: { fr: 'Méthodes et qualité', en: 'Methods and quality' },
    skills: [
      {
        name: 'Scrum / Kanban',
        level: 'advanced',
        detail: { fr: 'Cadres agiles et cérémonies associées', en: 'Agile frameworks and ceremonies' },
      },
      {
        name: 'BDD / TDD',
        level: 'advanced',
        detail: {
          fr: 'Développement piloté par les tests et le comportement',
          en: 'Test- and behaviour-driven development',
        },
      },
      {
        name: 'Clean Code',
        level: 'advanced',
        detail: {
          fr: 'Lisibilité, maintenabilité et revue par les pairs',
          en: 'Readability, maintainability and peer review',
        },
      },
      {
        name: 'Stratégie de test',
        level: 'advanced',
        detail: {
          fr: "Plans de test, pyramide de tests et critères d'acceptation",
          en: 'Test plans, test pyramid and acceptance criteria',
        },
      },
      {
        name: 'Accessibilité (WCAG)',
        level: 'intermediate',
        detail: {
          fr: 'Audits automatisés et corrections de conformité',
          en: 'Automated audits and compliance fixes',
        },
      },
      {
        name: 'SEO technique',
        level: 'intermediate',
        detail: {
          fr: 'Données structurées, performances et indexation',
          en: 'Structured data, performance and indexing',
        },
      },
    ],
  },
];
