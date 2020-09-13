import { createStore, CombinedState } from "redux";

import { rootReducer } from "store/rootReducer";
import { TasksState } from "store/tasks/types";
import { DialogState } from "store/dialog/types";

describe("Root reducer", () => {
  test("create store with root reducer", () => {
    const store = createStore(rootReducer);

    const input = store.getState();
    const output: CombinedState<{
      tasks: TasksState;
      dialog: DialogState;
    }> = {
      dialog: { currentTaskId: "", status: false, type: "" },
      tasks: [
        {
          closed: false,
          description: "test1",
          id: "test1",
          title: "Test1",
        },
        {
          closed: false,
          description: "test2",
          id: "test2",
          title: "Test2",
        },
      ],
    };

    expect(input).toEqual(output);
  });
});
