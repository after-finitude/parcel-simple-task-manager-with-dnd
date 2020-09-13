import { openDialog, closeDialog } from "store/dialog/actions";
import {
  DialogTypes,
  DialogActionTypes,
  ActionOpenDialog,
  ActionCloseDialog,
} from "store/dialog/types";
describe("Dialog actions", () => {
  test("openDialog with type create", () => {
    const input: ActionOpenDialog = openDialog(DialogTypes.CREATE, "1234234");
    const output: ActionOpenDialog = {
      payload: {
        currentTaskId: "1234234",
        status: true,
        type: "create",
      },
      type: DialogActionTypes.OPEN_DIALOG,
    };

    expect(input).toEqual(output);
  });

  test("closeDialog with type create", () => {
    const input = closeDialog(DialogTypes.CREATE);
    const output: ActionCloseDialog = {
      payload: {
        currentTaskId: "",
        status: false,
        type: "create",
      },
      type: DialogActionTypes.CLOSE_DIALOG,
    };

    expect(input).toEqual(output);
  });

  test("openDialog with type update", () => {
    const input = openDialog(DialogTypes.UPDATE, "32425");
    const output: ActionOpenDialog = {
      payload: {
        currentTaskId: "32425",
        status: true,
        type: "update",
      },
      type: DialogActionTypes.OPEN_DIALOG,
    };

    expect(input).toEqual(output);
  });

  test("closeDialog with type update", () => {
    const input = closeDialog(DialogTypes.UPDATE);
    const output: ActionCloseDialog = {
      payload: {
        currentTaskId: "",
        status: false,
        type: "update",
      },
      type: DialogActionTypes.CLOSE_DIALOG,
    };

    expect(input).toEqual(output);
  });
});
