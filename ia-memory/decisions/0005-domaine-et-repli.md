# 0005 — Domaine personnalisé avec repli GitHub Pages

**Date :** 2026-08-28
**Statut :** adoptée

## Contexte

Le site doit être servi sur `hippolytek.fr` tout en restant consultable sur l'URL de projet
GitHub Pages (`aziguy.github.io/react-portfolio/`), qui n'est pas à la racine du domaine.

## Décision

- `base: './'` dans la configuration Vite : toutes les ressources sont référencées relativement.
- `public/CNAME` versionné : le domaine est réappliqué à chaque déploiement.
- `start_url` et `scope` du manifeste également relatifs.
- Les URL absolues sont réservées aux balises canoniques, Open Graph et au JSON-LD, qui doivent
  toujours désigner le domaine de référence.

## Conséquences

- Un même artefact fonctionne sur les deux adresses, sans variable d'environnement de build.
- Un test end-to-end vérifie que la balise canonique pointe bien vers `https://hippolytek.fr/`.
