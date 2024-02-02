import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from "./uiActionTypes";
import fetch from "node-fetch";


export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => ({ type: LOGOUT });

export const boundLogout = () => dispatch(logout());


export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

export const loginSuccess =()=> {
  return {
    type: LOGIN_SUCCESS
  }
}

export const loginFailure =()=> {
  return {
    type: LOGIN_FAILURE
  }
}

export const loginRequest = (email, password) => {
  return (dispatch) => {
    boundLogin(email, password);

    return fetch("http://localhost:3000/login-success.json")
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
}