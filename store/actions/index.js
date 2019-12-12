import axios from "axios";

export function getUsers() {
  // we don't use async/await because of 'redux-promise' middleware
  const req = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => res.data);

  return {
    type: "GET_USERS",
    payload: req
  };
}
