import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogo from "../assetsmovie/tvicon.png";
import axios from "axios";

const Header = ({ setSearchResults, setSearchQuery }) => {
  const searchMovies = async () => {
    const query = document.getElementById("searchInput").value.trim();
    setSearchQuery(query);

    if (!query) return;

    const apiKey = "1c0494b9bef621cceccb00d69291f242";
    try {
      const [movieRes, showRes] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
        ),
      ]);

      const combined = [
        ...movieRes.data.results.map((item) => ({ ...item, type: "movie" })),
        ...showRes.data.results.map((item) => ({ ...item, type: "tv" })),
      ];

      setSearchResults(combined);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

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
              <input
                type="text"
                placeholder="Search by Title"
                id="searchInput"
              />
              <button onclick={searchMovies} className="search__btn click">
                <FontAwesomeIcon icon="fa-magnifying-glass" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="header__stripe"></div>
    </header>
  );
};

export default Header;
