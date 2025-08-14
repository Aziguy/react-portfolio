import React from 'react'
import { FaAward } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { VscFolderActive } from "react-icons/vsc";


import './about.css';
import me from '../../assets/me-about.jpg'

export const About = () => {
  return (
    <section id="about">
      <h5>En savoir plus</h5>
      <h2>A-Propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="Hippolyte" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Expériences</h5>
              <small>9+ ans d'XP</small>
            </article>
            <article className="about__card">
              <VscFolderActive   className='about__icon'/>
              <h5>Projets</h5>
              <small>50+ perso.</small>
            </article>
            <article className="about__card">
              <PiCertificateFill  className='about__icon'/>
              <h5>Certifications</h5>
              <small>43+ Certifications</small>
            </article>
          </div>
          <p style={{ textAlign: 'justify' }}>
            Ingénieur logiciel expérimenté avec plus de 9 ans d’expertise en développement Full Stack et en automatisation de tests. Spécialisé dans la réduction des temps de tests de plus de 50 % grâce à des outils tels que Selenium et Cypress. Maîtrise de JavaScript, React, Python et des méthodologies Agile (Scrum, Kanban). Passionné par la mise en place de pipelines CI/CD et de pratiques DevOps pour livrer des produits robustes, performants et de haute qualité. Toujours en veille technologique sur les dernières innovations en développement web, tests automatisés et cloud computing. Ouvert aux opportunités permettant de mettre à profit mon expérience sur l’ensemble du cycle de vie logiciel, du développement à la QA automation, afin de concevoir des solutions innovantes et dépasser les attentes des clients.
          </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
