import React from 'react'
import './Header.css'
import { assets } from '../../utils'

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>We're <span className='word-colour-1' > Serious </span> For <span className='word-colour-1' > Food </span>& <span className='word-colour-2'>Delivery</span>. </h1>
        <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
        <button>Menu</button>
      </div>
      <div className="hero-img">
        <img src={assets.HeroImg} alt="" />
      </div>
    </div>
  )
}

export default Header

