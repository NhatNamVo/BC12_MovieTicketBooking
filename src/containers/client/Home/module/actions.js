import movieApi from "apis/movieApi";
import {
  FETCH_ALL_MOVIE_FAIL,
  FETCH_ALL_MOVIE_REQUEST,
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_MOVIE_ALL_BANNER_SUCCESS,
  FETCH_MOVIE_ALL_BANNER_FAIL,
  CHANGE_CURRENT_MOVIE_NEW,
  GET_TRAILER_MOVIE,
  ADD_NEW_MOVIE_REQUEST,
  ADD_NEW_MOVIE_SUCCESS,
  ADD_NEW_MOVIE_FAIL,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAIL,
} from "./types";

const actFetchAllMovieRequest = () => ({
  type: FETCH_ALL_MOVIE_REQUEST,
});

const actFetchAllMovieSuccess = (listMovie) => ({
  type: FETCH_ALL_MOVIE_SUCCESS,
  payload: listMovie,
});

const actFetchAllMovieFail = (error) => ({
  type: FETCH_ALL_MOVIE_FAIL,
  payload: error,
});

const actFetchAllMovieBannersuccess = (listBanner) => ({
  type: FETCH_MOVIE_ALL_BANNER_SUCCESS,
  payload: listBanner,
});
const actFetchAllMovieBannerfail = (listBanner) => ({
  type: FETCH_MOVIE_ALL_BANNER_FAIL,
  payload: listBanner,
});

export const actFetchAllMovie = () => {
  return (dispatch, getState) => {
    dispatch(actFetchAllMovieRequest());
    movieApi
      .fetMovieBannerApi()
      .then((res) => {
        dispatch(actFetchAllMovieBannersuccess(res.data.content));
        movieApi
          .fechAllMovieApi()
          .then((res) => {
            dispatch(actFetchAllMovieSuccess(res.data));
          })
          .catch((err) => {
            dispatch(actFetchAllMovieFail(err));
          });
      })
      .catch((error) => {
        dispatch(actFetchAllMovieBannerfail(error));
      });
  };
};

const actChangeCurrentMovie = (idx) => ({
  type: CHANGE_CURRENT_MOVIE_NEW,
  payload: idx,
});
export const actChangeCurrentMovieNew = (idx) => {
  return (dispatch) => {
    dispatch(actChangeCurrentMovie(idx));
  };
};
export const actGetTrailerMovie = (MovieId) => {
  return (dispatch) => {
    dispatch({
      type: GET_TRAILER_MOVIE,
      payload: MovieId,
    });
  };
};

// add movie
const actAddNewMovieRequest = () => ({
  type: ADD_NEW_MOVIE_REQUEST,
});

const actAddNewMovieSuccess = (newMovie) => ({
  type: ADD_NEW_MOVIE_SUCCESS,
  payload: newMovie,
});

const actAddNewMovieFail = (error) => ({
  type: ADD_NEW_MOVIE_FAIL,
  payload: error,
});

export const actAddNewMovie = (newMovie) => {
  return dispatch => {
    dispatch(actAddNewMovieRequest());
    movieApi.postMovieApi(newMovie)
    .then(res=>{
      dispatch(actAddNewMovieSuccess(res.data));
    })
    .catch(error=> {
      dispatch(actAddNewMovieFail('Thêm phim thất bại'));
    });
  };
};
// update movie

const actUpdateRequest = () => ({
  type: UPDATE_MOVIE_REQUEST
});

const actUpdateSuccess = (data) => ({
  type: UPDATE_MOVIE_SUCCESS,
  payload: data,
});

const actUpdateFail = (error) => ({
  type: UPDATE_MOVIE_FAIL,
  payload: error
});

export const actUpdateMovie = (movieUpdate,token) => {
  return dispatch => {
    dispatch(actUpdateRequest());
    movieApi.postMovieUpdate(movieUpdate, token)
    .then(res=>{
      dispatch(actUpdateSuccess(res.data));
    })
    .catch(error=>{
      dispatch(actUpdateFail('Cập nhật thất bại'))
    })
  }
}

// delete movie

const actDeleteMovieRequest = () =>({
  type: DELETE_MOVIE_REQUEST,
});
const actDeleteMovieSuccess = (movieCode) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: movieCode,
});
const actDeleteMovieFail = (error) => ({
  type: DELETE_MOVIE_FAIL,
  payload: error,
});

export const actDeleteMovie = (movieCode,token) => {
  return dispatch => {
    dispatch(actDeleteMovieRequest());
    movieApi.deleteMovieApi(movieCode,token)
    .then(res=>{
      const data = {
        note: res.data,
        movieCode: movieCode,
      }
      dispatch(actDeleteMovieSuccess(data));
    })
    .catch(error=>{
      dispatch(actDeleteMovieFail('Không xóa được'));
      movieApi
      .fetMovieBannerApi()
      .then((res) => {
        dispatch(actFetchAllMovieBannersuccess(res.data.content));
        movieApi
          .fechAllMovieApi()
          .then((res) => {
            dispatch(actFetchAllMovieSuccess(res.data));
          })
          .catch((err) => {
            dispatch(actFetchAllMovieFail(err));
          });
      })
      .catch((error) => {
        dispatch(actFetchAllMovieBannerfail(error));
      });
    });
  };
};