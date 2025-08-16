import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogo from '../assetsmovie/tvicon.png'

const Header = () => {
  return (
    <header>
        <div className="background__overlay">
        <div className="header__container">
            <nav className="header__nav">
                <img className="logo" src={NavLogo} alt="" />
                <div className="nav__btns">
                <button className="nav__btn click">REGISTER</button>
                <button className="nav__btn click">SIGN IN</button>
                </div>
            </nav>
            <div className="header-content">
                <h1>Browse Movies & Shows</h1>
                <div className="search-bar">
                <input type="text" placeholder="Search by Title" id="searchInput"/>
                <button onclick="searchMovies()" className="search__btn click">
                    <FontAwesomeIcon icon="fa-magnifying-glass" />
                </button>
                <div id="movieContainer"></div>
                </div>
            </div>
        </div>
        </div>
        <div class="header__stripe"></div>
    </header>
  );
};

export default Header;
