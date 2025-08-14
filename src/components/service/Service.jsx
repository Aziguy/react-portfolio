import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import './service.css';

const serviceData = [
  {
    title: "Tests logiciels et automatisation QA",
    items: [
      "Conception et automatisation de scénarios de tests complets pour applications web et mobile.",
      "Rédaction de tests BDD en langage Gherkin pour équipes QA, PO et développement.",
      "Automatisation des tests UI avec Cypress, Selenium et Playwright (tests de régression, E2E et fonctionnelle).",
      "Gestion et suivi des campagnes de tests avec TestRail et XRay sous Jira.",
      "Tests d’API REST et SOAP avec Postman et scripts automatisés (JavaScript/Python).",
      "Mise en place et maintenance de frameworks de tests réutilisables pour garantir la qualité logicielle."
    ],
  },
  {
    title: "DevOps, CI/CD et Cloud",
    items: [
      "Mise en place et optimisation de pipelines CI/CD avec GitHub Actions et GitLab CI.",
      "Création de Dockerfiles et gestion d’environnements conteneurisés avec Docker et Docker Compose.",
      "Automatisation des déploiements avec scripts Shell, Ansible ou pipelines intégrés.",
      "Supervision et analyse des performances via Prometheus, Grafana et outils de monitoring avancés.",
      "Déploiement et gestion d’infrastructure cloud avec Terraform ou Pulumi (AWS, Azure, GCP).",
      "Gestion des versions, releases et stratégies de rollback via Git et tags."
    ],
  },
  {
    title: "Développement web et optimisation",
    items: [
      "Développement de thèmes WordPress personnalisés avec Timber et Twig.",
      "Création de plugins WordPress sur mesure avec intégration React et PHP.",
      "Développement d’applications web modernes avec django, Laravel, React, Vite et Tailwind CSS.",
      "Rédaction de documentation technique et guides utilisateurs avec Hugo et Markdown.",
      "Optimisation des performances web : lazy-loading, minification et bundling des ressources.",
      "Gestion et optimisation de sites multilingues selon les bonnes pratiques i18n et SEO."
    ],
  }
];

export const Service = () => {
  return (
    <section id="services">
      <h5>Ce que je peux faire</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {serviceData.map((service, index) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service__lists">
              {service.items.map((item, idx) => (
                <li key={idx}>
                  <FiCheckSquare className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
