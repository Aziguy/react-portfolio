import React from 'react'
import CV from '../../assets/KENGNI_Hippolyte_CV_FR_082025_dev.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
