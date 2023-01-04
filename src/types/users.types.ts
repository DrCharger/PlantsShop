import { UserActionTypes } from "../usersStore/users.actions";
import { IMyItem, OrderType } from "../types/item.types";

export interface UserState {
  user: {};
  usersList: never[];
  cart: never[];
  favourites: IMyItem[];
  order: OrderType[];
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
export interface OrderAction {
  type: UserActionTypes.SET_ORDER;
  payload: { order: OrderType };
}

export type ALLActions =
  | UsersListAction
  | PlusFavouriteAction
  | MinusFavouriteAction
  | UserAction
  | OrderAction;
