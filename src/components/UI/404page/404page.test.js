import React from "react";
import { shallow } from "enzyme";
import PageNotFound from "./404page";

describe("404 page", () => {
  const wrapper = shallow(<PageNotFound />);
  it("renders without error", () => {
    expect(wrapper.find(".page-not-found-container").length).toBe(1);
  });
  it("renders 404 page image", () => {
    expect(wrapper.find(".page-not-found-image").length).toBe(1);
  });
  it("renders 404 page heading", () => {
    expect(wrapper.find(".page-not-found-heading").length).toBe(1);
  });
  it("renders 404 page heading text", () => {
    expect(wrapper.text()).toEqual("Page Not Found");
  });
});
