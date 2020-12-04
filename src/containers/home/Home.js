import React, { Component } from "react";

import { connect } from "react-redux";

import HomeDisplay from "../../components/home/homeDisplay/HomeDisplay";
import Spinner from "../../components/UI/spinner/Spinner";

import { fetchTrending } from "../../store/actions/trendingAction/trendingAction";
import { fetchLatestMovie } from "../../store/actions/latestMovieAction/latestMovieAction";
import { fetchLatestTv } from "../../store/actions/latestTvAction/latestTvAction";

export class Home extends Component {
  componentDidMount() {
    this.props.onFetchTrending();
    this.props.onFetchLatestMovie();
    this.props.onFetchLatestTv();
  }

  render() {
    const { loading, trending, latestTv, latestMovie } = this.props;
    return (
      <div className="home-container">
        {loading ? (
          <Spinner />
        ) : (
          <HomeDisplay
            trending={trending}
            nowMovie={latestTv}
            nowTV={latestMovie}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  latestTv: state.latestTv.latestTv,
  latestMovie: state.latestMovie.latestMovie,
  trending: state.trending.trending,
  loading: state.latestMovie.loading,
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTrending: () => dispatch(fetchTrending()),
    onFetchLatestMovie: () => dispatch(fetchLatestMovie()),
    onFetchLatestTv: () => dispatch(fetchLatestTv()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
