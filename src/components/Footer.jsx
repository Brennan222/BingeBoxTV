import React from 'react'
import FooterLogo from '../assetsmovie/BBicon.png'

const Footer = () => {
  return (
  <footer>
    <div className="footer__container">
      <div className="footer__links">
        <a className="footer__link no-cursor" href="">Terms of Service</a>
        <a className="footer__link no-cursor" href="">Privacy Policy</a>
        <a className="footer__link no-cursor" href="">Contact Us</a>
        <a className="footer__link no-cursor" href="">Manage Cookies</a>
        <a className="footer__link no-cursor" href="">FAQ</a>
        <a className="footer__link no-cursor" href="">About BingeBoxTV</a>
      </div>
      <div>
        <img className="footer__logo" src={FooterLogo} alt="" />
      </div>
    </div>
  </footer>
  )
}

export default Footer
