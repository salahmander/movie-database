import React from "react";
import {Helmet} from 'react-helmet';

const Background = () => {
  return (
    <div className="background-container">
      <Helmet>
        <style>{"body { background-color: #353b48; }"}</style>
      </Helmet>
    </div>
  );
};

export default Background;
