# 2026-10-25 : CV, années d'expérience et projets

## Objectif

Aligner le portfolio sur le CV interactif refondu le même jour
(`Aziguy/interactive-resume-template`) : 10 ans d'expérience, nouveaux projets, compétences IA.

## Changements

- `yearsOfExperience` passe à 10 ; textes « neuf ans » et méta description alignés (FR, EN, `index.html`).
- Le bouton « Télécharger le CV » pointe vers les PDF générés à chaque build du CV interactif,
  un par langue (`resumePdf` dans `site.config.js`). Le PDF local de 1,4 Mo daté d'août 2025 est
  supprimé : le CV n'est plus monolingue ni périmé, et le site s'allège.
- Compétences : Agilitest ajouté aux tests, nouveau groupe « IA et productivité » (icône `cpu`).

## Veille projets

Comparaison de `gh api users/Aziguy/repos?sort=pushed` avec `src/data/projects.js`,
README lus et démos vérifiées (HTTP 200) avant rédaction.

| Dépôt | Pourquoi |
| --- | --- |
| `interactive-resume-template` | CV bilingue, PDF A4 généré au build avec Playwright, démo en ligne |
| `arwyp` | Plateforme de centre médical (Astro) : site, back-office, portails, PWA, démo en ligne |
| `quorum-proto` | Vote auditable sans serveur, moteur de dépouillement testé, démo en ligne |

La section compte 16 projets : 2 QA, 9 Web & PWA, 3 WordPress, 2 Data & IA.

## Vérifications

`npm run verify` et `npx playwright test` (28 réussis, 2 ignorés) passent en local.

## Points ouverts

- `author.location` indique Montpellier alors que le CV indique Bordeaux ; le téléphone
  diffère aussi (+237 ici, +33 sur le CV). À confirmer avant d'aligner.
- Le badge « Disponible pour de nouvelles missions » cohabite avec un poste actuel chez
  Dedalus Healthcare France : à reformuler si le portfolio ne vise plus les missions.
