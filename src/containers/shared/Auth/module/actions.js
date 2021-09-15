import userApi from "apis/userApi";

const {
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  LOGIN_FAIL,
  CHECK_USER_SAVE,
  LOGOUT_USER,
  REGISTER_REQUEST,
  REGISTER_SUCESS,
  REGISTER_FAIL,
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

export const actLogin = (user, history, isLogined, isRegister) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    userApi
      .loginApi(user)
      .then((res) => {
        dispatch(actLoginSuccess(res.data.content));
        if (isLogined) {
          localStorage.setItem("userLogin", JSON.stringify(res.data.content));
        }
        if(isRegister){
          history.push('/');
        }
        else{
          history.goBack();
        }
        
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

export const actUploadUserLogin = (user) => {
  return (dispatch) => {
    dispatch(actLoginSuccess(user));
    localStorage.setItem("userLogin", JSON.stringify(user));
  };
};

export const actLogOutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("userLogin");
    dispatch({
      type: LOGOUT_USER,
    });
  };
};

// Register

const actRegisterRequest = () => ({
  type: REGISTER_REQUEST,
});
const actRegisterSuccess = (newUser) => ({
  type: REGISTER_SUCESS,
  payload: newUser,
});
const actRegisterFail = (error) => ({
  type: REGISTER_FAIL,
  payload: error,
});

export const actRegister = (newUser,history) => {
  return (dispatch) => {
    dispatch(actRegisterRequest());
    userApi
      .registerApi(newUser)
      .then((res) => {
        console.log(res.data.content);
        dispatch(actRegisterSuccess(res.data.content));
        history.push('/login');
      })
      .catch((err) => {
        dispatch(
          actRegisterFail("Đăng ký tài khoản không thành công. Hãy thử lại với một tên tài khoản khác")
        );
      });
  };
};
