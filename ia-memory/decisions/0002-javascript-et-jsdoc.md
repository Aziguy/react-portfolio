# 0002 — JavaScript typé par JSDoc plutôt que migration TypeScript

**Date :** 2026-08-28
**Statut :** adoptée

## Contexte

L'objectif de robustesse appelait un typage statique, mais une migration complète en `.tsx`
sur un codebase en pleine refonte multipliait les risques de régression.

## Décision

Rester en `.jsx`, décrire les types en JSDoc et les faire vérifier par `tsc --noEmit` via
`jsconfig.json` avec `checkJs` et `strict`. La commande `npm run typecheck` fait partie de
la CI et doit rester à zéro erreur.

## Conséquences

- Le typage est réel : les erreurs de forme de données sont détectées au build.
- L'éditeur offre l'autocomplétion et la navigation sans étape de compilation.
- Certains modules sans types (`swiper/css`) demandent une déclaration dans `src/types.d.ts`.
- La migration vers TypeScript reste possible fichier par fichier, le JSDoc servant de base.
