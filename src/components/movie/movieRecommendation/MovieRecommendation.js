import React from "react";

import "./MovieRecommendaiton.css";
import SideScrollView from "../../sideScroll/sideScrollView/SideScrollView";

const MovieRecommendaiton = (props) => {
  const { recommendation, media } = props;

  let content = recommendation.total_results ? (
    <div className="movie-recommendation">
      <h2>Recommendation</h2>
      <SideScrollView movies={recommendation} media={media} />
    </div>
  ) : null;

  return (
    <div className="movie-recommendation-display-container">{content}</div>
  );
};

export default MovieRecommendaiton;
