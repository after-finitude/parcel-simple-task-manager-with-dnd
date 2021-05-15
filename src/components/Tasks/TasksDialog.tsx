import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { TasksCreateDialog } from "components/Tasks/TasksCreateDialog";
import { TasksUpdateDialog } from "components/Tasks/TasksUpdateDialog";

import { RootState } from "store/rootReducer";
import { DialogState, DialogTypes } from "store/dialog/types";

export const TasksDialog: React.FC = () => {
  const dialog = useSelector<RootState, DialogState>(
    state => state.dialog,
    shallowEqual,
  );

  if (dialog.type === DialogTypes.CREATE) {
    return <TasksCreateDialog status={dialog.status} />;
  }

  return (
    <TasksUpdateDialog
      status={dialog.status}
      currentTaskId={dialog.currentTaskId}
    />
  );
};
