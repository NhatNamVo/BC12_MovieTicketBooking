import {
  CHECK_USER_SAVE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCESS,
} from "./types";

const initialState = {
  currentUser: null,
  userRegister: null,
  isRegister: false,
  isLogined: true,
  error: "",
  loadding: false,
};

const authUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loadding: true };
    case LOGIN_SUCESS:
      return {
        ...state,
        loadding: false,
        userRegister: null,
        isRegister: false,
        currentUser: payload,
        error: "",
      };
    case LOGIN_FAIL:
      return { ...state, loadding: false, error: payload };
    case CHECK_USER_SAVE:
      return { ...state, isLogined: payload };
    case LOGOUT_USER:
      return { ...state, currentUser: null };
    case REGISTER_REQUEST:
      return { ...state, loadding: true };
    case REGISTER_SUCESS:
      const userAccount = payload.taiKhoan;
      const userPassword = payload.matKhau;
      const newUser = {
        taiKhoan: userAccount,
        matKhau: userPassword,
      };
      return {
        ...state,
        loadding: false,
        isRegister: true,
        error: "",
        userRegister: newUser,
      };
    case REGISTER_FAIL:
      return { ...state, loadding: false, isRegister: false, error: payload };
    default:
      return state;
  }
};

export default authUserReducer;
