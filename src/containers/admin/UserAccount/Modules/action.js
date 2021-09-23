import userApi from "apis/userApi";
import { CHANGE_PAGE, FETCH_ALL_USER_FAIL, FETCH_ALL_USER_REQUEST, FETCH_ALL_USER_SUCCESS } from "./types";

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