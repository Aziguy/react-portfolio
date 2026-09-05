# Reste à faire

## Priorité haute

État vérifié le **2026-09-05** (secrets, DNS et bundle de production contrôlés).

- [ ] **Créer les secrets EmailJS du dépôt.** `gh secret list` est vide et les identifiants
      sont absents du bundle servi en production : le formulaire de contact est donc en mode
      dégradé, il invite à écrire par email au lieu d'envoyer. À poser :

      gh secret set VITE_EMAILJS_SERVICE_ID  --body "service_up9t38v"
      gh secret set VITE_EMAILJS_TEMPLATE_ID --body "template_qm1num3"
      gh secret set VITE_EMAILJS_PUBLIC_KEY  --body "Pbi1rXkWuDv5H6gKR"

      Un nouveau déploiement est nécessaire ensuite pour les injecter dans le build.

- [ ] **Terminer la correction DNS de `www`.** Les enregistrements A ont bien été remplacés par
      un CNAME, mais celui-ci pointe vers l'apex `hippolytek.fr` et non vers `aziguy.github.io`.
      GitHub ne reconnaît donc pas le sous-domaine et n'émet pas de certificat pour lui :
      `https://www.hippolytek.fr` échoue toujours en `SEC_E_WRONG_PRINCIPAL`. Chez le registrar,
      faire pointer **CNAME `www` → `aziguy.github.io`**. L'apex fonctionne en HTTPS et n'est
      pas concerné.

- [ ] **Restreindre EmailJS au domaine du site.** Dans le tableau de bord EmailJS, limiter les
      domaines autorisés à `hippolytek.fr` et `aziguy.github.io` et activer la limitation de
      débit. Les identifiants sont exposés côté client par construction : c'est cette restriction
      qui protège le quota d'envoi. Voir [décision 0004](decisions/0004-secrets-emailjs.md).

- [ ] **Actualiser le CV.** `src/assets/KENGNI_Hippolyte_CV_FR_082025_dev.pdf` pèse 1,4 Mo et
      porte une date d'août 2025 ; prévoir une version compressée et une version anglaise.
      C'est le fichier le plus lourd du site et le seul contenu encore monolingue.

## Priorité moyenne

- [ ] Ajouter des captures d'écran aux cartes de projets une fois disponibles.
- [ ] Publier une page dédiée par projet si le contenu s'étoffe (nécessitera un routeur
      et un pré-rendu multi-pages).
- [ ] Mesurer les Core Web Vitals en conditions réelles et ajouter un budget de performance
      Lighthouse à la CI.
- [ ] Ajouter le rôle et l'entreprise de chaque personne recommandante lorsqu'ils manquent.

## Priorité basse

- [ ] Migrer progressivement vers TypeScript, le JSDoc servant de base
      ([décision 0002](decisions/0002-javascript-et-jsdoc.md)).
- [ ] Ajouter une section « Parcours » sous forme de frise chronologique.
- [ ] Envisager un flux d'articles techniques pour alimenter le référencement.

## Veille périodique

- [ ] Rechercher les nouveaux dépôts publics à intégrer à la section Projets :
      comparer `gh api "users/Aziguy/repos?per_page=100&sort=pushed"` aux dépôts déjà
      référencés dans `src/data/projects.js`. Lire le README et vérifier que la démo répond
      avant d'écrire une description. Voir [`sessions/2026-09-05-projets.md`](sessions/2026-09-05-projets.md).
