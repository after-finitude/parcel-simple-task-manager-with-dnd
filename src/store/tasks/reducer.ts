import { Reducer } from "redux";

import {
  TasksState,
  TasksActionTypes,
  Task,
  TasksActions,
} from "store/tasks/types";

const initialState: TasksState = [
  { id: "test1", title: "Test1", description: "test1", closed: false },
  { id: "test2", title: "Test2", description: "test2", closed: false },
];

export const tasksReducer: Reducer<TasksState, TasksActions> = (
  state: TasksState = initialState,
  action: TasksActions
): TasksState => {
  switch (action.type) {
    case TasksActionTypes.UPDATE_STATE:
      return [...action.payload];
    case TasksActionTypes.ADD_TASK:
      return [...state, action.payload];
    case TasksActionTypes.UPDATE_TASK:
      return state.map((task: Task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.title,
              description: action.payload.description,
            }
          : task
      );
    case TasksActionTypes.CLOSE_TASK:
      return state.map((task: Task) =>
        task.id === action.payload.id
          ? {
              ...task,
              closed: true,
            }
          : task
      );
    case TasksActionTypes.RESTORE_TASK:
      return state.map((task: Task) =>
        task.id === action.payload.id
          ? {
              ...task,
              closed: false,
            }
          : task
      );
    default:
      return state;
  }
};
