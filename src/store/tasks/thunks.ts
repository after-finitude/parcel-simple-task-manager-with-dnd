import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { RootState } from "store/rootReducer";
import { closeDialog } from "store/dialog/actions";
import { DialogTypes } from "store/dialog/types";
import { addTask, updateTask } from "store/tasks/actions";

export const thunkAddTask = (
  title: string,
  description: string
): ThunkAction<Promise<any>, RootState, null, Action> => async (dispatch) =>
  Promise.resolve(dispatch(addTask(title, description))).then(() =>
    dispatch(closeDialog(DialogTypes.CREATE))
  );

export const thunkUpdateTask = (
  title: string,
  description: string
): ThunkAction<Promise<any>, RootState, null, Action> => async (
  dispatch,
  getState
) => {
  const {
    dialog: { currentTaskId },
  } = getState();

  return Promise.resolve(
    dispatch(updateTask(currentTaskId, title, description))
  ).then(() => dispatch(closeDialog(DialogTypes.UPDATE)));
};
