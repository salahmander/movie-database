import * as actions from "./tvRecommendationAction";
import * as types from "../actionTypes";

import configureMockStore from "redux-mock-store";
import moxios from "moxios";
import thunk from "redux-thunk";

import { TVRecommendationMock } from "../../../test/mocks/mocks";

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("tv recommendation action", () => {
  it("creates an action `setTvRecommendationRequest` to start loading", () => {
    const expectedAction = {
      type: types.TV_RECOMMENDATION_REQUEST,
    };
    expect(actions.setTvRecommendationRequest()).toEqual(expectedAction);
  });

  describe("succeeded to fetch tv recommendation", () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    it("creates an action `fetchTvRecommendation` to fetch tv recommendation data", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: TVRecommendationMock,
        });
      });

      const expectedAction = [
        { type: types.TV_RECOMMENDATION_REQUEST },
        { type: types.TV_RECOMMENDATION_SUCCESS, tvRecommendation: TVRecommendationMock },
      ];

      const store = mockStore({ tvRecommendation: {} });

      return store.dispatch(actions.fetchTvRecommendation()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe("failed to fetch tv recommendation", () => {
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
          { type: types.TV_RECOMMENDATION_REQUEST },
          { type: types.TV_RECOMMENDATION_FAIL, error: errorMessage },
        ];

        store = mockStore({ error: "" });
      });
      it("action `fetchTvRecommendation` failed to fetch tv recommendation data", () => {
        return store.dispatch(actions.fetchTvRecommendation(randomText)).then(() => {
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});
