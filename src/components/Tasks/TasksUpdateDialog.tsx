import React, { useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { RootState } from "store/rootReducer";
import { DialogTypes } from "store/dialog/types";
import { closeDialog } from "store/dialog/actions";
import { selectTaskById } from "store/dialog/selectors";
import { thunkUpdateTask } from "store/tasks/thunks";
import { Task } from "store/tasks/types";

type FormData = {
  title: string;
  description: string;
};

interface Props {
  status: boolean;
  currentTaskId: string;
}

export const TasksUpdateDialog: React.FC<Props> = memo(
  ({ status, currentTaskId }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<FormData>();
    const currentTask = useSelector<RootState, Task | undefined>(
      selectTaskById(currentTaskId)
    );

    const onSubmit = useCallback(
      handleSubmit(({ title, description }) => {
        dispatch(thunkUpdateTask(title, description));
      }),
      [dispatch, thunkUpdateTask]
    );
    const handleClose = useCallback(
      () => dispatch(closeDialog(DialogTypes.UPDATE)),
      [dispatch]
    );

    return (
      <Dialog
        onClose={handleClose}
        open={status}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update task</DialogTitle>
        <form onSubmit={onSubmit}>
          <DialogContent>
            <TextField
              defaultValue={currentTask?.title ?? ""}
              autoFocus
              margin="dense"
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              inputRef={register}
            />
            <TextField
              defaultValue={currentTask?.description ?? ""}
              margin="dense"
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              inputRef={register}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Update task
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
);
