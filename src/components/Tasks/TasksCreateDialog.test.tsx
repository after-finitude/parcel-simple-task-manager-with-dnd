import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import { TasksCreateDialog } from "components/Tasks/TasksCreateDialog";
import { mockStore } from "utils/mocks/mockStore";

describe("TasksCreateDialog", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksCreateDialog status={false} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
