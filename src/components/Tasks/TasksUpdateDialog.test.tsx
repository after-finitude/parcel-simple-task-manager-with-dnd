import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import { TasksUpdateDialog } from "components/Tasks/TasksUpdateDialog";

import { mockStore } from "utils/mocks/mockStore";

describe("TasksUpdateDialog", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksUpdateDialog status={false} currentTaskId="1" />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
