import React, { Component } from "react";

import { connect } from "react-redux";

import MovieView from "../../components/movie/movieView/MovieView";
import Spinner from "../../components/UI/spinner/Spinner";

import * as movieActions from "../../store/actions/movieAction/movieAction";

class MovieDisplay extends Component {
  componentDidMount() {
    this.props.onFetchMovies(this.props.match.params.name);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.props.onFetchMovies(this.props.match.params.name);
    }
  }

  render() {
    const { loading, movies } = this.props;

    return (
      <>{loading ? <Spinner /> : <MovieView movies={movies}> </MovieView>}</>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.movieLoading,
  movies: state.movies.movies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: (name) => dispatch(movieActions.fetchMovies(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDisplay);
