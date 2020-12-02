import * as actions from "./moviesListAction";
import * as types from "../../actionTypes";

import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

import { movieMock } from "../../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("movies list action", () => {
  it("creates an action `setMoviesListRequest` to start loading", () => {
    const expectedAction = {
      type: types.MOVIES_LIST_REQUEST,
    };
    expect(actions.setMoviesListRequest()).toEqual(expectedAction);
  });

  describe("succeeded to fetch movie list", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchMoviesList` to fetch all data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: movieMock,
        });
      });

      const expectedAction = [
        { type: types.MOVIES_LIST_REQUEST },
        { type: types.MOVIES_LIST_SUCCESS, movies: movieMock },
      ];

      const store = mockStore({ movie: {} });

      return store.dispatch(actions.fetchMoviesList()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("failed to fetch movie list", () => {
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
          { type: types.MOVIES_LIST_REQUEST },
          { type: types.MOVIES_LIST_FAIL, error: errorMessage },
        ];

        store = mockStore({ error: "" });
      });
      it("action `fetchMoviesList` failed to fetch all data", () => {
        return store.dispatch(actions.fetchMoviesList(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
