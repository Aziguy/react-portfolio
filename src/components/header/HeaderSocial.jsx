import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiCredly } from "react-icons/si";

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.credly.com/users/hippolyte-kengni/badges#credly" target="_blank" rel="noopener noreferrer">
            <SiCredly />
        </a>
        <a href="thub.com/Aziguy" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hippolyte-kengni/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
    </div>
  )
}
