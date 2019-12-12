export default (state = null, action) => {
  switch (type) {
    case "GET_USERS":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
