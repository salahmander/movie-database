import React from "react";

import { imageURL, backdropURL } from "../../../constant";

import noImage from "../../../assets/images/noImage.jpg";

import "./MovieDetail.css";

const MovieDetial = ({ movie, runtime }) => {
  return (
    <div
      className="movie-detail-container"
      style={{
        backgroundImage: `url(${
          movie.backdrop_path ? `${backdropURL}${movie.backdrop_path}` : null
        })`,
      }}
    >
      <div className="hero-container">
        <div className="hero-box-main">
          <div className="hero-poster">
            <img
              className="movie-poster"
              src={
                movie.poster_path
                  ? `${imageURL}w342${movie.poster_path}`
                  : noImage
              }
              alt=""
            />
          </div>
          <div className="hero-content">
            <div className="hero-movie-heading">
              <h1 className="hero-movie-title">
                {movie.title} {movie.name}
              </h1>
              <h3 className="hero-movie-tagline">{movie.tagline}</h3>
              <div className="hero-movie-heading-info">
                <h4 className="hero-movie-date">
                  {movie.release_date} {movie.first_air_date}
                </h4>
                <h4 className="hero-movie-runtime">{runtime}</h4>
              </div>
            </div>
            <div className="hero-movie-description">
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
            <div className="hero-movie-information">
              <div className="hero-genres">
                <h2>Genres</h2>
                <ul>
                  {movie.genres &&
                    movie.genres.map((genre, index) => (
                      <li key={index}>{genre.name}</li>
                    ))}
                </ul>
              </div>
              <div className="hero-ratings">
                <h2>Ratings</h2>
                <ul>
                  <li>
                    <strong>Rotten Tomatoes</strong> 85%{" "}
                    {/*Need to get access to rotten Tomatoes API*/}
                  </li>
                  <li>
                    <strong>IMDB</strong> 85%{" "}
                    {/*Need to get access to IMDB API*/}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetial;
