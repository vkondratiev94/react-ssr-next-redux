import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import reducers from "./reducers";

export function initStore() {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
  );
}
