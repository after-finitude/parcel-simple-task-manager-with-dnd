import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { styled } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import { openDialog } from "store/dialog/actions";
import { DialogTypes } from "store/dialog/types";

export const TasksAddButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddButton = useCallback(
    () => dispatch(openDialog(DialogTypes.CREATE)),
    [dispatch],
  );

  return <AddButton onClick={handleAddButton}>Add task</AddButton>;
};

const AddButton = styled(props => (
  <Button startIcon={<AddIcon />} {...props} />
))({
  width: "100%",
});
