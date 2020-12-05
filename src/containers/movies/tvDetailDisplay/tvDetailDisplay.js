import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTvDetail } from "../../../store/actions/movieAction/tvDetailAction/tvDetailAction";
import { fetchTvRecommendation } from "../../../store/actions/tvRecommendationAction/tvRecommendationAction";

import MovieDetail from "../../../components//movie/movieDetail/MovieDetail";
import MovieRecommendaiton from "../../../components/movie/movieRecommendation/MovieRecommendation";
import Spinner from "../../../components/UI/spinner/Spinner";

class TvDetailDisplay extends Component {
  componentDidMount() {
    this.props.onFetchTvDetail(this.props.match.params.id);
    this.props.onFetchTvRecommendation(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.onFetchTvDetail(this.props.match.params.id);
      this.props.onFetchTvRecommendation(this.props.match.params.id);
    }
  }

  render() {
    const {
      loadingTv,
      loadingRecommednation,
      tvRecommendation,
      tv,
    } = this.props;

    return (
      <>
        {loadingTv ? (
          <Spinner />
        ) : (
          <MovieDetail tv={tv} />
        )}

        {loadingRecommednation ? (
          <Spinner />
        ) : (
          <MovieRecommendaiton
            recommendation={tvRecommendation}
            media={this.props.match.params.media}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingTv: state.tvDetail.loading,
  tv: state.tvDetail.tv,

  loadingRecommednation: state.tvRecommendation.recommendationLoading,
  tvRecommendation: state.tvRecommendation.tvRecommendation,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTvDetail: (tvID) => dispatch(fetchTvDetail(tvID)),
    onFetchTvRecommendation: (tvID) =>
      dispatch(fetchTvRecommendation(tvID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvDetailDisplay);
