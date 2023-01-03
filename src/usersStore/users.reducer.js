import { USERS_LIST_RECIEVED, SELECTED_USER } from "./users.actions";

const initialState = {
  user: {},
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_RECIEVED:
      return {
        ...state,
        usersList: action.payload.usersList,
      };
    case SELECTED_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default usersReducer;
