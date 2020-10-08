import * as types from "../actionTypes";
import * as actions from "./recommendationAction";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import {
  movieRecommendationMock,
  TVRecommendationMock,
} from "../../../test/mocks/mocks";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("recommendation action", () => {
  it("creates an action `startLoading` to start loading", () => {
    const expectedAction = {
      type: types.START_RECOMMENDATION_LOADING,
    };
    expect(actions.startLoading()).toEqual(expectedAction);
  });

  it("creates an action `stopLoading` to stop loading", () => {
    const expectedAction = {
      type: types.STOP_RECOMMENDATION_LOADING,
    };
    expect(actions.stopLoading()).toEqual(expectedAction);
  });

  describe("recommendation fetch actions", () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchMovieRecommendation` to fetch recommended movie data", () => {
      const movieID = 501979;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: movieRecommendationMock,
        });
      });

      const expectedAction = [
        { type: types.START_RECOMMENDATION_LOADING },
        {
          type: types.FETCH_MOVIE_RECOMMENDATION,
          movieRecommendation: movieRecommendationMock,
        },
      ];

      const store = mockStore({ movieRecommendation: {} });

      return store
        .dispatch(actions.fetchMovieRecommendation(movieID))
        .then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it("creates an action `fetchTVRecommendation` to fetch recommended TV data", () => {
      const TVID = 76479;
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: TVRecommendationMock,
        });
      });

      const expectedAction = [
        { type: types.START_RECOMMENDATION_LOADING },
        {
          type: types.FETCH_TV_RECOMMENDATION,
          TVRecommendation: TVRecommendationMock,
        },
      ];

      const store = mockStore({ TVRecommendation: {} });

      return store.dispatch(actions.fetchTVRecommendation(TVID)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    describe("recommendation fetch action failed to fetch data", () => {
      let store, expectedAction;
      const randomID = 84489498948;
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
          { type: types.START_RECOMMENDATION_LOADING },
          {
            type: types.RECOMMEDNATION_ERROR,
            recommendationError: errorMessage,
          },
        ];

        store = mockStore({ recommendationError: "" });
      });

      it("action `fetchMovieRecommendation` failed to fetch data", () => {
        return store
          .dispatch(actions.fetchMovieRecommendation(randomID))
          .then(() => {
            expect(store.getActions()).toEqual(expectedAction);
          });
      });

      it("action `fetchTVRecommendation` failed to fetch data", () => {
        return store
          .dispatch(actions.fetchTVRecommendation(randomID))
          .then(() => {
            expect(store.getActions()).toEqual(expectedAction);
          });
      });
    });
  });
});
