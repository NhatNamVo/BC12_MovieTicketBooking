import { CHECK_USER_SAVE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, LOGOUT_USER } from "./types";

const initialState = {
  currentUser: null,
  isLogined: true,
  error: "",
  loadding: false,
};

const authUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loadding: true };
    case LOGIN_SUCESS:
      window.localStorage.clear();
      return { ...state, loadding: false, currentUser: payload, error: "" };
    case LOGIN_FAIL:
      return { ...state, loadding: false, error: payload };
    case CHECK_USER_SAVE:
        return {...state, isLogined: payload};
      case LOGOUT_USER:
        return { ...state, currentUser: null};
    default:
      return state;
  }
};

export default authUserReducer;
