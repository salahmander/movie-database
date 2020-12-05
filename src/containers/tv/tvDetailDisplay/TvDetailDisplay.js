import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTvDetail } from "../../../store/actions/movieAction/tvDetailAction/tvDetailAction";
import { fetchTvRecommendation } from "../../../store/actions/tvRecommendationAction/tvRecommendationAction";
import { TV_DETAIL_RESET } from "../../../store/actions/actionTypes";

import MovieDetail from "../../../components/movie/movieDetail/MovieDetail";
import MovieRecommendaiton from "../../../components/movie/movieRecommendation/MovieRecommendation";
import Spinner from "../../../components/UI/spinner/Spinner";

class TvDetailDisplay extends Component {
  componentDidMount() {
    this.props.onFetchTvDetail(this.props.match.params.id);
    this.props.onFetchTvRecommendation(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.onResetTvDetail();
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
        {loadingTv ? <Spinner /> : <MovieDetail movie={tv} />}

        {loadingRecommednation ? (
          <Spinner />
        ) : (
          <MovieRecommendaiton recommendation={tvRecommendation} media={"tv"} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tv: state.tvDetail.tv,
  loadingTv: state.tvDetail.loading,

  tvRecommendation: state.tvRecommendation.tvRecommendation,
  loadingRecommednation: state.tvRecommendation.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTvDetail: (tvID) => dispatch(fetchTvDetail(tvID)),
    onFetchTvRecommendation: (tvID) => dispatch(fetchTvRecommendation(tvID)),
    onResetTvDetail: () => dispatch({ type: TV_DETAIL_RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvDetailDisplay);
