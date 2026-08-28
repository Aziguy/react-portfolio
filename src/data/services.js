/**
 * @typedef {{ fr: string, en: string }} Localized
 * @typedef {{ id: string, icon: string, title: Localized, pitch: Localized, items: Localized[] }} Service
 */

/** @type {Service[]} */
export const services = [
  {
    id: 'qa',
    icon: 'testing',
    title: { fr: 'Qualité et tests logiciels', en: 'Software quality and testing' },
    pitch: {
      fr: 'Sécuriser vos livraisons et réduire les régressions.',
      en: 'Secure your releases and cut regressions.',
    },
    items: [
      {
        fr: "Conception et automatisation de scénarios de tests pour applications web et mobile",
        en: 'Design and automation of test scenarios for web and mobile applications',
      },
      {
        fr: 'Rédaction de tests BDD en Gherkin, partagés entre QA, PO et développement',
        en: 'BDD test writing in Gherkin, shared across QA, PO and development',
      },
      {
        fr: 'Automatisation UI avec Cypress, Selenium et Playwright : régression, E2E et fonctionnel',
        en: 'UI automation with Cypress, Selenium and Playwright: regression, E2E and functional',
      },
      {
        fr: 'Gestion des campagnes de tests avec TestRail et XRay sous Jira',
        en: 'Test campaign management with TestRail and XRay for Jira',
      },
      {
        fr: 'Tests API REST et SOAP avec Postman et scripts automatisés',
        en: 'REST and SOAP API testing with Postman and automated scripts',
      },
      {
        fr: 'Mise en place de frameworks de tests réutilisables et documentés',
        en: 'Building reusable, documented test frameworks',
      },
    ],
  },
  {
    id: 'devops',
    icon: 'devops',
    title: { fr: 'DevOps, CI/CD et Cloud', en: 'DevOps, CI/CD and Cloud' },
    pitch: {
      fr: 'Industrialiser la chaîne de build et de déploiement.',
      en: 'Industrialise the build and deployment chain.',
    },
    items: [
      {
        fr: 'Pipelines CI/CD avec GitHub Actions et GitLab CI',
        en: 'CI/CD pipelines with GitHub Actions and GitLab CI',
      },
      {
        fr: "Conteneurisation avec Docker et Docker Compose",
        en: 'Containerisation with Docker and Docker Compose',
      },
      {
        fr: 'Automatisation des déploiements par scripts Shell et Ansible',
        en: 'Deployment automation through Shell scripts and Ansible',
      },
      {
        fr: 'Supervision et analyse des performances avec Prometheus et Grafana',
        en: 'Monitoring and performance analysis with Prometheus and Grafana',
      },
      {
        fr: 'Infrastructure as Code avec Terraform sur AWS, Azure et GCP',
        en: 'Infrastructure as Code with Terraform on AWS, Azure and GCP',
      },
      {
        fr: 'Gestion des versions, des releases et des stratégies de rollback',
        en: 'Version, release and rollback strategy management',
      },
    ],
  },
  {
    id: 'web',
    icon: 'frontend',
    title: { fr: 'Développement web', en: 'Web development' },
    pitch: {
      fr: 'Concevoir des applications rapides et maintenables.',
      en: 'Build fast, maintainable applications.',
    },
    items: [
      {
        fr: 'Applications web modernes avec React, Vite, Django et Laravel',
        en: 'Modern web applications with React, Vite, Django and Laravel',
      },
      {
        fr: 'Thèmes WordPress sur mesure avec Timber et Twig',
        en: 'Bespoke WordPress themes with Timber and Twig',
      },
      {
        fr: 'Plugins WordPress et blocs Gutenberg en React',
        en: 'WordPress plugins and Gutenberg blocks in React',
      },
      {
        fr: 'Optimisation des performances : lazy-loading, minification, découpage des bundles',
        en: 'Performance optimisation: lazy-loading, minification, bundle splitting',
      },
      {
        fr: 'Sites multilingues conformes aux bonnes pratiques i18n et SEO',
        en: 'Multilingual sites following i18n and SEO best practices',
      },
      {
        fr: 'Documentation technique et guides utilisateurs avec Hugo et Markdown',
        en: 'Technical documentation and user guides with Hugo and Markdown',
      },
    ],
  },
];
