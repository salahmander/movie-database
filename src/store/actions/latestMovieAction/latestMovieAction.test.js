import * as actions from "./latestMovieAction";
import * as types from "../actionTypes";

import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

import { nowMovieMock } from "../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("latest movie detail action", () => {
  it("creates an action `setLatestMovieRequest` to start loading", () => {
    const expectedAction = {
      type: types.LATEST_MOVIE_REQUEST,
    };
    expect(actions.setLatestMovieRequest()).toEqual(expectedAction);
  });

  describe("succeeded to fetch latest movie detail", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchLatestMovie` to fetch latest movie detail data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: nowMovieMock,
        });
      });

      const expectedAction = [
        { type: types.LATEST_MOVIE_REQUEST },
        { type: types.LATEST_MOVIE_SUCCESS, latestMovie: nowMovieMock },
      ];

      const store = mockStore({ latestMovie: {} });

      return store.dispatch(actions.fetchLatestMovie()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("failed to fetch latest movie detail", () => {
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
          { type: types.LATEST_MOVIE_REQUEST },
          { type: types.LATEST_MOVIE_FAIL, error: errorMessage },
        ];

        store = mockStore({ error: "" });
      });
      it("action `fetchLatestMovie` failed to fetch latest movie detail data", () => {
        return store.dispatch(actions.fetchLatestMovie(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
