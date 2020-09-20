import React from "react";
import { render } from "enzyme";

import { Header } from "components/Header";

describe("Header", () => {
  it("should render correctly", () => {
    const component = render(<Header />);

    expect(component).toMatchSnapshot();
  });
});
