# 0006 — ESLint maintenu en version 9

**Date :** 2026-10-30
**Statut :** adoptée

## Contexte

Dependabot propose ESLint 10 dans le groupe `dev-dependencies`. `eslint-plugin-react`,
dont la dernière version est la 7.37.5, déclare `eslint` en dépendance pair jusqu'à `^9.7`
seulement : `npm ci` échoue (`ERESOLVE`) et toute la CI tombe avant le premier test.

## Décision

- `eslint` et `@eslint/js` restent en `^9`, le reste du groupe est mis à jour.
- Les nouvelles règles de `eslint-plugin-react-hooks` 7 restent actives. Les deux
  `set-state-in-effect` signalés sont désactivés ligne par ligne : ils découlent du rendu
  initial déterministe imposé par la [décision 0001](0001-pre-rendu-statique.md).

## Conséquences

- Dependabot reproposera ESLint 10 à chaque passage : ne pas fusionner tant que
  `npm view eslint-plugin-react peerDependencies` n'accepte pas `^10`.
- Ne pas contourner avec `--legacy-peer-deps` : le plugin n'est pas garanti sous ESLint 10.
