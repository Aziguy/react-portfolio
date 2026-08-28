# 0004 — Identifiants EmailJS sortis du code source

**Date :** 2026-08-28
**Statut :** adoptée

## Contexte

Les identifiants `service_id`, `template_id` et la clé publique EmailJS étaient codés en dur
dans le composant de contact.

Ces trois valeurs sont **par nature exposées** : EmailJS s'appelle depuis le navigateur, donc
elles se retrouvent dans le bundle JavaScript servi, que le dépôt soit public ou non. Les
sortir du code ne les rend donc pas secrètes — la seule protection réelle est la restriction
de domaine côté EmailJS.

## Décision

- Lire ces valeurs depuis `import.meta.env` (`VITE_EMAILJS_*`) et les injecter au build depuis
  les secrets du dépôt.
- Faire dégrader le formulaire proprement en leur absence : un message invite alors à écrire
  directement par email.
- **Activer la liste blanche de domaines dans le tableau de bord EmailJS**, limitée à
  `hippolytek.fr` et `aziguy.github.io`, ainsi que la limitation de débit.

## Conséquences

- Les forks et les environnements locaux n'héritent pas des identifiants de production.
- Le mode dégradé est couvert par un test unitaire.
- Sans la liste blanche de domaines, n'importe quel site pourrait consommer le quota d'envoi :
  c'est le point de contrôle qui compte, pas la confidentialité des identifiants.
