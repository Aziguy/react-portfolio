# Consignes pour les assistants

## À lire en premier

`ia-memory/` est la mémoire de travail du projet. Consultez-la avant toute modification :

- `ia-memory/ARCHITECTURE.md` — structure, conventions, contraintes du pré-rendu
- `ia-memory/BACKLOG.md` — ce qui reste à faire
- `ia-memory/decisions/` — décisions d'architecture, une par fichier
- `ia-memory/CHANGELOG.md` et `ia-memory/sessions/` — historique

Mettez ces fichiers à jour avant de conclure une session : nouvelle entrée dans
`CHANGELOG.md`, compte rendu daté dans `sessions/`, et un fichier `decisions/NNNN-titre.md`
pour toute décision structurante.

## Règles du projet

- **Langue** : français, dans le code comme dans les échanges.
- **Contenu** : rien de destiné au visiteur ne vit dans un composant. Tout passe par
  `src/data/` (champs `{ fr, en }`) ou `src/i18n/locales/`.
- **Commentaires** : rares, réservés aux décisions non évidentes.
- **Commits** : message court, une ligne, format conventionnel (`feat:`, `fix:`, `refactor:`).
  Aucune signature ni mention d'un assistant IA.
- **Avant de pousser** : `npm run verify` (lint, types, tests, build) doit passer.
  La CI rejoue la même chaîne plus les tests Playwright et bloque le déploiement en cas d'échec.

## Pièges connus

- Le site est pré-rendu au build : le rendu initial doit être **déterministe**. La locale
  démarre toujours en français et l'icône de thème est choisie par CSS, sinon l'hydratation
  diverge. Voir `ia-memory/decisions/0001-pre-rendu-statique.md`.
- Les chemins de ressources sont relatifs (`base: './'`) pour fonctionner aussi sur l'URL
  GitHub Pages de repli. Ne pas les repasser en absolu.
- `public/CNAME` porte le domaine personnalisé : le supprimer casserait `hippolytek.fr`.
