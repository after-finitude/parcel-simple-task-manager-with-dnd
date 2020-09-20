import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import { mockStore } from "utils/mocks/mockStore";
import { TasksAddButton } from "components/Tasks/TasksAddButton";

describe("TasksAddButton", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksAddButton />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
