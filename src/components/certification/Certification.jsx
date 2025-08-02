import React, { useState } from 'react';
import './certification.css';

import GitHubFoundations from '../../assets/GitHub Foundations.png';
import ScrumFoundationProfessional from '../../assets/Scrum Foundation Professional.png';
import PCEP from '../../assets/PCEP.png';
import EnglishForIT2 from '../../assets/English for IT 2.png';
import PythonEssentials2 from '../../assets/Python Essentials 2.png'
import GoogleProjectManagement from '../../assets/Google Project Management Certificate.png'
import AzureAIFundamentals from '../../assets/azure-ai-fundamentals.png'
import AzureDataFundamentals from '../../assets/azure-data-fundamentals.png'
import AzureFundamentals from '../../assets/azure-fundamentals.png'
import ApacheKafka from '../../assets/Simplifying-Data-Pipelines-with-Apache-Kafka.png'
import DataScienceProfessional from '../../assets/Data-Science-Professional-Certificate.png'
import OpenSourceSoftwareDevelopment from '../../assets/coursera-specialization-badge.png'
import DataAnalystProfessional from '../../assets/Professional_Certificate_-_Data_Analyst.png'

const certifications = [
  {
    image: GitHubFoundations,
    title: 'GitHub Foundations',
    link: 'https://www.credly.com/badges/fbe6c277-ebff-48d8-b973-a0cf1405e49e'
  },
  {
    image: ScrumFoundationProfessional,
    title: 'Scrum Foundation Professional',
    link: 'https://www.credly.com/badges/c620e3d1-b06f-4dd6-9895-2c9d27abb7569e'
  },
  {
    image: PCEP,
    title: 'Certified Entry-Level Python Programmer',
    link: 'https://www.credly.com/badges/9dbf28e2-5c40-478e-a717-6433c59e6270'
  },
  {
    image: EnglishForIT2,
    title: 'English for IT 2',
    link: 'https://www.credly.com/badges/61a34cdd-67fd-4235-aca9-4348fd3cc746'
  },
  {
    image: PythonEssentials2,
    title: 'Python Essentials 2',
    link: 'https://www.credly.com/badges/a98bf90e-37b0-451d-98ca-690d70331a98'
  },
  {
    image: GoogleProjectManagement,
    title: 'Google Project Management Certificat',
    link: 'https://www.credly.com/badges/bf4ea50d-7341-4bec-b449-29ba2a5d5cc5'
  },
  {
    image: AzureAIFundamentals,
    title: 'Ms Certified: Azure AI Fundamentals',
    link: 'https://www.credly.com/badges/1f26fa9f-28f7-458d-932c-94944e2f64ea'
  },
  {
    image: AzureDataFundamentals,
    title: 'Ms Certified: Azure Data Fundamentals',
    link: 'https://www.credly.com/badges/f49ba79d-7fbe-4c90-8679-9bff138582da'
  },
  {
    image: AzureFundamentals,
    title: 'Ms Certified: Azure Fundamentals',
    link: 'https://www.credly.com/badges/585443cf-cf82-4d5a-b748-4e8aa94a4a7e'
  },
  {
    image: ApacheKafka,
    title: 'Data Pipelines with Apache Kafka',
    link: 'https://www.credly.com/badges/4668f3e2-e739-41bf-a5d1-2b3bfd21e08f'
  },
  {
    image: DataScienceProfessional,
    title: 'Data Science Professional Certificate',
    link: 'https://www.credly.com/badges/49335393-f91e-4f9e-a39a-7d590cb403f6'
  },
  {
    image: OpenSourceSoftwareDevelopment,
    title: 'Open Source Software Development',
    link: 'https://www.credly.com/badges/f1cda8e1-b8e9-4f3c-80f8-6840db45a9bb'
  },
  {
    image: DataAnalystProfessional,
    title: 'Data Analyst Professional',
    link: 'https://www.credly.com/badges/52985009-7e52-4c74-988f-3453f85a824d'
  },
];

const ITEMS_PER_PAGE = 6;

export const Certification = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(certifications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCertifications = certifications.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section id="certifications">
      <h5>My Recent Official Recognitions</h5>
      <h2>Certifications</h2>

      <div className="container certification__container">
        {currentCertifications.map((cert, index) => (
          <article className="certification__item" key={index}>
            <div className="certification__item-image">
              <img src={cert.image} alt={cert.title} />
            </div>
            <h3>{cert.title}</h3>
            <div className="certification__item-cta">
              <a href={cert.link} className="btn" target="_blank" rel="noopener noreferrer">
                See the badge
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="certification__pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
