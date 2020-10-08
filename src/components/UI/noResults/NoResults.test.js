import React from "react";
import { shallow } from "enzyme";
import NoResults from "./NoResults";

describe("no results", () => {
  const wrapper = shallow(<NoResults />);
  it("renders without error", () => {
    expect(wrapper.find(".no-results-container").length).toBe(1);
  });
  it("renders no results image", () => {
    expect(wrapper.find(".no-results-image").length).toBe(1);
  });
  it("renders no results heading", () => {
    expect(wrapper.find(".no-results-heading").length).toBe(1);
  });
  it("renders no results heading text", () => {
    expect(wrapper.text()).toEqual(
      "Sorry couldn't find what you were looking for."
    );
  });
});
