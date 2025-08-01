import React from 'react'
import { FaAward } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { VscFolderActive } from "react-icons/vsc";


import './about.css';
import me from '../../assets/me-about.jpg'

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

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
              <h5>Experiences</h5>
              <small>9+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderActive   className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ perso & companies</small>
            </article>
            <article className="about__card">
              <PiCertificateFill  className='about__icon'/>
              <h5>Certifications</h5>
              <small>25+ Certifications</small>
            </article>
          </div>
          <p>
              Seasoned software engineer with over 9 years of expertise in full-stack development and test automation, leveraging Selenium, Cypress to reduce testing time by 50%. Skilled in JavaScript, React, python, and Agile methodologies. Passionate about implementing CI/CD and DevOps to deliver robust, high-quality products. Continuously learning the latest technologies. Seeking an opportunity to utilize my experience across the entire software development lifecycle and QA automation to build innovative solutions and exceed customer expectations.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
