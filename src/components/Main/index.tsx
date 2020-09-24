import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";

import { RootState } from "store/rootReducer";
import { DialogState, DialogTypes } from "store/dialog/types";

import { TasksList } from "components/Tasks/TasksList";
import { TasksAddButton } from "components/Tasks/TasksAddButton";
import { TasksCreateDialog } from "components/Tasks/TasksCreateDialog";
import { TasksUpdateDialog } from "components/Tasks/TasksUpdateDialog";

export const Main: React.FC = () => {
  const dialog = useSelector<RootState, DialogState>(
    state => state.dialog,
    shallowEqual,
  );

  return (
    <MainLayout>
      <TasksList />
      <TasksAddButton />
      {dialog.type === DialogTypes.CREATE ? (
        <TasksCreateDialog status={dialog.status} />
      ) : (
        <TasksUpdateDialog
          status={dialog.status}
          currentTaskId={dialog.currentTaskId}
        />
      )}
    </MainLayout>
  );
};

const MainLayout = styled.div`
  width: 25%;
`;
