import React from 'react'
import { CTA } from './CTA.jsx'
import { HeaderSocial } from './HeaderSocial.jsx'
import './header.css'
import me from '../../assets/me.png'

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Salut je suis</h5>
        <h1>Hippolyte K.</h1>
        <h5 className='text-light'>Développeur de logiciels spécialisé en assurance qualité logiciel et tests E2E automatisés</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={me} alt="Hippolyte K." />
        </div>

        <a href="#contact" className='scroll__down'>Vers le bas</a>
      </div>
    </header>
  )
}
