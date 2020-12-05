import * as actions from "./movieRecommendationAction";
import * as types from "../actionTypes";

import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

import { movieRecommendationMock } from "../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("movie recommendation action", () => {
  it("creates an action `setMovieRecommendationRequest` to start loading", () => {
    const expectedAction = {
      type: types.MOVIE_RECOMMENDATION_REQUEST,
    };
    expect(actions.setMovieRecommendationRequest()).toEqual(expectedAction);
  });

  describe("succeeded to fetch movie recommendation", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchMovieRecommendation` to fetch movie recommendation data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: movieRecommendationMock,
        });
      });

      const expectedAction = [
        { type: types.MOVIE_RECOMMENDATION_REQUEST },
        { type: types.MOVIE_RECOMMENDATION_SUCCESS, movieRecommendation: movieRecommendationMock },
      ];

      const store = mockStore({ movie: {} });

      return store.dispatch(actions.fetchMovieRecommendation()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("failed to fetch movie recommendation", () => {
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
          { type: types.MOVIE_RECOMMENDATION_REQUEST },
          { type: types.MOVIE_RECOMMENDATION_FAIL, error: errorMessage },
        ];

        store = mockStore({ error: "" });
      });
      it("action `fetchMovieRecommendation` failed to fetch movie recommendation data", () => {
        return store.dispatch(actions.fetchMovieRecommendation(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
