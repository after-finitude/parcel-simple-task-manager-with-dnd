import React from "react";
import styled from "styled-components";

import { Header } from "components/Header";
import { Main } from "components/Main";

export const App: React.FC = () => {
  return (
    <BaseLayout>
      <Header />
      <Main />
    </BaseLayout>
  );
};

const BaseLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
