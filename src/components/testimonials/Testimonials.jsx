import React from 'react';
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import kouamvi from '../../assets/kouamvi.jpeg';
import Hung from '../../assets/Hung.jpeg';
import Lillian from '../../assets/Lillian.jpeg';
import Tien from '../../assets/Tien.jpeg';
import Yves from '../../assets/Yves.jpeg';
import Anh from '../../assets/Anh.gif';
import Sorex from '../../assets/Sorex.jpeg';
import Mamadou from '../../assets/Mamadou.jpeg';

const testimonialsData = [
  {
    avatar: kouamvi,
    name: 'Kouamvi CZ, PhD',
    review:
      `<< J'ai eu la chance de travailler avec Hippolyte sur un projet de géoréférencement des acteurs Web avec "Python" comme langage de programmation. Hippolyte est très méthodique et très autodidacte. Il n'hésite pas à faire des recherches pour nous proposer une bonne manière de conduire le projet et d'obtenir de bons résultats. Je recommande fortement Hippolyte sur vos projets d'analyse de données. >>`,
  },
  {
    avatar: Hung,
    name: 'Hoang Hung Ngovandan',
    review:
      `<< I have known Mr. Hippolyte KENGNI for over 4 years when working together on a software development project in the Caribbean's. Hippolyte represents the software's vendor side and I am the Technical Assistance Consultant from the World Bank group. Throughout the 4 years working together, Mr Kengni has shown excellent communication skills in interfacing with myself and our client, all his work demonstrated his professionalism and technical knowledge, he delivers according to the agreed deadline. Hippolyte is a reliable resource and can work independently without any supervision. I highly recommend as a candidate for employment, and he would be a tremendous asset for your company. I will be happy to work again with Mr. Hippolyte KENGNI for any other projects in the future. >>`,
  },
  {
    avatar: Lillian,
    name: 'Lillian Thyssen',
    review:
      `<< It was great working with Hippolyte on software development and user training. >>`,
  },
  {
    avatar: Tien,
    name: 'Tien/Tony Nguyen',
    review:
      `<< Mr Hippolyte Kengni was my colleague for couple of years and I strongly recommend him for his professionalism, proactiveness and attention to the details. We have worked in several projects and he has delivered high quality. He is well organized and always punctual, meeting the deadlines, that's what I like. I was very happy with his outputs and my clients also shared the same feedbacks. Mr Hippolyte Kengni was my colleague for couple of years and I strongly recommend him for his professionalism, proactiveness and attention to the details. We have worked in several projects and he has delivered high quality. He is well organized and always punctual, meeting the deadlines, that's what I like. I was very happy with his outputs and my clients also shared the same feedbacks. >>`,
  },
  {
    avatar: Yves,
    name: 'Yves BAH',
    review:
      `<< J'ai travaillé avec Hippolyte, cela a été un vrai plaisir de rencontrer quelqu'un très impliqué dans son travail et qui apprend vite. Il a développé au fil du temps une forte capacité d'adaptation au point de devenir une des ressources clé du projet. Ce sera toujours avec un plaisir renouvelé de travailler à nouveau avec lui. C’est un vrai professionnel avec le sens de travail bien fait. >>`,
  },
  {
    avatar: Anh,
    name: 'Anh Nguyen',
    review:
      `<< Throughout my journey, I have worked with many professionals, but Hippolyte was one of the best person I had as a partner. His exceptional set of skills, along with his ability to tackle any problem and his ability to go out of his way to help other made working with him such a delightful experience. I would always recommend his expertise to any person looking for a data analyst, and I can assure you that he would become an appreciated member of any team. >>`,
  },
  {
    avatar: Sorex,
    name: 'Sorex HEMADAK',
    review:
      `<< Hippolyte est très créatif et maîtrise bien l'UI/l'UX. >>`,
  },
  {
    avatar: Mamadou,
    name: 'Mamadou Gueye',
    review:
      `<< Hippolyte est une personne proactive toujours a la recherche du savoir. Il a un talent avéré en développement. Un data scientist qui de par sa capacité d’analyse est apprécié par tous ses collaborateurs. Il a été un élément clé dans notre projet. >>`,
  },
];

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Colleagues & Managers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialsData.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="user__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="user__name">{name}</h5>
            <small className="user__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
