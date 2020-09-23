import React from "react";
import { shallow } from "enzyme";

import { Header } from "components/Header";

describe("Header", () => {
  it("should render correctly", () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });

  it("should render text 'Task Manager'", () => {
    const component = shallow(<Header />);

    expect(component.text()).toContain("Task Manager");
  });
});
