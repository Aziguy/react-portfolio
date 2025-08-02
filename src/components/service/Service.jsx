import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import './service.css';

const serviceData = [
  {
    title: "Software Testing",
    items: [
      "Design and automate end-to-end test cases for web apps.",
      "Write BDD scenarios using Gherkin syntax for QA teams.",
      "Use Cypress and Playwright for UI regression tests.",
      "Manage test suites with TestRail and XRay integration.",
      "Perform API testing with Postman and automated scripts.",
      "Document and maintain reusable test frameworks.",
    ],
  },
    {
    title: "DevOps",
    items: [
      "Set up CI/CD pipelines using GitHub Actions or GitLab.",
      "Write Dockerfiles and manage containerized stacks.",
      "Automate deployments using shell scripts and Ansible.",
      "Monitor logs and metrics using Prometheus & Grafana.",
      "Deploy cloud infrastructure using Terraform or Pulumi.",
      "Handle versioning and rollback strategies via Git tags.",
    ],
  },
  {
    title: "Web Development",
    items: [
      "WordPress theme development using Timber & Twig.",
      "Plugin development in PHP with React integrations.",
      "Build frontend apps using React, Vite and Tailwind.",
      "Write documentation using Hugo and Markdown.",
      "Optimize websites with lazy-loading and asset bundling.",
      "Manage multilingual websites with i18n best practices.",
    ],
  }
];

export const Service = () => {
  return (
    <section id="services">
      <h5>What I Can Do</h5>
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
