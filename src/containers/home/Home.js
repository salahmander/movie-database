import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Home.css";

import SideScrollView from "../../components/sideScroll/sideScrollView/SideScrollView";
import Spinner from "../../components/UI/spinner/Spinner";

import { fetchLatestMovie } from "../../store/actions/latestMovieAction/latestMovieAction";
import { fetchLatestTv } from "../../store/actions/latestTvAction/latestTvAction";
import { fetchTrending } from "../../store/actions/trendingAction/trendingAction";

const Home = () => {
  const dispatch = useDispatch();

  const latestMovieState = useSelector((state) => state.latestMovie);
  const { latestMovie, loadingLatestMovie } = latestMovieState;

  const latestTvState = useSelector((state) => state.latestTv);
  const { latestTv, loadingLatestTv } = latestTvState;

  const trendingState = useSelector((state) => state.trending);
  const { trending, loadingTrending } = trendingState;

  useEffect(() => {
    dispatch(fetchLatestMovie());
    dispatch(fetchLatestTv());
    dispatch(fetchTrending());
  }, [dispatch]);

  return (
    <>
      {/* Latest trending tv shows and movies*/}
      <div className="home-display-container">
        <div className="home-display-trending">
          <h2 className="home-display-trending-header">Trending</h2>
          {loadingTrending ? <Spinner /> : <SideScrollView movies={trending} />}
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
};

export default Home;
