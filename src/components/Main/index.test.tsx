import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import { Main } from "components/Main";
import { mockStore } from "utils/mocks/mockStore";

describe("Main", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={mockStore}>
        <Main />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
