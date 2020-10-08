import React from "react";

import NoResults from "../../UI/noResults/NoResults";

import { makeStyles } from "@material-ui/core/styles";

import MovieCard from "../movieCard/MovieCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  movieContainer: {
    padding: "15px",
  },
}));

const MovieView = (props) => {
  const classes = useStyles();
  const { movies } = props;

  let content =
    movies.total_results > 1
      ? movies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      : null;

  let showContent =
    content !== null ? (
      <Grid container spacing={2}>
        {content}
      </Grid>
    ) : (
      <NoResults />
    );

  return <div className={classes.movieContainer}>{showContent}</div>;
};

export default MovieView;
