import { useState } from 'react'
import {Header} from './components/header/Header'
import {Nav} from './components/nav/Nav'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Service} from './components/service/Service'
import {Certification} from './components/certification/Certification'
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Certification />
      <Contact />
      <Footer />
    </>
  )
}

export default App
