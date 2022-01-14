import {
  ADD_PHONE,
  ADD_PHONE_FAILED,
  ADD_PHONE_SUCCESS,
  GET_ALL_PHONES,
  GET_ALL_PHONES_FAILED,
  GET_ALL_PHONES_SUCCESS,
  GET_PHONE,
  GET_PHONE_FAILED,
  GET_PHONE_SUCCESS,
} from "../actionsTypes.js/phoneActionsTypes";

const initialState = {
  loading: false,
  isEdit: false,
};

const phoneReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHONE:
    case GET_ALL_PHONES:
    case GET_PHONE:
      return {
        ...state,
        loading: true,
      };

    case ADD_PHONE_SUCCESS:
    case GET_ALL_PHONES_SUCCESS:
    case GET_PHONE_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload,
      };
    case ADD_PHONE_FAILED:
    case GET_ALL_PHONES_FAILED:
    case GET_PHONE_FAILED:
      return {
        ...state,
        loading: false,
        ...payload,
      };

    default:
      return state;
  }
};

export default phoneReducer;
