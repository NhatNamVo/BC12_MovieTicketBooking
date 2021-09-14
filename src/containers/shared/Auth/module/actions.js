import userApi from "apis/userApi";

const {
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  CHECK_USER_SAVE,
  LOGOUT_USER,
} = require("./types");

const actLoginRequest = () => ({
  type: LOGIN_REQUEST,
});

const actLoginSuccess = (user) => ({
  type: LOGIN_SUCESS,
  payload: user,
});

const actLoginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const actLogin = (user, history, isLogined) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    userApi
      .loginApi(user)
      .then((res) => {
        dispatch(actLoginSuccess(res.data.content));
        if (isLogined) {
          localStorage.setItem("userLogin", JSON.stringify(res.data.content));
        }
        history.goBack();
      })
      .catch((error) => {
        dispatch(
          actLoginFail("Tài khoản hoặc mật khẩu không đúng. Xin hãy thử lại!")
        );
      });
  };
};

export const actSaveUserCheck = (isCheck) => {
  return (dispatch) => {
    dispatch({ type: CHECK_USER_SAVE, payload: isCheck });
  };
};

export const actUploadUserLogin = user => {
  return dispatch => {
    dispatch(actLoginSuccess(user));
    localStorage.setItem("userLogin", JSON.stringify(user));
  }
}

export const actLogOutUser = () => {
  return dispatch => {
    localStorage.removeItem("userLogin");
    dispatch({
      type: LOGOUT_USER,
    });
  }
}