import React from "react";
import { shallow } from "enzyme";
import Background from "./Background";

describe("background", () => {
  const wrapper = shallow(<Background />);
  it("renders without error", () => {
    expect(wrapper.find(".background-container").length).toBe(1);
  });
});
