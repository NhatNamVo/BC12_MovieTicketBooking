import userApi from "apis/userApi";
import { CHANGE_PAGE, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, FETCH_ALL_USER_FAIL, FETCH_ALL_USER_REQUEST, FETCH_ALL_USER_SUCCESS, POST_NEW_USER_FAIL, POST_NEW_USER_REQUEST, POST_NEW_USER_SUCCESS, PUT_USER_UPDATE_FAIL, PUT_USER_UPDATE_REQUEST, PUT_USER_UPDATE_SUCCESS } from "./types";

export const actChangePage = (changePageID) => ({
  type: CHANGE_PAGE,
  payload: changePageID,
});

export const actFetchUserRequest = () => ({
  type: FETCH_ALL_USER_REQUEST,
});

export const actFetchUserSuccess = (listUser) => ({
  type: FETCH_ALL_USER_SUCCESS,
  payload: listUser,
})

export const actFectUserFail = (error) => ({
  type: FETCH_ALL_USER_FAIL,
  payload: error,
})

// get user data from server
export const actFetchUserAccount = () => {
  return (dispatch, getState) => {
    dispatch(actFetchUserRequest());
    userApi.fetchAllUserAcount()
    .then((res)=>{
      dispatch(actFetchUserSuccess(res.data));
    })
    .catch((error)=>{
      dispatch(actFectUserFail(error))
    });
  };
};

// find user
export const actFindUserAccount = (user) => {
  return dispatch =>{
    dispatch(actFetchUserRequest());
    userApi.findUserAcount(user)
    .then(res=>{
      dispatch(actFetchUserSuccess(res.data));
    })
    .catch(error=>{
      dispatch(actFectUserFail(error))
    });
  };
};

// add new user to server

const actPostNewUserRequest = () =>({
  type: POST_NEW_USER_REQUEST,
});

const actPostNewUSerSucces = (data) => ({
  type: POST_NEW_USER_SUCCESS,
  payload: data,
});

const actPostNewUserFail = (error) => ({
  type: POST_NEW_USER_FAIL,
  payload: error,
});

export const actAddNewUserAccount = (newUser,token) => {
  return dispatch =>{
    dispatch(actPostNewUserRequest());
    userApi.postNewUserAcount(newUser,token)
    .then(res=>{
      dispatch(actPostNewUSerSucces(res.data));
    })
    .catch(err=>{
      dispatch(actPostNewUserFail(err));
    });
  };
};

// update user info

const actUpdateUserInfoRequest = () =>({
  type: PUT_USER_UPDATE_REQUEST,
});

const actUpdateUserInfoRequestSuccess = (data) => ({
  type: PUT_USER_UPDATE_SUCCESS,
  payload: data,
});

const actUpdateUserInfoFail = (error) => ({
  type: PUT_USER_UPDATE_FAIL,
  payload: error,
});

export const actUpdateUser = (user,token) => {
  return dispatch => {
    dispatch(actUpdateUserInfoRequest());
    userApi.postUpdateUser(user,token)
    .then(res=>{
      console.log(res.data);
      dispatch(actUpdateUserInfoRequestSuccess(res.data));
    })
    .catch(error=>{
      dispatch(actUpdateUserInfoFail(error));
    });
  };
};

// delete user
const actDeleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
});

const actDeleteUserSuccess = (data) => ({
  type: DELETE_USER_SUCCESS,
  payload: data,
});

const actDeleteUserFail = (error) => ({
  type: DELETE_USER_FAIL,
  payload: error,
});

export const actDeleteUser = (user, token) =>{
  return dispatch => {
    dispatch(actDeleteUserRequest());
    userApi.deleteUserAccount(user,token)
    .then(res=>{
      const data={
        note: res.data,
        user: user,
      }
      dispatch(actDeleteUserSuccess(data));
    })
    .catch(error=>{
      dispatch(actDeleteUserFail(error));
    });
  };
};