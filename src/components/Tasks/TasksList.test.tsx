import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import { TasksList } from "components/Tasks/TasksList";

import { mockStore } from "utils/mocks/mockStore";

describe("TasksList", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksList />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
