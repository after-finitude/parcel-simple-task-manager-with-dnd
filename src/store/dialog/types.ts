export interface DialogState {
  type: string;
  status: boolean;
  currentTaskId: string;
}

export enum DialogActionTypes {
  OPEN_DIALOG = "OPEN_DIALOG",
  CLOSE_DIALOG = "CLOSE_DIALOG",
}

export enum DialogTypes {
  CREATE = "create",
  UPDATE = "update",
}

export interface DialogBaseAction {
  type: DialogActionTypes;
}

export interface ActionOpenDialog extends DialogBaseAction {
  type: DialogActionTypes.OPEN_DIALOG;
  payload: DialogState;
}

export interface ActionCloseDialog extends DialogBaseAction {
  type: DialogActionTypes.CLOSE_DIALOG;
  payload: DialogState;
}

export type DialogActions = ActionOpenDialog | ActionCloseDialog;
