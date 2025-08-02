import React from 'react';
import { PiSealCheckFill } from "react-icons/pi";
import './experience.css';

export const Experience = () => {
  const experienceData = [
  {
    category: "Software Testing",
    skills: [
      { name: "Pytest", level: "Intermediate" },
      { name: "Selenium", level: "Experienced" },
      { name: "Appium", level: "Intermediate" },
      { name: "Cypress", level: "Experienced" },
      { name: "PlayWright", level: "Intermediate" },
      { name: "Postman", level: "Intermediate" },
    ],
  },
  {
    category: "ALM Tools",
    skills: [
      { name: "RedMine", level: "Experienced" },
      { name: "Jira", level: "Intermediate" },
      { name: "TestRail", level: "Intermediate" },
      { name: "Squash", level: "Intermediate" },
      { name: "XRay", level: "Experienced" },
      { name: "Gherkin | Cucumber", level: "Experienced" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML CSS JS", level: "Experienced" },
      { name: "CSS Framework", level: "Intermediate" },
      { name: "ReactJs", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Hugo | Markdown", level: "Experienced" },
      { name: "Vite | Gulp", level: "Experienced" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node JS", level: "Intermediate" },
      { name: "PHP", level: "Experienced" },
      { name: "Laravel", level: "Intermediate" },
      { name: "WordPress", level: "Experienced" },
      { name: "Python", level: "Intermediate" },
      { name: "Csharp", level: "Intermediate" },
    ],
  },
];


  return (
    <section id="experiences">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {experienceData.map(({ category, skills }) => (
          <div key={category} className={`experience__${category.toLowerCase().replace(/\s+/g, '')}`}>
            <h3>{category}</h3>
            <div className="experience__content">
              {skills.map(({ name, level }) => (
                <article key={name} className="experience__details">
                  <PiSealCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{name}</h4>
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
