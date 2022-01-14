import {
  ADD_PHONE,
  ADD_PHONE_FAILED,
  ADD_PHONE_SUCCESS,
  EDIT_PHONE,
  EDIT_PHONE_FAILED,
  EDIT_PHONE_SUCCESS,
  GET_ALL_PHONES,
  GET_ALL_PHONES_FAILED,
  GET_ALL_PHONES_SUCCESS,
  GET_PHONE,
  GET_PHONE_FAILED,
  GET_PHONE_SUCCESS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../actionsTypes.js/phoneActionsTypes";
import axios from "axios";

/******** Add new phone action creator ******* */

export const addPhone = (newPhone) => async (dispatch) => {
  dispatch({ type: ADD_PHONE });

  try {
    const res = await axios.post("/phone/add-phone", newPhone);

    dispatch({ type: ADD_PHONE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_PHONE_FAILED, payload: error.response.data });
  }
};

/******************  Get alll phones action creator ********** */

export const getAllPhone = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PHONES });

  try {
    const res = await axios.get("/phone/get-phones");

    dispatch({ type: GET_ALL_PHONES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_PHONES_FAILED, payload: error.response.data });
  }
};

/******************** Get phone by id action creator ***************** */

export const getPhone = (id) => async (dispatch) => {
  dispatch({ type: GET_PHONE });

  try {
    const res = await axios.get(`/phone/get-phone/${id}`);
    dispatch({ type: GET_PHONE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_PHONE_FAILED, payload: error.response.data });
  }
};

/**************************  Edit phone action creator********************* */

export const editPhone = (id, editedPhone) => async (dispatch) => {
  dispatch({ type: EDIT_PHONE });

  try {
    const res = await axios.put(`/phone/update-phone/${id}`, editedPhone);

    dispatch({ type: EDIT_PHONE_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_PHONE_FAILED, payload: error.response.data });
  }
};
