import React from 'react'
import { createPortal } from 'react-dom';

export const JsonLd = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hippolyte Kengni',
    url: 'https://www.hippo-ken.fr/',
    image: 'https://www.hippo-ken.fr/preview.jpg',
    jobTitle: 'Ingénieur QA Automation & Développeur Web Full Stack',
    description:
      'Expert en automatisation de tests, développement Python, django, django Rest Famework, React, WordPress, Laravel. Services en CI/CD, Docker, Cypress, TypeScript, Gherkin, Jenkins, Jira. Disponible dans toute la France : Montpellier, Paris, Lyon, Marseille, Bordeaux, Toulouse...',
    worksFor: {
      '@type': 'Organization',
      name: 'Hippolyte Kengni (CDI, CDD, Freelance)',
    },
    nationality: {
      '@type': 'Country',
      name: 'France',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    knowsAbout: [
      'QA Automation',
      'Développement Python',
      'Développement web',
      'django',
      'Django Rest Framework',
      'ReactJS',
      'TypeScript',
      'WordPress',
      'Laravel',
      'Docker',
      'Java',
      'CI/CD',
      'Cypress',
      'Selenium',
      'Appium',
      'Gherkin',
      'Reqnroll',
      'SpecFlow',
      'Cucumber',
      'Jenkins',
      'Jira',
      'Redmine',
      'API REST',
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Montpellier',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'City',
        name: 'Paris',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'City',
        name: 'Lyon',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'City',
        name: 'Marseille',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'City',
        name: 'Bordeaux',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'City',
        name: 'Toulouse',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'City',
        name: 'Lille',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'City',
        name: 'Nantes',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'City',
        name: 'Strasbourg',
        address: { '@type': 'PostalAddress', addressCountry: 'FR' },
      },
      {
        '@type': 'Country',
        name: 'France',
      },
    ],
    sameAs: [
      'https://github.com/Aziguy',
      'https://www.linkedin.com/in/hippolyte-kengni',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'kengnihippolyte@gmail.com',
      contactType: 'Personal Contact',
    },
  };

  // This check ensures the code doesn't break during server-side rendering
  if (typeof window === 'undefined') {
    return null;
  }

  return createPortal(
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />,
    document.head
  );
}

