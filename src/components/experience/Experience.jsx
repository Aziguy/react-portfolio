import React from 'react'
import { PiSealCheckFill } from "react-icons/pi";

import './experience.css'

export const Experience = () => {
  return (
    <section id="experiences">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__testing">
          <h3>Software Testing</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Pytest</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Selenium</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Appium</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Cypress</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>PlayWright</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Postman</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__alm">
          <h3>ALM Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>RedMine</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Jira</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>TestRail</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Squash</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>XRay</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Gherkin  | Cucumber</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML CSS JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS Framework</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Hugo | Markdown</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Vite | Gulp</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>WordPress</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <PiSealCheckFill className='experience__details-icon'/>
              <div>
                <h4>Csharp</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
