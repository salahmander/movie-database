import React from "react";

import "./NoResults.css";

import noResultImage from "../../../assets/images/noResults.png";

const NoResults = () => {
  return (
    <div className="no-results-container">
      <div className="no-results-box">
        <div className="no-results-image">
          <img src={noResultImage} alt="No results" />
        </div>
        <div className="no-results-heading">
          <h1>Sorry couldn't find what you were looking for.</h1>
        </div>
      </div>
    </div>
  );
};

export default NoResults;
