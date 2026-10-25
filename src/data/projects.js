/**
 * @typedef {'qa' | 'web' | 'wordpress' | 'data'} ProjectCategory
 * @typedef {{ fr: string, en: string }} Localized
 * @typedef {{
 *   slug: string,
 *   title: Localized,
 *   summary: Localized,
 *   category: ProjectCategory,
 *   stack: string[],
 *   repo?: string,
 *   demo?: string,
 *   featured?: boolean,
 *   year: number
 * }} Project
 */

/** @type {ProjectCategory[]} */
export const projectCategories = ['qa', 'web', 'wordpress', 'data'];

/** @type {Project[]} */
export const projects = [
  {
    slug: 'kenako',
    title: { fr: 'Kenako', en: 'Kenako' },
    summary: {
      fr: "Prototype d'une plateforme SaaS multi-restaurants sans commission : cinq applications — vitrine, client, restaurateur, superadmin et livreur — bâties sur un socle commun de magasin d'état réactif, routeur à fragment, graphiques SVG et cartes Leaflet, le tout en modules ES natifs sans étape de compilation.",
      en: 'Prototype of a commission-free multi-restaurant SaaS platform: five applications — landing, customer, restaurateur, super-admin and courier — built on a shared foundation of reactive state store, hash router, SVG charts and Leaflet maps, in native ES modules with no build step.',
    },
    category: 'web',
    stack: ['JavaScript', 'Modules ES', 'Design System', 'Leaflet', 'PWA'],
    repo: 'https://github.com/Aziguy/kenako',
    demo: 'https://aziguy.github.io/kenako/',
    featured: true,
    year: 2026,
  },
  {
    slug: 'joses-cuisine',
    title: { fr: "Jose's Cuisine", en: "Jose's Cuisine" },
    summary: {
      fr: "PWA mobile-first pour une activité de restauration africaine dans les Yvelines. Chaque parcours — menu, recette, devis événement — se conclut par un message WhatsApp pré-rempli. Contenu entièrement piloté par des fichiers JSON, sans base de données.",
      en: 'Mobile-first PWA for an African home-cooking business near Paris. Every journey — menu, recipe, event quote — ends with a pre-filled WhatsApp message. Content is fully driven by JSON files, with no database.',
    },
    category: 'web',
    stack: ['React', 'Vite', 'TypeScript', 'PWA', 'React Router'],
    repo: 'https://github.com/Aziguy/pwa-joses-cuisine',
    demo: 'https://aziguy.github.io/pwa-joses-cuisine/',
    featured: true,
    year: 2026,
  },
  {
    slug: 'leguide-pc-config',
    title: { fr: 'Configurateur PC LeGuide', en: 'LeGuide PC Configurator' },
    summary: {
      fr: "PWA vitrine doublée d'un configurateur d'ordinateur portable avec aperçu 3D en direct : l'utilisateur compose sa machine composant par composant, puis transmet sa configuration par WhatsApp.",
      en: 'Showcase PWA paired with a laptop configurator featuring a live 3D preview: users assemble their machine component by component, then send the configuration over WhatsApp.',
    },
    category: 'web',
    stack: ['React', 'Vite', 'TypeScript', 'PWA'],
    repo: 'https://github.com/Aziguy/pwa-pc-config',
    year: 2026,
  },
  {
    slug: 'lgi-boutique',
    title: { fr: 'LeGuide Informatique — Boutique', en: 'LeGuide Informatique — Store' },
    summary: {
      fr: "Site e-commerce bilingue et back-office pour un revendeur informatique à deux boutiques : disponibilité par point de vente, réservation payée au retrait, commande par WhatsApp, gestion du stock, des codes promo et du blog. Palette retravaillée pour atteindre le contraste WCAG AA.",
      en: 'Bilingual e-commerce site and back office for a two-store IT retailer: per-store availability, reserve-and-pay-on-pickup, WhatsApp ordering, plus stock, promo code and blog management. Palette reworked to meet WCAG AA contrast.',
    },
    category: 'web',
    stack: ['HTML', 'CSS', 'JavaScript', 'E-commerce', 'i18n'],
    repo: 'https://github.com/Aziguy/lgi-web-site',
    demo: 'https://aziguy.github.io/lgi-web-site/',
    year: 2026,
  },
  {
    slug: 'interactive-resume',
    title: { fr: 'CV interactif', en: 'Interactive Resume' },
    summary: {
      fr: "CV web bilingue piloté par un seul fichier de configuration typé. À chaque build, Playwright imprime le site en PDF A4 par langue : la version téléchargeable reste toujours synchrone avec la version en ligne. Thème clair et sombre, JSON-LD et version complète sans JavaScript pour les robots.",
      en: 'Bilingual web resume driven by a single typed configuration file. On every build, Playwright prints the site to an A4 PDF per language, so the downloadable version always matches the online one. Light and dark themes, JSON-LD and a full no-JavaScript version for crawlers.',
    },
    category: 'web',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Playwright'],
    repo: 'https://github.com/Aziguy/interactive-resume-template',
    demo: 'https://aziguy.github.io/interactive-resume-template/',
    year: 2026,
  },
  {
    slug: 'arwyp',
    title: { fr: 'Arwyp Medical Centre', en: 'Arwyp Medical Centre' },
    summary: {
      fr: "Gabarit navigable du site et de la plateforme d'un centre médical : site public, back-office, espace spécialiste et portail patient installable en PWA, basculable entre deux propositions commerciales. Un moteur de listes commun gère filtres, tri, pagination et état partageable dans l'URL. Données fictives.",
      en: 'Navigable template of a medical centre website and platform: public site, back office, specialist workspace and installable PWA patient portal, switchable between two commercial proposals. A shared listing engine handles filters, sorting, pagination and shareable URL state. Fictitious data.',
    },
    category: 'web',
    stack: ['Astro', 'TypeScript', 'PWA', 'SEO'],
    repo: 'https://github.com/Aziguy/arwyp',
    demo: 'https://aziguy.github.io/arwyp/',
    year: 2026,
  },
  {
    slug: 'quorum',
    title: { fr: 'Quorum', en: 'Quorum' },
    summary: {
      fr: "Prototype de plateforme de vote libre et auditable pour associations, coopératives et conseils : assistant de scrutin, quorum et règles de majorité, séparation entre identité et bulletin, journal chaîné et procès-verbal. Moteur de dépouillement testé, sans serveur ni dépendance.",
      en: 'Prototype of a free, auditable voting platform for associations, cooperatives and boards: ballot wizard, quorum and majority rules, identity and ballot separation, hash-chained log and official minutes. Tested counting engine, with no server and no dependencies.',
    },
    category: 'web',
    stack: ['JavaScript', 'Modules ES', 'HTML', 'CSS'],
    repo: 'https://github.com/Aziguy/quorum-proto',
    demo: 'https://aziguy.github.io/quorum-proto/',
    year: 2026,
  },
  {
    slug: 'cypress-framework',
    title: { fr: 'Framework E2E Cypress', en: 'Cypress E2E Framework' },
    summary: {
      fr: 'Socle de tests end-to-end en TypeScript : commandes Cypress personnalisées, typage des fixtures, ESLint, Prettier, Husky et commitlint pour une base industrialisable en équipe.',
      en: 'TypeScript end-to-end testing foundation: custom Cypress commands, typed fixtures, ESLint, Prettier, Husky and commitlint for a team-ready, production-grade setup.',
    },
    category: 'qa',
    stack: ['Cypress', 'TypeScript', 'E2E', 'Husky', 'ESLint'],
    repo: 'https://github.com/Aziguy/cypress-training',
    featured: true,
    year: 2025,
  },
  {
    slug: 'rpn-calculator-api',
    title: { fr: 'API Calculatrice NPI', en: 'RPN Calculator API' },
    summary: {
      fr: "API REST d'évaluation d'expressions en notation polonaise inversée : gestion explicite des erreurs, persistance de l'historique, conteneurisation Docker et couverture par tests unitaires Pytest.",
      en: 'REST API evaluating reverse Polish notation expressions: explicit error handling, persisted history, Docker containerisation and Pytest unit-test coverage.',
    },
    category: 'qa',
    stack: ['Python', 'FastAPI', 'Docker', 'Pytest', 'SQLite'],
    repo: 'https://github.com/Aziguy/use_case_ayomi',
    year: 2024,
  },
  {
    slug: 'croke',
    title: { fr: 'CROKÉ', en: 'CROKÉ' },
    summary: {
      fr: 'Système de design e-commerce complet pour une marque artisanale : 26 écrans PWA et leur déclinaison web responsive, back-office compris, bâtis sur un modèle de données et un store uniques.',
      en: 'Complete e-commerce design system for an artisan brand: 26 PWA screens plus their responsive web counterpart, back office included, built on a single data model and store.',
    },
    category: 'web',
    stack: ['Design System', 'PWA', 'E-commerce', 'HTML', 'CSS'],
    repo: 'https://github.com/Aziguy/design-croke-web',
    demo: 'https://aziguy.github.io/design-croke-web/',
    year: 2026,
  },
  {
    slug: 'vehicle-summary',
    title: { fr: 'Vehicle Summary', en: 'Vehicle Summary' },
    summary: {
      fr: "Extension WordPress exposant les caractéristiques techniques de véhicules directement dans l'éditeur Gutenberg, alimentée par une base externe via API REST, avec sa propre catégorie de blocs.",
      en: 'WordPress plugin surfacing vehicle technical specifications directly inside the Gutenberg editor, fed by an external database over a REST API, with its own block category.',
    },
    category: 'wordpress',
    stack: ['WordPress', 'React', 'PHP', 'Tailwind CSS', 'API REST'],
    repo: 'https://github.com/Aziguy/resume-de-vehicule',
    year: 2024,
  },
  {
    slug: 'vegnature-theme',
    title: { fr: 'Thème Vegnature', en: 'Vegnature Theme' },
    summary: {
      fr: 'Thème WordPress sur mesure bâti avec Timber et Twig : séparation stricte entre logique PHP et présentation, partiels de templates réutilisables et code testable.',
      en: 'Bespoke WordPress theme built with Timber and Twig: strict separation between PHP logic and presentation, reusable template partials and testable code.',
    },
    category: 'wordpress',
    stack: ['WordPress', 'Timber', 'Twig', 'SCSS', 'PHP'],
    repo: 'https://github.com/Aziguy/vegnature-theme',
    year: 2024,
  },
  {
    slug: 'woocommerce-timber',
    title: { fr: 'Thème WooCommerce', en: 'WooCommerce Theme' },
    summary: {
      fr: 'Thème e-commerce WooCommerce construit sur le framework Timber, avec surcharge des templates boutique et pipeline de build des assets.',
      en: 'WooCommerce storefront theme built on the Timber framework, with shop template overrides and an asset build pipeline.',
    },
    category: 'wordpress',
    stack: ['WooCommerce', 'Timber', 'Twig', 'PHP'],
    repo: 'https://github.com/Aziguy/woocommerce-theme',
    year: 2024,
  },
  {
    slug: 'headless-wordpress',
    title: { fr: 'WordPress Headless', en: 'Headless WordPress' },
    summary: {
      fr: 'Site statique généré par Next.js consommant un WordPress headless via WPGraphQL : pages pré-rendues au build pour des performances et un référencement optimaux.',
      en: 'Static site generated by Next.js consuming a headless WordPress through WPGraphQL: pages pre-rendered at build time for optimal performance and SEO.',
    },
    category: 'web',
    stack: ['Next.js', 'React', 'GraphQL', 'WordPress'],
    repo: 'https://github.com/Aziguy/nextjs-wordpress-WPGraphQL',
    year: 2023,
  },
  {
    slug: 'nlp-sentiment',
    title: { fr: 'Analyse de sentiments', en: 'Sentiment Analysis' },
    summary: {
      fr: "Classification des avis clients Amazon par traitement automatique du langage : nettoyage du corpus, vectorisation, comparaison de modèles et restitution dans une application Streamlit.",
      en: 'Sentiment classification of Amazon customer reviews through natural language processing: corpus cleaning, vectorisation, model benchmarking and delivery as a Streamlit app.',
    },
    category: 'data',
    stack: ['Python', 'NLP', 'scikit-learn', 'Streamlit'],
    repo: 'https://github.com/Aziguy/NLP_thesis',
    year: 2021,
  },
  {
    slug: 'playstore-eda',
    title: { fr: 'EDA Google Play Store', en: 'Google Play Store EDA' },
    summary: {
      fr: 'Analyse exploratoire et modélisation par apprentissage automatique du jeu de données Google Play Store, restituées dans une application Streamlit interactive.',
      en: 'Exploratory data analysis and machine learning modelling on the Google Play Store dataset, delivered through an interactive Streamlit application.',
    },
    category: 'data',
    stack: ['Python', 'Pandas', 'Machine Learning', 'Streamlit'],
    repo: 'https://github.com/Aziguy/DataScienceEDA',
    year: 2020,
  },
];

/**
 * @param {ProjectCategory | 'all'} category
 * @returns {Project[]}
 */
export const filterProjects = (category) =>
  category === 'all' ? projects : projects.filter((project) => project.category === category);
