# Journal des changements

## 2026-10-30 : mises à jour des dépendances

Compte rendu : [`sessions/2026-10-30-dependances.md`](sessions/2026-10-30-dependances.md).

### Modifié
- Actions GitHub : `checkout` 7, `upload-artifact` 7, `configure-pages` 6,
  `upload-pages-artifact` 5, `deploy-pages` 5.
- React 19.3, react-icons 5.7, Swiper 14.
- Vite 8, Vitest 5, `@vitejs/plugin-react` 6, `eslint-plugin-react-hooks` 7, jsdom 30.
- Découpage des chunks via `rolldownOptions.output.codeSplitting` (Vite 8).
- ESLint maintenu en 9 ([décision 0006](decisions/0006-eslint-9-maintenu.md)).

## 2026-10-25 : CV, années d'expérience et projets

Compte rendu : [`sessions/2026-10-25-cv-et-projets.md`](sessions/2026-10-25-cv-et-projets.md).

### Ajouté
- Projets **CV interactif**, **Arwyp Medical Centre** et **Quorum**, avec démos en ligne.
- Groupe de compétences « IA et productivité » et compétence Agilitest.

### Modifié
- 10 ans d'expérience (statistique, biographie, méta description).
- « Télécharger le CV » ouvre le PDF généré par le CV interactif, dans la langue affichée.

### Supprimé
- `src/assets/KENGNI_Hippolyte_CV_FR_082025_dev.pdf` (1,4 Mo, août 2025, français seul).

## 2026-09-05 — Enrichissement de la section Projets

### Ajouté
- **Kenako** — prototype de plateforme SaaS multi-restaurants (cinq applications, socle
  commun, cartes Leaflet), mis en avant. Démo : https://aziguy.github.io/kenako/
- **LeGuide Informatique — Boutique** — site e-commerce bilingue et back-office.
  Démo : https://aziguy.github.io/lgi-web-site/

### Modifié
- Le projet `pwa-pc-config` devient « Configurateur PC LeGuide » (slug `leguide-pc-config`) :
  le client LeGuide Informatique a désormais deux réalisations distinctes dans la section.
- Mise en avant recentrée sur trois projets, un par axe : Kenako, Jose's Cuisine, Cypress.
- Playwright utilise un port dédié (4319) et ne réutilise plus un serveur déjà en écoute.
  Un `http-server` d'un autre dépôt occupait le port 4173 et faisait passer toute la suite
  sur la mauvaise application sans que rien ne le signale.

La section compte 13 projets : 2 QA, 6 Web & PWA, 3 WordPress, 2 Data & IA.

## 2026-08-28 — Refonte complète

Compte rendu détaillé : [`sessions/2026-08-28-refonte.md`](sessions/2026-08-28-refonte.md).

### Ajouté
- Section Projets avec 11 réalisations filtrables par catégorie.
- Internationalisation français/anglais avec bascule et détection navigateur.
- Thèmes clair et sombre, persistés, sans clignotement au chargement.
- Pré-rendu statique du HTML au build, puis hydratation.
- Données structurées JSON-LD `WebSite`, `Person` et `ItemList`.
- Suite de tests : 52 unitaires (Vitest) et 28 end-to-end (Playwright, dont axe-core).
- CI bloquante avant déploiement, publication via `actions/deploy-pages`, Dependabot.
- `public/CNAME`, `LICENSE`, `.env.example`, `scripts/optimize-images.mjs`, `ia-memory/`.

### Modifié
- Architecture réorganisée : contenu dans `src/data/`, primitives dans `src/components/ui/`.
- Système de design reconstruit sur des jetons CSS ; polices auto-hébergées.
- Navigation : barre haute sur desktop, barre flottante sur mobile, scroll-spy réel.
- Formulaire de contact : validation, pot de miel anti-spam, dégradation contrôlée.
- Images recompressées, 2 Mo économisés.
- Chemins de ressources relatifs pour fonctionner aussi sur l'URL GitHub Pages de repli.

### Corrigé
- Lien GitHub cassé dans l'en-tête.
- Domaine et adresse email incohérents entre les fichiers.
- Textes anglais résiduels dans l'interface française.
- Mots-clés dissimulés dans des `<span hidden>` de la section compétences.
- Perte du domaine personnalisé à chaque déploiement.

### Supprimé
- Dépendance `emailjs` inutilisée, texture de fond obsolète, README de gabarit Vite.
