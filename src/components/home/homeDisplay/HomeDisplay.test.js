import React from "react";
import { shallow } from "enzyme";
import HomeDisplay from "./HomeDisplay";

import {
  trendingMock,
  nowTVMock,
  nowMovieMock,
} from "../../../test/mocks/mocks";

describe("HomeDisplay", () => {
  const props = {
    treding: trendingMock,
    nowTV: nowTVMock,
    nowMovie: nowMovieMock,
  };

  const wrapper = shallow(<HomeDisplay {...props} />);
  it("renders without error", () => {
    expect(wrapper.find(".home-display-container").length).toBe(1);
  });
  describe("Displays trending", () => {
    it("renders trending", () => {
      expect(wrapper.find(".home-display-trending").length).toBe(1);
    });
    it("renders heading", () => {
      expect(wrapper.find(".home-display-trending-header").text()).toEqual(
        "Trending"
      );
    });
  });
  describe("displays now playing movies", () => {
    it("renders now playing movies", () => {
      expect(wrapper.find(".home-display-movie").length).toBe(1);
    });
    it("renders heading", () => {
      expect(wrapper.find(".home-display-movie-header").text()).toEqual(
        "Now Playing (Movies)"
      );
    });
  });
  describe("displays on the Air TV", () => {
    it("renders on the air TV", () => {
      expect(wrapper.find(".home-display-TV").length).toBe(1);
    });
    it("renders heading", () => {
      expect(wrapper.find(".home-display-movie-TV").text()).toEqual(
        "On The Air (TV)"
      );
    });
  });
});
