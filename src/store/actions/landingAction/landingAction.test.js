import * as types from "../actionTypes";
import * as actions from "./landingAction";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import {
  trendingMock,
  nowMovieMock,
  nowTVMock,
} from "../../../test/mocks/mocks";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("landing action", () => {
  it("creates an action `startLoading` to start loading", () => {
    const expectedAction = {
      type: types.START_LANDING_LOADING,
    };
    expect(actions.startLoading()).toEqual(expectedAction);
  });

  it("creates an action `stopLoading` to stop loading", () => {
    const expectedAction = {
      type: types.STOP_LANDING_LOADING,
    };
    expect(actions.stopLoading()).toEqual(expectedAction);
  });

  describe("landing fetch actions", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchTrending` to fetch trending data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: trendingMock,
        });
      });

      const expectedAction = [
        { type: types.FETCH_TRENDING, trending: trendingMock },
      ];

      const store = mockStore({ trending: {} });

      return store.dispatch(actions.fetchTrending()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it("creates an action `fetchNowMovie` to fetch now playing movies data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: nowMovieMock,
        });
      });

      const expectedAction = [
        { type: types.FETCH_NOW_MOVIE, nowMovie: nowMovieMock },
      ];

      const store = mockStore({ nowMovieMock: {} });

      return store.dispatch(actions.fetchNowMovie()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    it("creates an action `fetchNowTV` to fetch now playing movies data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: nowTVMock,
        });
      });

      const expectedAction = [{ type: types.FETCH_NOW_TV, nowTV: nowTVMock }];

      const store = mockStore({ nowTVMock: {} });

      return store.dispatch(actions.fetchNowTV()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("landing fetch action failed to fetch data", () => {
      let store, expectedAction;
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
          { type: types.LANDING_ERROR, landingError: errorMessage },
        ];

        store = mockStore({ landingError: "" });
      });
      it("action `fetchTrending` failed to fetch all data", () => {
        return store.dispatch(actions.fetchTrending()).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });

      it("action `fetchNowMovie` failed to fetch all data", () => {
        return store.dispatch(actions.fetchNowMovie()).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });

      it("action `fetchNowTV` failed to fetch all data", () => {
        return store.dispatch(actions.fetchNowTV()).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
