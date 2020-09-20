import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

import { Main } from "components/Main";
import { mockStore } from "utils/mocks/mockStore";

describe("Main", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Provider store={mockStore}>
        <Main />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
