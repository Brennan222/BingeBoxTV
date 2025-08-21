import React, { useEffect, useState } from "react";
import BingeIcon from "../assetsmovie/BBicon.png";
import NotFoundIcon from "../assetsmovie/notfound.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Movies = ({ searchResults, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const apiKey = "1c0494b9bef621cceccb00d69291f242";

    const fetchData = async () => {
      try {
        const movieRes = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setMovies(movieRes.data.results.slice(0, 12));

        const showRes = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        setShows(showRes.data.results.slice(0, 12));
      } catch (err) {
        console.error("Error fetching data from TMDb", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movies__background">
      <div className="movies__container">
        <div className="row">
          <div id="searchLabel"></div>
          <div id="loadingSpinner">
            <FontAwesomeIcon
              icon="fa-spinner"
              className="movie__loading--spinner"
            />
          </div>
        </div>

        <h2 className="section__title--movies">Popular Movies</h2>
        <div className="movie__grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie__card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>

        {searchQuery && searchResults.length > 0 && (
          <>
            <h2 className="section__title">
              Search Results for “{searchQuery}”
            </h2>
            <div className="movie__grid">
              {searchResults.map((item) => (
                <div key={item.id} className="movie__card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title || item.name}
                  />
                  <p>{item.title || item.name}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {searchQuery && searchResults.length === 0 && (
          <div className="notfound__wrapper">
            <img src={NotFoundIcon} alt="Not Found" className="notfound__img" />
          </div>
        )}

        {!searchQuery && (
          <>
            <h2 className="section__title--shows">Popular Shows</h2>
            <div className="movie__grid">
              {shows.map((show) => (
                <div key={show.id} className="movie__card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <a href="#">
          <button className="movie__btn">
            <img className="movie__logo" src={BingeIcon} alt="Binge Icon" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Movies;
