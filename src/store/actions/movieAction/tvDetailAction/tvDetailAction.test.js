import * as actions from "./tvDetailAction";
import * as types from "../../actionTypes";

import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

import { tvInfoMock } from "../../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("tv detail action", () => {
  it("creates an action `setTvDetailRequest` to start loading", () => {
    const expectedAction = {
      type: types.TV_DETAIL_REQUEST,
    };
    expect(actions.setTvDetailRequest()).toEqual(expectedAction);
  });

  describe("succeeded to fetch tv detail", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchTvDetail` to fetch tv detail data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: tvInfoMock,
        });
      });

      const expectedAction = [
        { type: types.TV_DETAIL_REQUEST },
        { type: types.TV_DETAIL_SUCCESS, tv: tvInfoMock },
      ];

      const store = mockStore({ tv: {} });

      return store.dispatch(actions.fetchTvDetail()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("failed to fetch tv detail", () => {
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
          { type: types.TV_DETAIL_REQUEST },
          { type: types.TV_DETAIL_FAIL, error: errorMessage },
        ];

        store = mockStore({ error: "" });
      });
      it("action `fetchTvDetail` failed to fetch tv detail data", () => {
        return store.dispatch(actions.fetchTvDetail(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
