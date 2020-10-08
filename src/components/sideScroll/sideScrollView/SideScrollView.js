import React from "react";

import "./SideScrollView.css";

import SideScrollCard from "../sideScrollCard/SideScrollCard";

const SideScrollView = (props) => {
  const { movies, media } = props;
  
  let content =
    movies.total_results > 1
      ? movies.results.map((movie) => (
          <SideScrollCard key={movie.id} movie={movie} media={media} />
        ))
      : null;

  return (
    <div className="side-scroll-view-container">
      <div className="side-scroll-view-cards">{content}</div>
    </div>
  );
};

export default SideScrollView;
