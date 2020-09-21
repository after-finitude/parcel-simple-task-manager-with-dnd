import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import { TasksListItem } from "components/Tasks/TasksListItem";

import { mockStore } from "utils/mocks/mockStore";

describe("TasksListItem", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksListItem id="test1" title="Test1" closed={false} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
