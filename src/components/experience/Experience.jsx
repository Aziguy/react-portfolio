import React from 'react';
import { PiSealCheckFill } from "react-icons/pi";
import './experience.css';

export const Experience = () => {
  const experienceData = [
    {
      category: "Tests et automatisation logiciels",
      skills: [
        { name: "Pytest", hiddenInfo: "(tests unitaires et d’intégration en Python)", level: "Intermédiaire" },
        { name: "Selenium", hiddenInfo: "(tests automatisés multi-navigateurs)", level: "Confirmé" },
        { name: "Appium", hiddenInfo: "(tests automatisés pour applications mobiles)", level: "Intermédiaire" },
        { name: "Cypress", hiddenInfo: "(tests end-to-end rapides pour applications web)", level: "Confirmé" },
        { name: "Playwright", hiddenInfo: "(tests UI multi-navigateurs et multi-plateformes)", level: "Intermédiaire" },
        { name: "Postman", hiddenInfo: "(tests API REST & automatisation via scripts)", level: "Intermédiaire" }
      ],
    },
    {
      category: "Outils ALM et gestion de tests",
      skills: [
        { name: "Redmine", hiddenInfo: "(gestion de projets et suivi des anomalies)", level: "Confirmé" },
        { name: "Jira Software", hiddenInfo: "(gestion Agile et suivi de tickets)", level: "Intermédiaire" },
        { name: "TestRail", hiddenInfo: "(gestion et planification de campagnes de tests)", level: "Intermédiaire" },
        { name: "Squash TM", hiddenInfo: "(gestion des cas de tests et automatisation)", level: "Intermédiaire" },
        { name: "XRay pour Jira", hiddenInfo: "(gestion avancée des tests automatisés)", level: "Confirmé" },
        { name: "Gherkin / Cucumber", hiddenInfo: "(rédaction de scénarios BDD)", level: "Confirmé" }
      ],
    },
    {
      category: "Développement Frontend",
      skills: [
        { name: "HTML, CSS, JavaScript", hiddenInfo: "(intégration et développement web)", level: "Confirmé" },
        { name: "Frameworks CSS", hiddenInfo: "(Bootstrap, Tailwind CSS)", level: "Intermédiaire" },
        { name: "React.js", hiddenInfo: "(développement d’interfaces dynamiques)", level: "Intermédiaire" },
        { name: "TypeScript", hiddenInfo: "(JavaScript typé pour projets structurés)", level: "Intermédiaire" },
        { name: "Hugo / Markdown", hiddenInfo: "(générateurs de sites statiques)", level: "Confirmé" },
        { name: "Vite / Gulp", hiddenInfo: "(build tools et optimisation de performances)", level: "Confirmé" }
      ],
    },
    {
      category: "Développement Backend",
      skills: [
        { name: "Node.js", hiddenInfo: "(API REST, applications backend JavaScript)", level: "Intermédiaire" },
        { name: "PHP", hiddenInfo: "(développement web et scripts serveur)", level: "Confirmé" },
        { name: "Laravel", hiddenInfo: "(framework PHP pour applications robustes)", level: "Intermédiaire" },
        { name: "WordPress", hiddenInfo: "(développement de thèmes et plugins sur mesure)", level: "Confirmé" },
        { name: "Python", hiddenInfo: "(scripts, automatisation et backend)", level: "Intermédiaire" },
        { name: "C#", hiddenInfo: "(développement d’applications desktop et web)", level: "Intermédiaire" }
      ],
    },
  ];


  return (
    <section id="experiences">
      <h5>Compétences que je possède</h5>
      <h2>Mon expertise</h2>

      <div className="container experience__container">
        {experienceData.map(({ category, skills }) => (
          <div key={category} className={`experience__${category.toLowerCase().replace(/\s+/g, '')}`}>
            <h3>{category}</h3>
            <div className="experience__content">
              {skills.map(({ name, hiddenInfo, level }) => (
                <article key={name} className="experience__details">
                  <PiSealCheckFill className="experience__details-icon" />
                  <div>
                    <h4>
                      {name}
                      <span hidden>{hiddenInfo}</span>
                    </h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
