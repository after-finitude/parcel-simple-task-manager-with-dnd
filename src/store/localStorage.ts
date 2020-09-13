import { RootState } from "store/rootReducer";
import { TasksState } from "store/tasks/types";

export type PreloadedState = Record<string, unknown> | RootState | undefined;

export const loadState = (): PreloadedState => {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return {};
    }

    const deserializedState = JSON.parse(serializedState);

    return deserializedState;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export const saveState = (state: { tasks: TasksState }): void | undefined => {
  try {
    const serializedState = JSON.stringify(state);

    return localStorage.setItem("state", serializedState);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
