
import {
  FETCH_ALL_MOVIE_FAIL,
  FETCH_ALL_MOVIE_REQUEST,
  FETCH_ALL_MOVIE_SUCCESS,
  FETCH_MOVIE_ALL_BANNER_FAIL,
  FETCH_MOVIE_ALL_BANNER_SUCCESS,
  CHANGE_CURRENT_MOVIE_NEW,
  GET_TRAILER_MOVIE,
  ADD_NEW_MOVIE_REQUEST,
  ADD_NEW_MOVIE_SUCCESS,
  ADD_NEW_MOVIE_FAIL,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_REQUEST,
  UPDATE_MOVIE_FAIL,
} from "./types";

const initialState = {
  listMovie: [],
  defaultCarousel: {
    status: "",
    filmInfo: {},
  },
  carousel: [
    {
      status: "active",
      filmInfo: {},
    },
  ],
  showingMovie: [],
  hotMovie: [],
  newMovie: [],
  loading: false,
  loadingModal: false,
  currentMovienew: [],
  currentMovieIdx: 0,
  currentTrailerMovie: null,
  note: '',
  error: "",
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_MOVIE_REQUEST:
      return { ...state, loading: true };
    case FETCH_MOVIE_ALL_BANNER_SUCCESS:
      const { carousel, defaultCarousel } = state;
      for (let i = 0; i < payload.length; i++) {
        if (i === 0) {
          carousel[0].filmInfo = payload[0];
        } else {
          defaultCarousel.filmInfo = payload[i];
          const carouselItem = { ...defaultCarousel };
          carousel.push(carouselItem);
        }
      }
      return { ...state, carousel: carousel };
    case FETCH_MOVIE_ALL_BANNER_FAIL:
      return { ...state, error: payload };
    case FETCH_ALL_MOVIE_SUCCESS:

      const hotMovie = payload.filter((movie) => {
        return movie.danhGia === 10;
      });
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      const currentYearMovie = payload.filter(movie=>{
        const movieYear = new Date(movie.ngayKhoiChieu).getFullYear();
        return movieYear === currentYear;
      });
      
      const newMovie = currentYearMovie.filter((movie) => {
        const movieMonth = new Date(movie.ngayKhoiChieu).getMonth();
        return (currentMonth-1 <= movieMonth && movieMonth === currentMonth);
      });
      const currentMovienew = payload[state.currentMovieIdx];
      return {
        ...state,
        listMovie: payload,
        loading: false,
        newMovie: newMovie,
        hotMovie: hotMovie,
        showingMovie: payload,
        currentMovienew: currentMovienew,
      };
    case FETCH_ALL_MOVIE_FAIL:
      return { ...state, error: payload, loading: false };
    case CHANGE_CURRENT_MOVIE_NEW:
      const Idx = payload;
      const currentMovie = state.newMovie[Idx];
      return {
        ...state,
        currentMovieIdx: Idx,
        currentMovienew: currentMovie,
      };
    case GET_TRAILER_MOVIE:
      const currentTrailerMovie = state.listMovie.find((movie, idx) => {
        return movie.maPhim == payload;
      }).trailer;
      return { ...state, currentTrailerMovie: currentTrailerMovie };
    case ADD_NEW_MOVIE_REQUEST:
      return { ...state, loadingModal: true, note: ''};
    case ADD_NEW_MOVIE_SUCCESS:
      let moviedatas = state.listMovie;
      moviedatas.push(payload);
      const imageLink = moviedatas[moviedatas.length-1].hinhAnh;
      moviedatas[moviedatas.length-1].hinhAnh = 'http://movie0706.cybersoft.edu.vn/hinhanh/' + imageLink;
      return { ...state, listMovie: moviedatas, loadingModal: false, note: 'Thêm thành công'};
    case ADD_NEW_MOVIE_FAIL:
      return { ...state, note: payload, loadingModal: false };
    case DELETE_MOVIE_REQUEST:
      return {...state, loadingModal: true, note: ''};
    case DELETE_MOVIE_SUCCESS:
      const {listMovie} = state;
      const findMovieIdx = listMovie.findIndex(movie=>{
        return movie.maPhim === payload.movieCode;
      });
      let movieList = state.listMovie;
      movieList.splice(findMovieIdx, 1);
      return {...state, loadingModal: false, listMovie: movieList, note: payload.note};
    case DELETE_MOVIE_FAIL:
      return {...state, loadingModal: false, note: payload};
    case UPDATE_MOVIE_REQUEST:
      return {...state, loadingModal: true, note: ''};
    case UPDATE_MOVIE_SUCCESS:
      const findIdx = state.listMovie.findIndex(movie=>{
        return movie.maPhim === payload.maPhim;
      });
      let movieDatas = state.listMovie;
      for(let mainKey in movieDatas[findIdx]){
        for(let key in payload){
          if(key === mainKey){
            if(key === 'hinhAnh'){
              if(payload[key] !== null){
                const findStIdx = payload.hinhAnh.contentType.indexOf('/');
                let imgType = payload.hinhAnh.contentType.slice(findStIdx+1);
                if(imgType === 'jpeg'){
                  imgType = 'jpg';
                }
                movieDatas[findIdx][mainKey] = 'http://movie0706.cybersoft.edu.vn/hinhanh/' + payload.biDanh + '_' + payload.maNhom.toLocaleLowerCase() + '.' + imgType;
              };
              break;
            }
            else if( key === 'ngayKhoiChieu'){
              const date = payload.ngayKhoiChieu.split("/").reverse().join("-");
              movieDatas[findIdx][mainKey] = date;
              break;
            }
            else{
              movieDatas[findIdx][mainKey] = payload[key];
              break;
            }
          }
        }
      }
      return {...state, loadingModal: false, listMovie: movieDatas, note: 'Cập nhật thành công'};
    case UPDATE_MOVIE_FAIL:
      return {...state, loadingModal: false, note: payload};
    default:
      return { ...state };
  }
};

export default movieReducer;
