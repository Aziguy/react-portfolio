# 2026-10-30 : mises à jour Dependabot

## Objectif

Analyser et fusionner les sept PR ouvertes par Dependabot.

## Fusionnées telles quelles

CI verte sur chacune, fusion simulée en local sans conflit avant de fusionner.

| PR | Contenu |
| --- | --- |
| #1 | `actions/deploy-pages` 4 → 5 |
| #2 | `actions/upload-artifact` 4 → 7 |
| #3 | `actions/configure-pages` 5 → 6 |
| #4 | `actions/checkout` 4 → 7 |
| #5 | `actions/upload-pages-artifact` 3 → 5 (exclut les fichiers cachés : `dist` n'en contient aucun, `CNAME` n'est pas concerné) |
| #7 | React 19.3, react-icons 5.7, Swiper 11 → 14 |

## Reprise de la PR #8 (dépendances de développement)

La PR échouait dès `npm ci` : ESLint 10 est refusé par `eslint-plugin-react`. Reprise sur
`claude/determined-fermi-ym5i8t` :

- ESLint et `@eslint/js` maintenus en 9 ([décision 0006](../decisions/0006-eslint-9-maintenu.md)).
- Vite 8 (Rolldown) : `build.rollupOptions.output.manualChunks` sous forme d'objet n'est plus
  accepté ; remplacé par `build.rolldownOptions.output.codeSplitting.groups`. Les chunks
  `react` et `swiper` sont conservés.
- `eslint-plugin-react-hooks` 7 : deux `set-state-in-effect` désactivés ligne par ligne
  (`I18nProvider`, `useInView`), liés au pré-rendu.
- Vitest 5, `@vitejs/plugin-react` 6, jsdom 30, globals 17, Playwright 1.64 sans autre changement.

## Vérifications

`npm run verify` et `npx playwright test` (28 réussis, 2 ignorés) passent en local.
Le navigateur préinstallé du conteneur correspondant à Playwright 1.63, les tests e2e ont été
joués avec cette version ; la CI installe le navigateur de la version verrouillée.
