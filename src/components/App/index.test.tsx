import React from "react";
import { shallow } from "enzyme";

import { App } from "components/App";

describe("App", () => {
  it("should render correctly", () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });

  it("should render Header", () => {
    const component = shallow(<App />);

    expect(component.find("Header")).toHaveLength(1);
  });

  it("should render Main", () => {
    const component = shallow(<App />);

    expect(component.find("Main")).toHaveLength(1);
  });
});
