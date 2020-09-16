import React from "react";
import { render } from "@testing-library/react";

import { Header } from "components/Header";

describe("Header", () => {
  test("check render", () => {
    const { container } = render(<Header />);

    expect(container).toBeDefined();
  });

  test("will be return markup contained within the element", () => {
    const { container } = render(<Header />);

    expect(container.innerHTML).toEqual(
      '<h3 class="MuiTypography-root MuiTypography-h3">Task Manager</h3>',
    );
  });

  test("text will be 'Task Manager'", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Task Manager")).toBeInTheDocument();
  });
});
