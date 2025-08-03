import React from 'react'
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Hken.</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/hippolyte-kengni/" target="_blank" rel="noopener noreferrer">
          <RiLinkedinBoxLine />
        </a>
        <a href="https://github.com/Aziguy" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://api.whatsapp.com/send?phone=237686777838" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          <small>
            &copy; {new Date().getFullYear()} Hippolyte. All rights reserved.
          </small>
        </small>
      </div>
    </footer>
  )
}
