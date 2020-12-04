import * as actions from "./trendingAction";
import * as types from "../actionTypes";

import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

import { trendingMock } from "../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("trending detail action", () => {
  it("creates an action `setTrendingRequest` to start loading", () => {
    const expectedAction = {
      type: types.TRENDING_REQUEST,
    };
    expect(actions.setTrendingRequest()).toEqual(expectedAction);
  });

  describe("succeeded to fetch trending detail", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchTrending` to fetch trending detail data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: trendingMock,
        });
      });

      const expectedAction = [
        { type: types.TRENDING_REQUEST },
        { type: types.TRENDING_SUCCESS, trending: trendingMock },
      ];

      const store = mockStore({ trending: {} });

      return store.dispatch(actions.fetchTrending()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("failed to fetch trending detail", () => {
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
          { type: types.TRENDING_REQUEST },
          { type: types.TRENDING_FAIL, error: errorMessage },
        ];

        store = mockStore({ error: "" });
      });
      it("action `fetchTrending` failed to fetch trending detail data", () => {
        return store.dispatch(actions.fetchTrending(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
