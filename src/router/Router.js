import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../containers/home/Home";

import MovieDetailDisplay from "../containers/movies/movieDetailDisplay/MovieDetailDisplay";
import MoviesListDisplay from "../containers/movies/moviesListDisplay/MoviesListDisplay";
import pageNotFound from "../components/UI/404page/404page";
import TvDetailDisplay from "../containers/tv/tvDetailDisplay/TvDetailDisplay";

// import Login from "../containers/account/login/Login";
// import Register from "../containers/account/register/Register";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/movie-database/" component={Home} />
        <Route exact path="/movie/:id" component={MovieDetailDisplay} />
        <Route exact path="/tv/:id" component={TvDetailDisplay} />
        <Route exact path="/movies/:name" component={MoviesListDisplay} />
        {/*<Route exact path="/register" component={Register} /> */}{" "}
        {/* Enable once login as been sorted */}
        {/*<Route exact path="/login" component={Login} /> */}{" "}
        {/* Enable once login as been sorted */}
        <Route component={pageNotFound} />
      </Switch>
    </>
  );
};

export default Router;
