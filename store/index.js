import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import reducers from "./reducers";

const exampleInitialState = {
  users: [
    {
      name: "John",
      lastname: "Doe"
    }
  ]
};

export function initStore(initialState = exampleInitialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
  );
}
