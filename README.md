# Portfolio — Hippolyte Kengni

[![CI](https://github.com/Aziguy/react-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Aziguy/react-portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/Aziguy/react-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Aziguy/react-portfolio/actions/workflows/deploy.yml)

Portfolio professionnel d'Hippolyte Kengni, ingénieur QA Automation et développeur web full stack.

**En ligne : [hippolytek.fr](https://hippolytek.fr)** — repli : [aziguy.github.io/react-portfolio](https://aziguy.github.io/react-portfolio/)

## Ce que le projet démontre

| Sujet | Mise en œuvre |
| --- | --- |
| Rendu | Application React 19 pré-rendue au build (SSG) puis hydratée : le contenu complet est dans le HTML servi |
| Internationalisation | Français et anglais, détection navigateur, préférence persistée, `hreflang` |
| Accessibilité | WCAG 2.1 AA vérifié automatiquement par axe-core, lien d'évitement, navigation clavier, `prefers-reduced-motion` |
| SEO | Données structurées JSON-LD (`WebSite`, `Person`, `ItemList`), canonique, Open Graph, sitemap et robots |
| Tests | 52 tests unitaires (Vitest + Testing Library) et 28 tests end-to-end (Playwright, desktop et mobile) |
| Qualité | ESLint strict, vérification de types via JSDoc et `tsc`, CI bloquante avant tout déploiement |
| Performance | Images optimisées au build, polices auto-hébergées, découpage des bundles, `fetchpriority` sur le visuel principal |

## Démarrage

```bash
npm ci
npm run dev
```

Le formulaire de contact utilise [EmailJS](https://dashboard.emailjs.com). Copiez `.env.example` vers `.env`
et renseignez les trois identifiants ; sans eux le formulaire reste affiché mais invite à écrire par email.

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build client, build SSR puis pré-rendu statique dans `dist/` |
| `npm run preview` | Sert le résultat du build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Vérification de types sur le JSDoc |
| `npm run test` | Tests unitaires |
| `npm run test:coverage` | Tests unitaires avec couverture |
| `npm run test:e2e` | Tests Playwright (nécessite `npx playwright install`) |
| `npm run verify` | Lint, types, tests et build enchaînés |
| `npm run optimize:images` | Recompresse les images de `src/assets` |

## Architecture

```
src/
├── data/          Contenu du site : projets, compétences, services, certifications, configuration
├── i18n/          Dictionnaires FR/EN, contexte et helpers de traduction
├── hooks/         Thème, scroll-spy, révélation au défilement, préférences de mouvement
├── lib/           Validation, stockage tolérant aux erreurs, génération des données structurées
├── styles/        Jetons de design, base, utilitaires
├── components/
│   ├── ui/        Primitives réutilisables (Section, Reveal, Icon, ErrorBoundary)
│   ├── layout/    Barre haute, navigation mobile, pied de page, lien d'évitement
│   └── sections/  Une section de page par fichier, avec sa feuille de style
└── entry-server.jsx  Point d'entrée du pré-rendu
```

Le contenu est entièrement séparé de la présentation : **ajouter un projet, une compétence ou une
certification se fait dans `src/data/`, sans toucher aux composants**. Chaque texte destiné au visiteur
y est déclaré sous la forme `{ fr, en }` et les libellés d'interface vivent dans `src/i18n/locales/`.

Les tests de `src/data/content.test.js` vérifient l'intégrité de ces données : identifiants uniques,
catégories connues, liens en HTTPS, traductions présentes dans les deux langues.

## Déploiement

Chaque `push` sur `master` déclenche `deploy.yml`, qui rejoue d'abord toute la chaîne qualité
(`ci.yml`) puis publie `dist/` sur GitHub Pages. Un échec de lint, de types, de tests unitaires
ou de tests end-to-end empêche la mise en ligne.

Le domaine personnalisé est déclaré par `public/CNAME`, donc réappliqué à chaque déploiement.
Les identifiants EmailJS sont injectés depuis les secrets du dépôt
(`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`).

Les chemins des ressources sont relatifs : le site fonctionne à l'identique sur le domaine
personnalisé et sur l'URL GitHub Pages de repli.

## Mémoire du projet

`ia-memory/` conserve les décisions d'architecture, le journal des changements et le reste à faire.

## Licence

Le code est publié sous licence MIT. Les contenus personnels — texte, photographies, CV,
recommandations et badges de certification — ne sont pas couverts par cette licence.
