import movieApi from 'apis/movieApi';
import { FETCH_THEATER_FAIL, FETCH_THEATER_REQUEST, FETCH_THEATER_SUCCESS } from './theaterType';


const actFetchTheaterRequest = () => ({
  type: FETCH_THEATER_REQUEST,
});

const actFetchTheaterSuccess = theater => ({
  type: FETCH_THEATER_SUCCESS,
  payload: theater,
});

const actFetchTheaterFail = error => ({
  type: FETCH_THEATER_FAIL,
  payload: error,
});

export const actFetchTheater = (maHeThongRap) => {
  return async dispatch => {
    dispatch(actFetchTheaterRequest());
    try {
      const { data } = await movieApi.fetchMovieTheaterApi(maHeThongRap);
      console.log(data);
      dispatch(actFetchTheaterSuccess(data));
    } catch (error) {
      dispatch(actFetchTheaterFail(error));
    }
  };
};
