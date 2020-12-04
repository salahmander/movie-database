import React, { Component } from "react";
import { connect } from "react-redux";

import "./Home.css";

import SideScrollView from "../../components/sideScroll/sideScrollView/SideScrollView";
import Spinner from "../../components/UI/spinner/Spinner";

import { fetchLatestMovie } from "../../store/actions/latestMovieAction/latestMovieAction";
import { fetchLatestTv } from "../../store/actions/latestTvAction/latestTvAction";
import { fetchTrending } from "../../store/actions/trendingAction/trendingAction";

export class Home extends Component {
  componentDidMount() {
    this.props.onFetchLatestMovie();
    this.props.onFetchLatestTv();
    this.props.onFetchTrending();
  }

  render() {
    const {
      latestMovie,
      latestTv,
      loadingLatestMovie,
      loadingLatestTv,
      loadingTrending,
      trending,
    } = this.props;
    return (
      <>
        {/* Latest trending tv shows and movies*/}
        <div className="home-display-container">
          <div className="home-display-trending">
            <h2 className="home-display-trending-header">Trending</h2>
            {loadingTrending ? (
              <Spinner />
            ) : (
              <SideScrollView movies={trending} />
            )}
          </div>
          {/* Latest movies out now in Great Britain*/}
          <div className="home-display-movie">
            <h2 className="home-display-movie-header">Now Playing (Movies)</h2>
            {loadingLatestMovie ? (
              <Spinner />
            ) : (
              <SideScrollView movies={latestMovie} media="movie" />
            )}
          </div>
          {/* Latest TV shows currently on the air*/}
          <div className="home-display-TV">
            <h2 className="home-display-movie-TV">On The Air (TV)</h2>
            {loadingLatestTv ? (
              <Spinner />
            ) : (
              <SideScrollView movies={latestTv} media="tv" />
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  latestMovie: state.latestMovie.latestMovie,
  latestTv: state.latestTv.latestTv,
  loadingLatestMovie: state.latestMovie.loading,
  loadingLatestTv: state.latestTv.loading,
  loadingTrending: state.latestMovie.loading,
  trending: state.trending.trending,
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLatestMovie: () => dispatch(fetchLatestMovie()),
    onFetchLatestTv: () => dispatch(fetchLatestTv()),
    onFetchTrending: () => dispatch(fetchTrending()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
