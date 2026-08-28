# 0003 — Internationalisation maison plutôt qu'une bibliothèque

**Date :** 2026-08-28
**Statut :** adoptée

## Contexte

Le profil vise des recruteurs francophones et anglophones. Le besoin se limite à deux langues,
sans pluriels complexes, sans dates localisées et sans chargement différé.

## Décision

Un contexte React d'une centaine de lignes : dictionnaires JSON pour les libellés d'interface,
champs `{ fr, en }` dans les données de contenu, résolution par `t()` et `l()`.

## Conséquences

- Aucune dépendance supplémentaire ni surcoût de bundle.
- Un test vérifie que les dictionnaires français et anglais exposent exactement les mêmes clés
  et qu'aucune valeur n'est vide : une traduction oubliée fait échouer la CI.
- Le rendu initial force la locale par défaut pour rester compatible avec le pré-rendu
  ([0001](0001-pre-rendu-statique.md)) ; la langue du navigateur s'applique après montage.
- Si un jour il faut des URL par langue ou des pluriels, il faudra passer à `i18next`.
