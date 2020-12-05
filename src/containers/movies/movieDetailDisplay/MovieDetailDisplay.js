import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMovieDetail } from "../../../store/actions/movieAction/movieDetailAction/movieDetailAction";
import { fetchMovieRecommendation } from "../../../store/actions/movieRecommendationAction/movieRecommendationAction";
import { MOVIE_DETAIL_RESET } from "../../../store/actions/actionTypes";

import { timeConverter } from "../../../utility/utility";

import MovieDetail from "../../../components//movie/movieDetail/MovieDetail";
import MovieRecommendaiton from "../../../components/movie/movieRecommendation/MovieRecommendation";
import Spinner from "../../../components/UI/spinner/Spinner";


class MovieDetailDisplay extends Component {
  componentDidMount() {
    this.props.onFetchMovieDetail(this.props.match.params.id);
    this.props.onFetchMovieRecommendation(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.onResetMovieDetail();
      this.props.onFetchMovieDetail(this.props.match.params.id);
      this.props.onFetchMovieRecommendation(this.props.match.params.id);
    }
  }

  render() {
    const {
      loadingMovie,
      loadingRecommednation,
      movieRecommendation,
      movie,
    } = this.props;

    return (
      <>
        {loadingMovie ? (
          <Spinner />
        ) : (
          <MovieDetail movie={movie} runtime={timeConverter(movie.runtime)} />
        )}

        {loadingRecommednation ? (
          <Spinner />
        ) : (
          <MovieRecommendaiton
            recommendation={movieRecommendation}
            media={"movie"}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingMovie: state.movieDetail.loading,
  movie: state.movieDetail.movie,

  loadingRecommednation: state.movieRecommendation.loading,
  movieRecommendation: state.movieRecommendation.movieRecommendation,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovieDetail: (movieID) => dispatch(fetchMovieDetail(movieID)),
    onFetchMovieRecommendation: (movieID) =>
      dispatch(fetchMovieRecommendation(movieID)),
    onResetMovieDetail: () => dispatch({ type: MOVIE_DETAIL_RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailDisplay);
