import * as usersGateWays from "./users.gateWays";
// import { usersSelector } from "./users.selectors";

export const USERS_LIST_RECIEVED = "USERS_LIST_RECIEVED";
export const SELECTED_USER = "SELECTED_USER";

export const setUserInfo = (user) => {
  return {
    type: SELECTED_USER,
    payload: {
      user,
    },
  };
};

export const usersListRecieved = (usersList) => {
  return {
    type: USERS_LIST_RECIEVED,
    payload: {
      usersList,
    },
  };
};

export const getUsersList = () => {
  const thunkAction = function (dispatch) {
    usersGateWays
      .fetchUsersList()
      .then((userData) => dispatch(usersListRecieved(userData)));
  };
  return thunkAction;
};

export const getMyUser = (userId) => {
  const thunkAction = function (dispatch) {
    usersGateWays.fetchUsersList().then((userData) => {
      return dispatch(setUserInfo(userData.find((el) => el.id === userId)));
    });
  };
  return thunkAction;
};

export const updateUsersList = (userId) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const userList = state.usersList.usersList;
    const user = userList.find((user) => user.id === userId);
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
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const userList = state.usersList.usersList;
    const admin = userList.find((user) => user.id === "1");
    const updatedUser = {
      ...admin,
      isItGood: admin.isItGood.concat(state.usersList.rait),
    };
    usersGateWays.updateUser("1", updatedUser);
  };
  return thunkAction;
};

export const createUsersList = (user) => {
  const thunkAction = function (dispatch) {
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
