import * as types from "../actionTypes";
import * as actions from "./movieAction";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import {
  movieMock,
  movieInfoMock,
  tvInfoMock,
} from "../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("movie actions", () => {
  it("creates an action `setSearchName` to set the name", () => {
    const name = "Taken";
    const expectedAction = {
      type: types.SET_NAME,
      name,
    };
    expect(actions.setSearchName(name)).toEqual(expectedAction);
  });

  it("creates an action `starLoading` to start loading", () => {
    const expectedAction = {
      type: types.START_MOVIE_LOADING,
    };
    expect(actions.startLoading()).toEqual(expectedAction);
  });

  it("creates and action `stopLoading` to stop loading", () => {
    const expectedAction = {
      type: types.STOP_MOVIE_LOADING,
    };
    expect(actions.stopLoading()).toEqual(expectedAction);
  });

  describe("movie fetch actions", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchMovies` to fetch all data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: movieMock,
        });
      });

      const expectedAction = [
        { type: types.START_MOVIE_LOADING },
        { type: types.FETCH_MOVIES, movies: movieMock },
      ];

      const store = mockStore({ movie: {} });

      return store.dispatch(actions.fetchMovies()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it("creates an action `fetchMovieInfo` to fetch movie info", () => {
      const movieID = 260346;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: movieInfoMock,
        });
      });

      const expectedAction = [
        { type: types.START_MOVIE_LOADING },
        { type: types.FETCH_MOVIE_INFO, movieInfo: movieInfoMock },
      ];

      const store = mockStore({ movieInfo: {} });

      return store.dispatch(actions.fetchMovieInfo(movieID)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it("creates an action `fetchMovieInfo` to fetch movie info", () => {
      const TVID = 76479;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: tvInfoMock,
        });
      });

      const expectedAction = [
        { type: types.START_MOVIE_LOADING },
        { type: types.FETCH_TV_INFO, TVInfo: tvInfoMock },
      ];

      const store = mockStore({ TVInfo: {} });

      return store.dispatch(actions.fetchTVInfo(TVID)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("Movie failed to fetch action", () => {
      let store, expectedAction;
      const randomText = "adpwapawdpdaw";
      const errorMessage = "Request failed with status code 404";
      beforeEach(() => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 404,
            response: errorMessage,
          });
        });

        expectedAction = [
          { type: types.START_MOVIE_LOADING },
          { type: types.MOVIE_ERROR, movieError: errorMessage },
        ];

        store = mockStore({ movieError: "" });
      });
      it("action `fetchMovies` failed to fetch all data", () => {
        return store.dispatch(actions.fetchMovies(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });

      it("action `fetchMovieInfo` failed to fetch all data", () => {
        return store.dispatch(actions.fetchMovieInfo(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });

      it("action `fetchTVInfo` failed to fetch all data", () => {
        return store.dispatch(actions.fetchTVInfo(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });

    });
  });
});
