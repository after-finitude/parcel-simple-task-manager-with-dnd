import { createSelector } from "reselect";

import { RootState } from "store/rootReducer";
import { TasksState, Task } from "store/tasks/types";

export const selectTaskById = (id: string) =>
  createSelector<RootState, TasksState, Task | undefined>(
    (state) => state.tasks,
    (tasks) => tasks.find((task) => task.id === id)
  );
