import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";

describe("spinner", () => {
  const wrapper = shallow(<Spinner />);
  it("renders without error", () => {
    expect(wrapper.find(".Loader").length).toBe(1);
  });
  it("renders spinner text", () => {
    expect(wrapper.text()).toEqual("Loading...");
  });
});
