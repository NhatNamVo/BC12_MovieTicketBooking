import {
  FETCH_MOVIE_DETAIL_FAIL,
  FETCH_MOVIE_DETAIL_REQUEST,
  FETCH_MOVIE_DETAIL_SUCCESS,
} from './movieDetailType';

const initialState = {
  movieDetail: null,
  loading: false,
  error: '',
};

const movieDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_DETAIL_REQUEST:
      return { ...state, loading: true };

    case FETCH_MOVIE_DETAIL_SUCCESS:
      let movieDetailUpdate = { ...state.movieDetail };


      const updateTinhTrang = {
        ...payload,
        tinhTrang: "Đang chiếu",
      }
      const ngayChieu = new Date(updateTinhTrang.ngayKhoiChieu);
  
      const today = new Date();

      if (ngayChieu.getFullYear() === today.getFullYear()) {
        if (ngayChieu.getMonth() < today.getMonth()) {
          movieDetailUpdate = { ...updateTinhTrang }
        } else if (ngayChieu.getMonth() === today.getMonth()) {
          if (ngayChieu.getDate() <= today.getDate()) {
            movieDetailUpdate = { ...updateTinhTrang }
          }
        } else {
          movieDetailUpdate = { ...updateTinhTrang, tinhTrang: "Sắp chiếu" }

        }
      } else if (ngayChieu.getFullYear() < today.getFullYear()) {
        movieDetailUpdate = { ...updateTinhTrang }
      }else{
        movieDetailUpdate = { ...updateTinhTrang, tinhTrang: "Sắp chiếu" }
      }

      return { ...state, movieDetail: movieDetailUpdate, loading: false };

    case FETCH_MOVIE_DETAIL_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export default movieDetailReducer;
