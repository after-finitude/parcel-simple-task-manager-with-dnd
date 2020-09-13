import { selectTaskById } from "store/dialog/selectors";
import { Task } from "store/tasks/types";

describe("Dialog selectors", () => {
  test("selectTaskById with id 1", () => {
    const input = selectTaskById("1").resultFunc([
      { id: "1", title: "Test1", description: "test1", closed: false },
      { id: "2", title: "Test2", description: "test2", closed: false },
    ]);
    const output: Task = {
      id: "1",
      title: "Test1",
      description: "test1",
      closed: false,
    };
    expect(input).toEqual(output);
  });
  test("selectTaskById with id 2", () => {
    const input = selectTaskById("2").resultFunc([
      { id: "1", title: "Test1", description: "test1", closed: false },
      { id: "2", title: "Test2", description: "test2", closed: false },
    ]);
    const output: Task = {
      id: "2",
      title: "Test2",
      description: "test2",
      closed: false,
    };
    expect(input).toEqual(output);
  });
});
