import React from "react";

import "./404page.css";

import noResultImage from "../../../assets/images/noResults.png";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="page-not-found-box">
        <div className="page-not-found-image">
          <img src={noResultImage} alt="No results" />
        </div>
        <div className="page-not-found-heading">
          <h1>Page Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
