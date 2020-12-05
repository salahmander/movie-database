import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import Router from "./Router";
import Home from "../containers/home/Home";
import PageNotFound from "../components/UI/404page/404page";
import MoviesListDisplay from "../containers/movies/moviesListDisplay/MoviesListDisplay";
import MovieDetailDisplay from "../containers/movies/movieDetailDisplay/MovieDetailDisplay";
import TvDetailDisplay from "../containers/tv/tvDetailDisplay/TvDetailDisplay";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("react router", () => {
  const store = mockStore({
    moviesList: {
      movies: [],
      loading: false,
      error: "",
    },
    movieDetail: {
      movie: [],
      loading: false,
      error: "",
    },
    tvDetail: {
      tv: [],
      loading: false,
      error: "",
    },
    trending: {
      trending: [],
      loading: false,
      error: "",
    },
    latestMovie: {
      latestMovie: [],
      loading: false,
      error: "",
    },
    latestTv: {
      latestTv: [],
      loading: false,
      error: "",
    },
    movieRecommendation: {
      movieRecommendation: [],
      loading: false,
      error: "",
    },
    tvRecommendation: {
      tvRecommendation: [],
      loading: false,
      error: "",
    },
  });
  it("redirects to 404 if path is invalid", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <Router />
      </MemoryRouter>
    );
    expect(wrapper.find(Home).length).toBe(0);
    expect(wrapper.find(PageNotFound).length).toBe(1);
  });

  it("redirects to home path if path is valid", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(Home).length).toBe(1);
    expect(wrapper.find(PageNotFound).length).toBe(0);
  });

  it("redirects to movies path if path is valid", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/movies/taken"]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(MoviesListDisplay).length).toBe(1);
    expect(wrapper.find(PageNotFound).length).toBe(0);
  });

  it("redirects to movie path if path is valid", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/movie/260346"]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(MovieDetailDisplay).length).toBe(1);
    expect(wrapper.find(PageNotFound).length).toBe(0);
  });

  it("redirects to tv path if path is valid", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/tv/68006"]}>
          <Router />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(TvDetailDisplay).length).toBe(1);
    expect(wrapper.find(PageNotFound).length).toBe(0);
  });
});
