import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mustafa Master</h1>
        <h5 className="text-light">Full Stack Web Developer || Full Stack Software Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="image" />
        </div>

        <a href="#contact" className='scroll__down'>Reach out to Us</a>
      </div>
    </header>
  )
}

export default Header