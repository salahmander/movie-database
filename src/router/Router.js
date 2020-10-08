import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../containers/home/Home";
import MovieViewDisplay from "../containers/movies/MovieViewDisplay";
import MovieDetailDisplay from "../containers/movies/MovieDetailDisplay";
import Login from "../containers/account/login/Login";
import Register from "../containers/account/register/Register";
import pageNotFound from "../components/UI/404page/404page";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:name" component={MovieViewDisplay} />
        <Route exact path="/movie/:media/:id" component={MovieDetailDisplay} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route component={pageNotFound} />
      </Switch>
    </>
  );
};

export default Router;
