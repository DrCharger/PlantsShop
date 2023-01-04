import { UserActionTypes } from "./users.actions";
import { UserState, ALLActions } from "../types/users.types";

const initialState: UserState = {
  user: {},
  usersList: [],
  cart: [],
  favourites: [],
  order: [],
};

const usersReducer = (state = initialState, action: ALLActions): UserState => {
  switch (action.type) {
    // case UserActionTypes.USERS_LIST_RECIEVED:
    //   return {
    //     ...state,
    //     usersList: action.payload.usersList,
    //   };
    // case UserActionTypes.SELECTED_USER:
    //   return {
    //     ...state,
    //     user: action.payload.user,
    //   };
    case UserActionTypes.SET_ORDER:
      return {
        ...state,
        order: state.order.concat(action.payload.order),
      };
    case UserActionTypes.MINUS_ORDER:
      return {
        ...state,
        order: state.order.filter((item) => item.id !== action.payload.id),
      };
    case UserActionTypes.FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.concat(action.payload.fav),
      };
    case UserActionTypes.MINUS_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default usersReducer;
