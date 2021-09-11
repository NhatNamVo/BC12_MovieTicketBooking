import { ADD_MOVIE_LIST, FILTER_SHOW_MOVIE_MOUNT, FILTER_SORT_MOVIE_TYPE } from "./types";

const initialState = {
  movies: [],
  sort: 0,
  show: 12,
  sortVal: "Tất cả",
};

const movieListOptionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_SHOW_MOVIE_MOUNT:
      return { ...state, show: payload };
    case FILTER_SORT_MOVIE_TYPE:
      let sortValue;
      switch (payload) {
        case 0:
          sortValue = "Tất cả";
          break;
        case 1:
          sortValue = "Phim đang chiếu";
          break;
        case 2:
          sortValue = "Phim hot";
          break;
        case 3:
          sortValue = "Phim sắp chiếu";
          break;
        default:
          sortValue = "Tất cả";
          break;
      }
      return { ...state, sort: payload, sortVal: sortValue };
    case ADD_MOVIE_LIST:
      return {...state, movies:payload};
    default:
      return state; 
  }
};
export default movieListOptionReducer;