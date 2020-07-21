import {
  updateState,
  addTask,
  updateTask,
  closeTask,
  restoreTask,
} from "store/tasks/actions";
import {
  ActionUpdateState,
  ActionAddTask,
  TasksActionTypes,
  ActionUpdateTask,
  ActionCloseTask,
  ActionRestoreTask,
  TasksState,
} from "store/tasks/types";

const tasks: TasksState = [
  { id: "1", title: "Test1", description: "test1", closed: false },
  { id: "2", title: "Test2", description: "test2", closed: false },
];

describe("Tasks actions", () => {
  test("updateState", () => {
    const input: ActionUpdateState = updateState(tasks);
    const output: ActionUpdateState = {
      payload: tasks,
      type: TasksActionTypes.UPDATE_STATE,
    };

    expect(input).toEqual(output);
  });

  test("addTask", () => {
    const input: ActionAddTask = addTask("Title", "Description", "1");
    const output: ActionAddTask = {
      payload: {
        id: "1",
        title: "Title",
        description: "Description",
        closed: false,
      },
      type: TasksActionTypes.ADD_TASK,
    };

    expect(input).toEqual(output);
  });

  test("updateTask", () => {
    const input: ActionUpdateTask = updateTask("1", "Title", "Description");
    const output: ActionUpdateTask = {
      payload: {
        id: "1",
        title: "Title",
        description: "Description",
        closed: false,
      },
      type: TasksActionTypes.UPDATE_TASK,
    };

    expect(input).toEqual(output);
  });

  test("closeTask", () => {
    const input: ActionCloseTask = closeTask("3");
    const output: ActionCloseTask = {
      payload: {
        id: "3",
      },
      type: TasksActionTypes.CLOSE_TASK,
    };

    expect(input).toEqual(output);
  });

  test("restoreTask", () => {
    const input: ActionRestoreTask = restoreTask("23");
    const output: ActionRestoreTask = {
      payload: {
        id: "23",
      },
      type: TasksActionTypes.RESTORE_TASK,
    };

    expect(input).toEqual(output);
  });
});
