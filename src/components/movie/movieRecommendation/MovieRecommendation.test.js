import React from "react";
import { shallow } from "enzyme";
import MovieRecommendation from "./MovieRecommendation";

describe("MovieRecommendation", () => {
  const media = "movie";
  const props = {
    recommendation: {
      page: 1,
      results: 20,
      total_pages: 2,
      total_results: 32,
    },
    media: media,
  };
  const wrapper = shallow(<MovieRecommendation {...props} />);
  it("renders without crashing", () => {
    expect(wrapper.find(".movie-recommendation-display-container").length).toBe(
      1
    );
  });
});
