import { RootState } from "store/rootReducer";
import { StorageService, LocalStorageAdapter } from "services/storageService";
import { TasksState } from "store/tasks/types";

export type PreloadedState = Record<string, unknown> | RootState | undefined;

const storageServiceWithLocalStorage = new StorageService({
  storage: new LocalStorageAdapter(),
});

export const loadState = () => {
  try {
    return storageServiceWithLocalStorage.get("state") as PreloadedState;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export const saveState = (state: { tasks: TasksState }) => {
  try {
    return storageServiceWithLocalStorage.set("state", state);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};
