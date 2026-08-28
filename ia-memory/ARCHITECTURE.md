# Architecture

## Principe directeur

Le contenu est séparé de la présentation. Aucun texte destiné au visiteur, aucun lien et aucune
donnée métier ne vit dans un composant : tout est déclaré dans `src/data/` ou `src/i18n/locales/`.
Ajouter un projet ou une certification ne demande donc jamais de modifier du JSX.

## Arborescence

| Répertoire | Responsabilité | Règle |
| --- | --- | --- |
| `src/data/` | Contenu et configuration du site | Aucune importation de React |
| `src/i18n/` | Dictionnaires, contexte et helpers de traduction | Les composants passent par `useI18n()` |
| `src/hooks/` | Logique réutilisable liée au navigateur | Un hook par fichier, tolérant à l'absence d'API |
| `src/lib/` | Fonctions pures (validation, stockage, SEO) | Testables sans DOM |
| `src/styles/` | Jetons, base, utilitaires | Aucune couleur codée en dur hors `tokens.css` |
| `src/components/ui/` | Primitives sans contenu métier | Réutilisables partout |
| `src/components/layout/` | Chrome de page | Une feuille de style par composant |
| `src/components/sections/` | Une section de page par fichier | Consomme `src/data/`, jamais l'inverse |

## Conventions

- **Nommage** : composants en `PascalCase.jsx`, feuille de style associée en `kebab-case.css`
  dans le même dossier, hooks en `useXxx.js`, modules de données au pluriel.
- **Typage** : pas de TypeScript, mais du JSDoc vérifié par `tsc --noEmit` via `jsconfig.json`
  (`checkJs` et `strict` activés). `npm run typecheck` doit rester à zéro erreur.
- **Textes bilingues** : les données exposent `{ fr, en }` et sont résolues par `l()` ;
  les libellés d'interface passent par `t('cle.pointee')`.
- **Styles** : uniquement des variables CSS de `tokens.css`. Le thème clair redéfinit les mêmes
  jetons, donc aucun composant n'a besoin de connaître le thème actif.
- **Commentaires** : réservés aux décisions non évidentes (contrainte SSR, bug navigateur).

## Chaîne de rendu

1. `vite build` produit le bundle client.
2. `vite build --ssr src/entry-server.jsx` produit un bundle Node.
3. `scripts/prerender.mjs` exécute `render()`, injecte le HTML dans `dist/index.html`,
   y ajoute le JSON-LD et régénère le sitemap avec la date du jour.
4. Au chargement, `main.jsx` hydrate le marquage existant plutôt que de le recréer.

### Contraintes imposées par le pré-rendu

- La locale initiale est toujours `fr` ; la détection navigateur s'applique après montage.
  Sans cela, le HTML pré-rendu et la première passe d'hydratation divergeraient.
- L'icône du sélecteur de thème est choisie par CSS (`[data-theme] .topbar__icon--…`),
  pas par React, pour la même raison.
- L'animation de révélation est conditionnée par la classe `js` posée par le script de
  démarrage : sans JavaScript, le contenu reste visible et donc indexable.

## Qualité

`npm run verify` enchaîne lint, types, tests unitaires et build. La CI ajoute les tests
Playwright (desktop et mobile) et l'audit d'accessibilité axe-core. Le déploiement dépend
de cette chaîne : aucun échec ne peut atteindre la production.
