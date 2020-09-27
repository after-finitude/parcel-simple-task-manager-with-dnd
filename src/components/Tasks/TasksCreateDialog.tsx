import React, { useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { closeDialog } from "store/dialog/actions";
import { DialogTypes } from "store/dialog/types";
import { thunkAddTask } from "store/tasks/thunks";

type FormData = {
  title: string;
  description: string;
};

interface Props {
  status?: boolean;
}

export const TasksCreateDialog: React.FC<Props> = memo(({ status = false }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<FormData>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSubmit = useCallback(
    handleSubmit(({ title, description }) => {
      dispatch(thunkAddTask(title, description));
    }),
    [dispatch, thunkAddTask],
  );
  const handleClose = useCallback(
    () => dispatch(closeDialog(DialogTypes.CREATE)),
    [dispatch],
  );

  return (
    <Dialog
      onClose={handleClose}
      open={status}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create task</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            inputRef={register}
          />
          <TextField
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
            Add task
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
});
