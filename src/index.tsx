import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { App } from "components/App";

import { rootReducer } from "store/rootReducer";
import { PreloadedState, loadState, saveState } from "store/preloadedState";

const preloadedState: PreloadedState = loadState();

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: preloadedState,
});

store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
