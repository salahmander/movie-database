import React from "react";
import { shallow } from "enzyme";

import MovieDetail from "./MovieDetail";
import { movieInfoMock } from "../../../test/mocks/mocks";

describe("MovieDetail", () => {
  it("should render without errors", () => {
    const props = { movie: movieInfoMock, runtime: "1h 20m" };
    const wrapper = shallow(<MovieDetail {...props} />);
    expect(wrapper.find(".movie-detail-container").length).toBe(1);
  });
});
