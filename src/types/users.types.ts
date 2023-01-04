import { UserActionTypes } from "../usersStore/users.actions";
import { IMyItem } from "../types/item.types";

export interface UserState {
  user: {};
  usersList: never[];
  cart: never[];
  favourites: IMyItem[];
}

export interface UsersListAction {
  type: UserActionTypes.USERS_LIST_RECIEVED;
  payload: any[];
}
export interface PlusFavouriteAction {
  type: UserActionTypes.FAVOURITES;
  payload: { fav: IMyItem };
}
export interface MinusFavouriteAction {
  type: UserActionTypes.MINUS_FAVOURITES;
  payload: { id: number };
}
export interface UserAction {
  type: UserActionTypes.SELECTED_USER;
  payload: {};
}

export type ALLActions =
  | UsersListAction
  | PlusFavouriteAction
  | MinusFavouriteAction
  | UserAction;
