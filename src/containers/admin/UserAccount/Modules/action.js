import movieApi from "apis/movieApi";
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
    movieApi.fetchAllUserAcount()
    .then((res)=>{
      dispatch(actFetchUserSuccess(res.data.content));
    })
    .catch((error)=>{
      dispatch(actFectUserFail(error))
    });
  };
};