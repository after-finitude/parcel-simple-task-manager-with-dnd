import configureStore from "redux-mock-store";

const store = configureStore();

export const mockStore = store({
  tasks: [
    { id: "test1", title: "Test1", description: "test1", closed: false },
    { id: "test2", title: "Test2", description: "test2", closed: false },
  ],
  dialog: { type: "", status: false, currentTaskId: "" },
});
