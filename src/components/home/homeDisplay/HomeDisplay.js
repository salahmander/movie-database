import React from "react";

import "./HomeDisplay.css";
import SideScrollView from "../../sideScroll/sideScrollView/SideScrollView";

const HomeDisplay = (props) => {
  const { trending, nowTV, nowMovie } = props;
  return (
    <div className="home-display-container">
      <div className="home-display-trending">
        <h2 className="home-display-trending-header">Trending</h2>
        <SideScrollView movies={trending} />
      </div>
      <div className="home-display-movie">
        <h2 className="home-display-movie-header">Now Playing (Movies)</h2>
        <SideScrollView movies={nowMovie} media="movie" />
      </div>
      <div className="home-display-TV">
        <h2 className="home-display-movie-TV">On The Air (TV)</h2>
        <SideScrollView movies={nowTV} media="tv" />
      </div>
    </div>
  );
};

export default HomeDisplay;
