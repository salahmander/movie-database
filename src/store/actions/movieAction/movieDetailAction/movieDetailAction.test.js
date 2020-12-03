import * as actions from "./movieDetailAction";
import * as types from "../../actionTypes";

import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

import { movieInfoMock } from "../../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("movie detail action", () => {
  it("creates an action `setMovieDetailRequest` to start loading", () => {
    const expectedAction = {
      type: types.MOVIE_DETAIL_REQUEST,
    };
    expect(actions.setMovieDetailRequest()).toEqual(expectedAction);
  });

  describe("succeeded to fetch movie detail", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchMovieDetail` to fetch movie detail data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: movieInfoMock,
        });
      });

      const expectedAction = [
        { type: types.MOVIE_DETAIL_REQUEST },
        { type: types.MOVIE_DETAIL_SUCCESS, movie: movieInfoMock },
      ];

      const store = mockStore({ movie: {} });

      return store.dispatch(actions.fetchMovieDetail()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("failed to fetch movie detail", () => {
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
          { type: types.MOVIE_DETAIL_REQUEST },
          { type: types.MOVIE_DETAIL_FAIL, error: errorMessage },
        ];

        store = mockStore({ error: "" });
      });
      it("action `fetchMovieDetail` failed to fetch movie detail data", () => {
        return store.dispatch(actions.fetchMovieDetail(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
