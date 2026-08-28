import kouamvi from '../assets/kouamvi.jpeg';
import Hung from '../assets/Hung.jpeg';
import Lillian from '../assets/Lillian.jpeg';
import Tien from '../assets/Tien.jpeg';
import Yves from '../assets/Yves.jpeg';
import Anh from '../assets/Anh.gif';
import Sorex from '../assets/Sorex.jpeg';
import Mamadou from '../assets/Mamadou.jpeg';

/** @typedef {{ avatar: string, name: string, role: string, lang: 'fr' | 'en', review: string }} Testimonial */

/** @type {Testimonial[]} */
export const testimonials = [
  {
    avatar: Hung,
    name: 'Hoang Hung Ngovandan',
    role: 'Technical Assistance Consultant, World Bank Group',
    lang: 'en',
    review:
      'I have known Mr. Hippolyte KENGNI for over 4 years when working together on a software development project in the Caribbean. Hippolyte represented the software vendor side and I was the Technical Assistance Consultant from the World Bank group. Throughout the 4 years working together, Mr Kengni has shown excellent communication skills in interfacing with myself and our client; all his work demonstrated his professionalism and technical knowledge, and he delivers according to the agreed deadline. Hippolyte is a reliable resource and can work independently without any supervision. I highly recommend him and he would be a tremendous asset for your company.',
  },
  {
    avatar: Tien,
    name: 'Tien Nguyen',
    role: 'Project Manager',
    lang: 'en',
    review:
      'Mr Hippolyte Kengni was my colleague for a couple of years and I strongly recommend him for his professionalism, proactiveness and attention to detail. We worked on several projects together and he consistently delivered high quality. He is well organised and always punctual, meeting the deadlines. I was very happy with his output and my clients shared the same feedback.',
  },
  {
    avatar: Yves,
    name: 'Yves BAH',
    role: 'Chef de projet',
    lang: 'fr',
    review:
      "J'ai travaillé avec Hippolyte et cela a été un vrai plaisir de rencontrer quelqu'un de très impliqué dans son travail et qui apprend vite. Il a développé au fil du temps une forte capacité d'adaptation, au point de devenir l'une des ressources clés du projet. Ce sera toujours avec un plaisir renouvelé de travailler à nouveau avec lui. C'est un vrai professionnel avec le sens du travail bien fait.",
  },
  {
    avatar: kouamvi,
    name: 'Kouamvi CZ, PhD',
    role: 'Data Scientist',
    lang: 'fr',
    review:
      "J'ai eu la chance de travailler avec Hippolyte sur un projet de géoréférencement des acteurs Web en Python. Hippolyte est très méthodique et très autodidacte. Il n'hésite pas à faire des recherches pour proposer une bonne manière de conduire le projet et d'obtenir de bons résultats. Je recommande fortement Hippolyte sur vos projets d'analyse de données.",
  },
  {
    avatar: Anh,
    name: 'Anh Nguyen',
    role: 'Data Analyst',
    lang: 'en',
    review:
      'Throughout my journey I have worked with many professionals, but Hippolyte was one of the best partners I have had. His exceptional set of skills, his ability to tackle any problem and his willingness to go out of his way to help others made working with him a delightful experience. I would recommend his expertise to anyone looking for a data analyst, and I can assure you he would become an appreciated member of any team.',
  },
  {
    avatar: Mamadou,
    name: 'Mamadou Gueye',
    role: 'Data Scientist',
    lang: 'fr',
    review:
      "Hippolyte est une personne proactive, toujours à la recherche du savoir. Il a un talent avéré en développement. Un data scientist qui, de par sa capacité d'analyse, est apprécié par tous ses collaborateurs. Il a été un élément clé dans notre projet.",
  },
  {
    avatar: Lillian,
    name: 'Lillian Thyssen',
    role: 'Product Owner',
    lang: 'en',
    review: 'It was great working with Hippolyte on software development and user training.',
  },
  {
    avatar: Sorex,
    name: 'Sorex HEMADAK',
    role: 'Designer UI/UX',
    lang: 'fr',
    review: "Hippolyte est très créatif et maîtrise bien l'UI et l'UX.",
  },
];
