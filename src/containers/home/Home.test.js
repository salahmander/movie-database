import React from "react";
import Home from "./Home";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import * as actions from "../../store/actions/landingAction/landingAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("home container", () => {
  let wrapper;

  const store = mockStore({
    movies: {
      name: "",
      movies: [],
      movieInfo: [],
      TVInfo: [],
      movieLoading: false,
      movieError: "",
    },
    landing: {
      landingLoading: false,
      trending: [],
      nowMovie: [],
      nowTV: [],
      landingError: [],
    },
  });

  const props = {
    loading: false,
    trending: [],
    nowMovie: [],
    nowTV: [],
    dispatch: jest.fn(),
  };

  it("renders without errors", () => {
    wrapper = mount(
      <Provider store={store}>
        <Home {...props} />
      </Provider>
    );
    expect(wrapper.find(".home-container").length).toBe(1);
  });
  
});
