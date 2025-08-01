import React from 'react'
import { CTA } from './CTA.jsx'
import { HeaderSocial } from './HeaderSocial.jsx'
import './header.css'
import me from '../../assets/me.png'

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Hippolyte K.</h1>
        <h5 className='text-light'>software developer with a specialization in automation software testing</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={me} alt="Hippolyte" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
