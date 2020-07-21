import { v4 } from "uuid";

import {
  TasksActionTypes,
  TasksState,
  ActionAddTask,
  ActionUpdateState,
  ActionUpdateTask,
  ActionCloseTask,
  ActionRestoreTask,
} from "store/tasks/types";

export const updateState = (tasks: TasksState): ActionUpdateState => ({
  type: TasksActionTypes.UPDATE_STATE,
  payload: tasks,
});

export const addTask = (
  title: string,
  description: string,
  id: string = v4()
): ActionAddTask => ({
  type: TasksActionTypes.ADD_TASK,
  payload: {
    id,
    title,
    description,
    closed: false,
  },
});

export const updateTask = (
  id: string,
  title: string,
  description: string
): ActionUpdateTask => ({
  type: TasksActionTypes.UPDATE_TASK,
  payload: {
    id,
    title,
    description,
    closed: false,
  },
});

export const closeTask = (id: string): ActionCloseTask => ({
  type: TasksActionTypes.CLOSE_TASK,
  payload: {
    id,
  },
});

export const restoreTask = (id: string): ActionRestoreTask => ({
  type: TasksActionTypes.RESTORE_TASK,
  payload: {
    id,
  },
});
