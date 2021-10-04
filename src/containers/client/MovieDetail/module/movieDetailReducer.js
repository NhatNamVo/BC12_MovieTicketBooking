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
      console.log(updateTinhTrang);
      const ngayChieu = new Date(updateTinhTrang.ngayKhoiChieu);
      // const ngayChieu =ngayChieufull.getDate()+'/'+(ngayChieufull.getMonth()+1)+'/'+ngayChieufull.getFullYear();
      const today = new Date();
      const ngayHienTai = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      
      console.log(ngayHienTai);
      console.log(ngayChieu);
      if (ngayChieu.getTime()>= new Date(ngayHienTai).getTime() ) {
        
        movieDetailUpdate={...updateTinhTrang}
      } else {
        movieDetailUpdate={...updateTinhTrang,tinhTrang: "Sắp chiếu"}
      }

      return { ...state, movieDetail: movieDetailUpdate, loading: false };

    case FETCH_MOVIE_DETAIL_FAIL:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export default movieDetailReducer;
