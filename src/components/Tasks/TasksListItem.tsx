import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import RestoreIcon from "@material-ui/icons/Restore";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { openDialog } from "store/dialog/actions";
import { DialogTypes } from "store/dialog/types";
import { closeTask, restoreTask } from "store/tasks/actions";

interface ComponentProps {
  id: string;
  title: string;
  description?: string;
  closed: boolean;
}

export const TasksListItem: React.FC<ComponentProps> = memo(
  ({ id, title, description = "", closed }) => {
    const dispatch = useDispatch();

    const handleEdit = useCallback(
      () => dispatch(openDialog(DialogTypes.UPDATE, id)),
      [dispatch, id],
    );
    const handleClose = useCallback(() => dispatch(closeTask(id)), [
      dispatch,
      id,
    ]);
    const handleRestore = useCallback(() => dispatch(restoreTask(id)), [
      dispatch,
      id,
    ]);

    return (
      <ListItemWrapper closed={closed}>
        <ListItem>
          <ListItemText primary={title} secondary={description} />
          <ListItemSecondaryAction>
            <IconButton
              disabled={closed}
              onClick={handleEdit}
              edge="end"
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
            {closed ? (
              <IconButton
                onClick={handleRestore}
                edge="end"
                aria-label="restore"
              >
                <RestoreIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleClose} edge="end" aria-label="close">
                <CloseIcon />
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </ListItem>
      </ListItemWrapper>
    );
  },
);

const ListItemWrapper = styled.div<{ closed: boolean }>`
  border: 1px grey solid;
  margin-bottom: 5px;
  opacity: ${(props: { closed: boolean }) => (props.closed ? 0.5 : 1)};
`;
