import React from "react";
import BingeIcon from "../assetsmovie/BBicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movies = () => {
  return (
    <div className="movies__background">
      <div className="movies__container">
        <div className="row">
          <div id="searchLabel"></div>
          <div id="loadingSpinner">
            <FontAwesomeIcon icon="fa-spinner" className="movie__loading--spinner"/>
          </div>
        </div>
      </div>
      <a href="#">
        <button className="movie__btn">
          <img className="movie__logo" src={BingeIcon} alt="" />
        </button>
      </a>
    </div>
  );
};

export default Movies;
