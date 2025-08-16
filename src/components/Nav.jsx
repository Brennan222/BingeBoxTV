import React from 'react'
import NavLogo from '../assetsmovie/tvicon.png'

const Nav = () => {
  return (
    <nav className="header__nav1">
        <div className="nav__container">
            <img className="logo" src={NavLogo} alt="" />
            <div className="nav__btns">
                <button className="nav__btn click no-cursor" >REGISTER</button>
                <button className="nav__btn click no-cursor">SIGN IN</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav

