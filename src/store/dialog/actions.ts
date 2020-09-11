import {
  DialogActionTypes,
  DialogTypes,
  ActionOpenDialog,
  ActionCloseDialog,
} from "store/dialog/types";

export const openDialog = (
  type: DialogTypes,
  id: string = "",
): ActionOpenDialog => ({
  type: DialogActionTypes.OPEN_DIALOG,
  payload: {
    type,
    status: true,
    currentTaskId: id,
  },
});

export const closeDialog = (type: DialogTypes): ActionCloseDialog => ({
  type: DialogActionTypes.CLOSE_DIALOG,
  payload: {
    type,
    status: false,
    currentTaskId: "",
  },
});
