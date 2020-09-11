import { Reducer } from "redux";
import {
  DialogActionTypes,
  DialogState,
  DialogTypes,
  DialogActions,
} from "store/dialog/types";

const initialState: DialogState = {
  type: "",
  status: false,
  currentTaskId: "",
};

export const dialogReducer: Reducer<DialogState, DialogActions> = (
  state: DialogState = initialState,
  action: DialogActions,
): DialogState => {
  switch (action.type) {
    case DialogActionTypes.OPEN_DIALOG:
      return action.payload.type === DialogTypes.CREATE
        ? {
            ...state,
            type: DialogTypes.CREATE,
            status: true,
            currentTaskId: action.payload.currentTaskId,
          }
        : {
            ...state,
            type: DialogTypes.UPDATE,
            status: true,
            currentTaskId: action.payload.currentTaskId,
          };
    case DialogActionTypes.CLOSE_DIALOG:
      return action.payload.type === DialogTypes.CREATE
        ? { ...state, type: DialogTypes.CREATE, status: false }
        : { ...state, type: DialogTypes.UPDATE, status: false };
    default:
      return state;
  }
};
