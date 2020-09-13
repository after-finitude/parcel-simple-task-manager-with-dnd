import { tasksReducer } from "store/tasks/reducer";
import {
  updateState,
  addTask,
  updateTask,
  closeTask,
  restoreTask,
} from "store/tasks/actions";
import { TasksState } from "store/tasks/types";

describe("Tasks reducer", () => {
  test("action updateState", () => {
    const input = tasksReducer(
      undefined,
      updateState([
        { id: "123", title: "zxczx", description: "fdg", closed: false },
        { id: "234234", title: "asdas", description: "sdfgsdfg", closed: true },
      ]),
    );
    const output: TasksState = [
      { id: "123", title: "zxczx", description: "fdg", closed: false },
      { id: "234234", title: "asdas", description: "sdfgsdfg", closed: true },
    ];

    expect(input).toEqual(output);
  });

  test("action addTask", () => {
    const input = tasksReducer(
      undefined,
      addTask("asdasd", "asfasfa", "123423"),
    );
    const output: TasksState = [
      { closed: false, description: "test1", id: "test1", title: "Test1" },
      { closed: false, description: "test2", id: "test2", title: "Test2" },
      { closed: false, description: "asfasfa", id: "123423", title: "asdasd" },
    ];

    expect(input).toEqual(output);
  });

  test("action updateTask if equal id's", () => {
    const input = tasksReducer(undefined, updateTask("test1", "cxcs", "sdfs"));
    const output: TasksState = [
      { closed: false, description: "sdfs", id: "test1", title: "cxcs" },
      { closed: false, description: "test2", id: "test2", title: "Test2" },
    ];

    expect(input).toEqual(output);
  });

  test("action updateTask if don't equal id's", () => {
    const input = tasksReducer(undefined, updateTask("adasd", "cxcs", "sdfs"));
    const output: TasksState = [
      { closed: false, description: "test1", id: "test1", title: "Test1" },
      { closed: false, description: "test2", id: "test2", title: "Test2" },
    ];

    expect(input).toEqual(output);
  });

  test("action closeTask if equal id's", () => {
    const input = tasksReducer(undefined, closeTask("test1"));
    const output: TasksState = [
      { closed: true, description: "test1", id: "test1", title: "Test1" },
      { closed: false, description: "test2", id: "test2", title: "Test2" },
    ];

    expect(input).toEqual(output);
  });

  test("action closeTask if don't equal id's", () => {
    const input = tasksReducer(undefined, closeTask("asdasd"));
    const output: TasksState = [
      { closed: false, description: "test1", id: "test1", title: "Test1" },
      { closed: false, description: "test2", id: "test2", title: "Test2" },
    ];

    expect(input).toEqual(output);
  });

  test("action restoreTask if equal id's", () => {
    const input = tasksReducer(undefined, restoreTask("test2"));
    const output: TasksState = [
      { closed: false, description: "test1", id: "test1", title: "Test1" },
      { closed: false, description: "test2", id: "test2", title: "Test2" },
    ];

    expect(input).toEqual(output);
  });

  test("action restoreTask if don't equal id's", () => {
    const input = tasksReducer(undefined, restoreTask("asdsadas"));
    const output: TasksState = [
      { closed: false, description: "test1", id: "test1", title: "Test1" },
      { closed: false, description: "test2", id: "test2", title: "Test2" },
    ];

    expect(input).toEqual(output);
  });
});
