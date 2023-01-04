import {
  MinusFavouriteAction,
  PlusFavouriteAction,
} from "../types/users.types";
import { Dispatch } from "redux";
import { IMyItem } from "../types/item.types";
import * as usersGateWays from "./users.gateWays";

// import { usersSelector } from "./users.selectors";

export enum UserActionTypes {
  USERS_LIST_RECIEVED = "USERS_LIST_RECIEVED",
  SELECTED_USER = "SELECTED_USER",
  FAVOURITES = "FAVOURITES",
  MINUS_FAVOURITES = "MINUS_FAVOURITES",
}

export const setUserInfo = (user: any) => {
  return {
    type: UserActionTypes.SELECTED_USER,
    payload: {
      user,
    },
  };
};

export const setFavourites = (fav: IMyItem): PlusFavouriteAction => {
  return {
    type: UserActionTypes.FAVOURITES,
    payload: {
      fav,
    },
  };
};

export const minusFavourites = (id: number): MinusFavouriteAction => {
  return {
    type: UserActionTypes.MINUS_FAVOURITES,
    payload: {
      id,
    },
  };
};

export const usersListRecieved = (usersList: any) => {
  return {
    type: UserActionTypes.USERS_LIST_RECIEVED,
    payload: {
      usersList,
    },
  };
};

export const getUsersList = (): any => {
  const thunkAction = function (dispatch: Dispatch) {
    usersGateWays
      .fetchUsersList()
      .then((userData) => dispatch(usersListRecieved(userData)));
  };
  return thunkAction;
};

export const getMyUser = (userId: string): any => {
  const thunkAction = function (dispatch: Dispatch) {
    usersGateWays.fetchUsersList().then((userData) => {
      return dispatch(
        setUserInfo(userData.find((el: any) => el.id === userId))
      );
    });
  };
  return thunkAction;
};

export const updateUsersList = (userId: string) => {
  const thunkAction = function (dispatch: Dispatch, getState: () => any) {
    const state = getState();
    const userList = state.usersList.usersList;
    const user = userList.find((user: any) => user.id === userId);
    const updatedUser = {
      ...user,
      location: state.usersList.location,
      fullname: state.usersList.user.fullname,
      number: state.usersList.user.number,
      email: state.usersList.user.email,
      Orders: state.usersList.allOrders,
      favourites: state.usersList.liked,
    };
    usersGateWays
      .updateUser(userId, updatedUser)
      .then(() => dispatch(getMyUser(userId)));
  };
  return thunkAction;
};

export const updateAdminRaiting = () => {
  const thunkAction = function (dispatch: any, getState: () => any) {
    const state = getState();
    const userList = state.usersList.usersList;
    const admin = userList.find((user: any) => user.id === "1");
    const updatedUser = {
      ...admin,
      isItGood: admin.isItGood.concat(state.usersList.rait),
    };
    usersGateWays.updateUser("1", updatedUser);
  };
  return thunkAction;
};

export const createUsersList = (user: any) => {
  const thunkAction = function (dispatch: Dispatch) {
    if (user === "") {
      return null;
    }
    const newUser = {
      fullname: user.fullname,
      password: user.password,
      email: user.email,
      number: user.number,
      location: {},
    };
    usersGateWays.createUser(newUser).then(() => dispatch(getUsersList()));
  };
  return thunkAction;
};