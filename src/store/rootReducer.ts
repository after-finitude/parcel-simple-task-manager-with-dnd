import { combineReducers } from "@reduxjs/toolkit";

import { tasksReducer } from "store/tasks/reducer";
import { dialogReducer } from "store/dialog/reducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  dialog: dialogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
