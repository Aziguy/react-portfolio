# 0004 — Identifiants EmailJS sortis du code source

**Date :** 2026-08-28
**Statut :** adoptée

## Contexte

Les identifiants `service_id`, `template_id` et la clé publique EmailJS étaient codés en dur
dans le composant de contact. Le dépôt devenant public, ils deviennent lisibles par tous,
y compris dans l'historique Git.

## Décision

Lire ces valeurs depuis `import.meta.env` (`VITE_EMAILJS_*`), les injecter au build depuis les
secrets du dépôt, et faire dégrader le formulaire proprement lorsqu'elles sont absentes :
un message invite alors à écrire directement par email.

## Conséquences

- Les valeurs ne sont plus dans le code, mais **restent présentes dans l'historique Git** :
  elles doivent être régénérées depuis le tableau de bord EmailJS.
- Un développement local sans `.env` fonctionne, formulaire compris, en mode dégradé.
- Un test unitaire couvre ce mode dégradé.
