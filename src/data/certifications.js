import GitHubFoundations from '../assets/GitHub Foundations.png';
import ScrumFoundationProfessional from '../assets/Scrum Foundation Professional.png';
import PCEP from '../assets/PCEP.png';
import EnglishForIT2 from '../assets/English for IT 2.png';
import PythonEssentials2 from '../assets/Python Essentials 2.png';
import GoogleProjectManagement from '../assets/Google Project Management Certificate.png';
import AzureAIFundamentals from '../assets/azure-ai-fundamentals.png';
import AzureDataFundamentals from '../assets/azure-data-fundamentals.png';
import AzureFundamentals from '../assets/azure-fundamentals.png';
import ApacheKafka from '../assets/Simplifying-Data-Pipelines-with-Apache-Kafka.png';
import DataScienceProfessional from '../assets/Data-Science-Professional-Certificate.png';
import OpenSourceSoftwareDevelopment from '../assets/coursera-specialization-badge.png';
import DataAnalystProfessional from '../assets/Professional_Certificate_-_Data_Analyst.png';

/** @typedef {{ image: string, title: string, issuer: string, link: string }} Certification */

/** @type {Certification[]} */
export const certifications = [
  {
    image: GitHubFoundations,
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    link: 'https://www.credly.com/badges/fbe6c277-ebff-48d8-b973-a0cf1405e49e',
  },
  {
    image: AzureFundamentals,
    title: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    link: 'https://www.credly.com/badges/585443cf-cf82-4d5a-b748-4e8aa94a4a7e',
  },
  {
    image: AzureAIFundamentals,
    title: 'Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    link: 'https://www.credly.com/badges/1f26fa9f-28f7-458d-932c-94944e2f64ea',
  },
  {
    image: AzureDataFundamentals,
    title: 'Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    link: 'https://www.credly.com/badges/f49ba79d-7fbe-4c90-8679-9bff138582da',
  },
  {
    image: PCEP,
    title: 'Certified Entry-Level Python Programmer',
    issuer: 'Python Institute',
    link: 'https://www.credly.com/badges/9dbf28e2-5c40-478e-a717-6433c59e6270',
  },
  {
    image: ScrumFoundationProfessional,
    title: 'Scrum Foundation Professional',
    issuer: 'CertiProf',
    link: 'https://www.credly.com/badges/c620e3d1-b06f-4dd6-9895-2c9d27abb7569e',
  },
  {
    image: GoogleProjectManagement,
    title: 'Google Project Management',
    issuer: 'Google',
    link: 'https://www.credly.com/badges/bf4ea50d-7341-4bec-b449-29ba2a5d5cc5',
  },
  {
    image: DataScienceProfessional,
    title: 'Data Science Professional',
    issuer: 'IBM',
    link: 'https://www.credly.com/badges/49335393-f91e-4f9e-a39a-7d590cb403f6',
  },
  {
    image: DataAnalystProfessional,
    title: 'Data Analyst Professional',
    issuer: 'IBM',
    link: 'https://www.credly.com/badges/52985009-7e52-4c74-988f-3453f85a824d',
  },
  {
    image: ApacheKafka,
    title: 'Data Pipelines with Apache Kafka',
    issuer: 'IBM',
    link: 'https://www.credly.com/badges/4668f3e2-e739-41bf-a5d1-2b3bfd21e08f',
  },
  {
    image: PythonEssentials2,
    title: 'Python Essentials 2',
    issuer: 'Cisco',
    link: 'https://www.credly.com/badges/a98bf90e-37b0-451d-98ca-690d70331a98',
  },
  {
    image: EnglishForIT2,
    title: 'English for IT 2',
    issuer: 'Cisco',
    link: 'https://www.credly.com/badges/61a34cdd-67fd-4235-aca9-4348fd3cc746',
  },
  {
    image: OpenSourceSoftwareDevelopment,
    title: 'Open Source Software Development',
    issuer: 'Linux Foundation',
    link: 'https://www.credly.com/badges/f1cda8e1-b8e9-4f3c-80f8-6840db45a9bb',
  },
];
