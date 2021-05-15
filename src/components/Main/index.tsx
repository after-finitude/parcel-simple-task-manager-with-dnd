import React from "react";
import styled from "styled-components";

import { TasksList } from "components/Tasks/TasksList";
import { TasksAddButton } from "components/Tasks/TasksAddButton";
import { TasksDialog } from "components/Tasks/TasksDialog";

export const Main: React.FC = () => {
  return (
    <MainLayout>
      <TasksList />
      <TasksAddButton />
      <TasksDialog />
    </MainLayout>
  );
};

const MainLayout = styled.div`
  width: 25%;
`;
