import * as actions from "./latestTvAction";
import * as types from "../actionTypes";

import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

import { nowTVMock } from "../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("latest movie detail action", () => {
  it("creates an action `setLatestTvRequest` to start loading", () => {
    const expectedAction = {
      type: types.LATEST_TV_REQUEST,
    };
    expect(actions.setLatestTvRequest()).toEqual(expectedAction);
  });

  describe("succeeded to fetch latest movie detail", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchLatestTv` to fetch latest movie detail data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: nowTVMock,
        });
      });

      const expectedAction = [
        { type: types.LATEST_TV_REQUEST },
        { type: types.LATEST_TV_SUCCESS, latestTv: nowTVMock },
      ];

      const store = mockStore({ latestTv: {} });

      return store.dispatch(actions.fetchLatestTv()).then(() => {
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
          { type: types.LATEST_TV_REQUEST },
          { type: types.LATEST_TV_FAIL, error: errorMessage },
        ];

        store = mockStore({ error: "" });
      });
      it("action `fetchLatestTv` failed to fetch latest movie detail data", () => {
        return store.dispatch(actions.fetchLatestTv(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
