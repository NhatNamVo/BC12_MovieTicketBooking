import movieApi from "apis/movieApi";
import {
  FETCH_ALL_MOVIE_FAIL,
  FETCH_ALL_MOVIE_REQUEST,
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_MOVIE_ALL_BANNER_SUCCESS,
  FETCH_MOVIE_ALL_BANNER_FAIL,
  CHANGE_CURRENT_MOVIE_NEW,
  GET_TRAILER_MOVIE,
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
      })
      .catch((error) => {
        dispatch(actFetchAllMovieBannerfail(error));
      });
    movieApi
      .fechAllMovieApi()
      .then((res) => {
        dispatch(actFetchAllMovieSuccess(res.data.content));
      })
      .catch((err) => {
        dispatch(actFetchAllMovieFail(err));
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
export const actGetTrailerMovie = MovieId => {
  return dispatch => {
    dispatch({
      type: GET_TRAILER_MOVIE,
      payload: MovieId,
    });
  };
};