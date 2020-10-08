import React, { Component } from "react";

import "./Home.css";

import { connect } from "react-redux";
import * as landingAction from "../../store/actions/landingAction/landingAction";

import HomeDisplay from "../../components/home/homeDisplay/HomeDisplay";
import Spinner from "../../components/UI/spinner/Spinner";

export class Home extends Component {
  componentDidMount() {
    this.props.onHomeData();
  }

  render() {
    const { loading, trending, nowTV, nowMovie } = this.props;
    return (
      <div className="home-container">
        <div className="trending=movies">
          {loading ? (
            <Spinner />
          ) : (
            <HomeDisplay
              trending={trending}
              nowTV={nowTV}
              nowMovie={nowMovie}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nowTV: state.landing.nowTV,
  nowMovie: state.landing.nowMovie,
  trending: state.landing.trending,
  loading: state.landing.loading,
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onHomeData: () => dispatch(landingAction.fetchAllHomeData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
