import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import { TasksCreateDialog } from "components/Tasks/TasksCreateDialog";
import { mockStore } from "utils/mocks/mockStore";

describe("TasksCreateDialog", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksCreateDialog />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it("should render correctly when modal open", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksCreateDialog status={true} />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });

  it("should contain text 'Create task' when modal open", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksCreateDialog status={true} />
      </Provider>,
    );

    expect(component.text()).toContain("Create task");
  });

  it("should contain text 'Cancel' when modal open", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksCreateDialog status={true} />
      </Provider>,
    );

    expect(component.text()).toContain("Cancel");
  });

  it("should contain text 'Add task' when modal open", () => {
    const component = mount(
      <Provider store={mockStore}>
        <TasksCreateDialog status={true} />
      </Provider>,
    );

    expect(component.text()).toContain("Add task");
  });
});
