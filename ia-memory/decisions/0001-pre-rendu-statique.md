# 0001 — Pré-rendu statique plutôt que rendu client seul

**Date :** 2026-08-28
**Statut :** adoptée

## Contexte

Le portfolio était une application React rendue entièrement côté client : le HTML servi ne
contenait qu'une div vide. Tout le contenu indexable (projets, compétences, services,
recommandations) dépendait de l'exécution du JavaScript par le robot d'indexation.

## Décision

Générer le HTML au build avec `react-dom/server`, l'injecter dans `dist/index.html`, puis
hydrater côté client. Le JSON-LD est également écrit statiquement dans le `<head>`.

## Conséquences

- Le contenu est indexable sans exécution de JavaScript et le rendu perçu est immédiat.
- La locale initiale et l'icône de thème doivent être déterministes au premier rendu,
  sinon l'hydratation diverge. Voir [0003](0003-i18n-maison.md).
- Le build comporte trois étapes au lieu d'une (`build:client`, `build:ssr`, `prerender`).
- Aucun serveur n'est nécessaire : la sortie reste un site statique déployable sur GitHub Pages.

## Alternatives écartées

- **Next.js** : migration lourde pour un site d'une seule page.
- **Compter sur le rendu JavaScript de Google** : fonctionne souvent, mais ne couvre ni les
  autres moteurs ni les aperçus sociaux, et dégrade le premier affichage.
