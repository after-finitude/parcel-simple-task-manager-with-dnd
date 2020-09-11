import { dialogReducer } from "store/dialog/reducer";
import { DialogState, DialogTypes } from "store/dialog/types";
import { openDialog, closeDialog } from "store/dialog/actions";

describe("Dialog reducer", () => {
  test("action openDialog with type create and id 1", () => {
    const input: DialogState = dialogReducer(
      undefined,
      openDialog(DialogTypes.CREATE, "1"),
    );
    const output = {
      type: DialogTypes.CREATE,
      status: true,
      currentTaskId: "1",
    };

    expect(input).toEqual(output);
  });

  test("action openDialog with type update and id 134534", () => {
    const input: DialogState = dialogReducer(
      undefined,
      openDialog(DialogTypes.UPDATE, "134534"),
    );
    const output = {
      type: DialogTypes.UPDATE,
      status: true,
      currentTaskId: "134534",
    };

    expect(input).toEqual(output);
  });

  test("action closeDialog with type create", () => {
    const input: DialogState = dialogReducer(
      undefined,
      closeDialog(DialogTypes.CREATE),
    );
    const output = {
      type: DialogTypes.CREATE,
      status: false,
      currentTaskId: "",
    };

    expect(input).toEqual(output);
  });

  test("action closeDialog with type update", () => {
    const input: DialogState = dialogReducer(
      undefined,
      closeDialog(DialogTypes.UPDATE),
    );
    const output = {
      type: DialogTypes.UPDATE,
      status: false,
      currentTaskId: "",
    };

    expect(input).toEqual(output);
  });
});
