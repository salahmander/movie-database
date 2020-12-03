import React, { Component } from "react";

import { connect } from "react-redux";

import MovieDetail from "../../components//movie/movieDetail/MovieDetail";
import Spinner from "../../components/UI/spinner/Spinner";
import { timeConverter } from "../../utility/utility";

import * as movieDetailAction from "../../store/actions/movieAction/movieDetailAction/movieDetailAction";
import * as recommendationActions from "../../store/actions/recommendationAction/recommendationAction";
import * as tvDetailAction from "../../store/actions/movieAction/tvDetailAction/tvDetailAction";
import MovieRecommendaiton from "../../components/movie/movieRecommendation/MovieRecommendation";

class MovieDetailDisplay extends Component {
  componentDidMount() {
    if (this.props.match.params.media === "movie") {
      this.props.onFetchMovieDetail(this.props.match.params.id);
      this.props.onFetchMovieRecommendation(this.props.match.params.id);
    } else if (this.props.match.params.media === "tv") {
      this.props.onFetchTvDetail(this.props.match.params.id);
      this.props.onFetchTVRecommendation(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      if (this.props.match.params.media === "movie") {
        this.props.onFetchMovieDetail(this.props.match.params.id);
        this.props.onFetchMovieRecommendation(this.props.match.params.id);
      } else if (this.props.match.params.media === "tv") {
        this.props.onFetchTvDetail(this.props.match.params.id);
        this.props.onFetchTVRecommendation(this.props.match.params.id);
      }
    }
  }

  render() {
    const {
      recommendationLoading,
      movieRecommendation,
      TVRecommendation,
      loading,
      movie,
      tv,
    } = this.props;

    let show = this.props.match.params.media === "movie" ? movie : tv;

    let recommendation =
      this.props.match.params.media === "movie"
        ? movieRecommendation
        : TVRecommendation;

    //Loader for movie content
    let movieContent = loading ? (
      <Spinner />
    ) : (
      <MovieDetail movie={show} runtime={timeConverter(movie.runtime)} />
    );

    //Loader for recommendation content
    let recommendationContent = recommendationLoading ? (
      <Spinner />
    ) : (
      <MovieRecommendaiton
        recommendation={recommendation}
        media={this.props.match.params.media}
      />
    );

    return (
      <>
        {movieContent}
        {recommendationContent}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movieDetail.loading,
  movie: state.movieDetail.movie,
  tv: state.tvDetail.tv,
  recommendationLoading: state.recommendation.recommendationLoading,
  movieRecommendation: state.recommendation.movieRecommendation,
  TVRecommendation: state.recommendation.TVRecommendation,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovieDetail: (movieID) =>
      dispatch(movieDetailAction.fetchMovieDetail(movieID)),
    onFetchTvDetail: (tvID) => dispatch(tvDetailAction.fetchTvDetail(tvID)),
    onFetchMovieRecommendation: (movieID) =>
      dispatch(recommendationActions.fetchMovieRecommendation(movieID)),
    onFetchTVRecommendation: (TVID) =>
      dispatch(recommendationActions.fetchTVRecommendation(TVID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailDisplay);
