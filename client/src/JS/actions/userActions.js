/**********************  user login actions creator *************** */

import axios from "axios";
import {
  GET_AUTH_USER,
  GET_AUTH_USER_FAILED,
  GET_AUTH_USER_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
} from "../actionsTypes.js/userActionsTypes";

export const userLogin = (userCred) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const res = await axios.post("/user/login-user", userCred);

    localStorage.setItem("token", res.data.token);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_LOGIN_FAILED, payload: error.response.data });
  }
};

/**********************Get auth user action creator *************/

export const getAuthUser = () => async (dispatch) => {
  dispatch({ type: GET_AUTH_USER });

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  console.log(config);

  try {
    const res = await axios.get("/user/current-user", config);

    dispatch({ type: GET_AUTH_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_AUTH_USER_FAILED, payload: error.response.data });
  }
};
