export interface Task {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly closed: boolean;
}

export type TasksState = Task[];

export enum TasksActionTypes {
  UPDATE_STATE = "UPDATE_STATE",
  ADD_TASK = "ADD_TASK",
  UPDATE_TASK = "UPDATE_TASK",
  CLOSE_TASK = "CLOSE_TASK",
  RESTORE_TASK = "RESTORE_TASK",
}

export interface TasksBaseAction {
  type: TasksActionTypes;
}

export interface ActionUpdateState extends TasksBaseAction {
  type: TasksActionTypes.UPDATE_STATE;
  payload: TasksState;
}

export interface ActionAddTask extends TasksBaseAction {
  type: TasksActionTypes.ADD_TASK;
  payload: Task;
}

export interface ActionUpdateTask extends TasksBaseAction {
  type: TasksActionTypes.UPDATE_TASK;
  payload: Task;
}

export interface ActionCloseTask extends TasksBaseAction {
  type: TasksActionTypes.CLOSE_TASK;
  payload: { id: string };
}

export interface ActionRestoreTask extends TasksBaseAction {
  type: TasksActionTypes.RESTORE_TASK;
  payload: { id: string };
}

export type TasksActions =
  | ActionUpdateState
  | ActionAddTask
  | ActionUpdateTask
  | ActionCloseTask
  | ActionRestoreTask;
