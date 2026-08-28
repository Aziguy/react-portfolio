# Reste à faire

## Priorité haute

- [ ] **Régénérer les identifiants EmailJS.** Les anciens sont dans l'historique Git désormais
      public. Créer un nouveau service et un nouveau template, puis mettre à jour les secrets
      `VITE_EMAILJS_*` du dépôt. Voir [décision 0004](decisions/0004-secrets-emailjs.md).
- [ ] **Remplacer `public/preview.jpg`.** L'aperçu Open Graph date de la version précédente
      du site. Format attendu : 1200 × 630 px.
- [ ] **Actualiser le CV.** `src/assets/KENGNI_Hippolyte_CV_FR_082025_dev.pdf` pèse 1,4 Mo et
      porte une date d'août 2025 ; prévoir une version compressée et une version anglaise.

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
