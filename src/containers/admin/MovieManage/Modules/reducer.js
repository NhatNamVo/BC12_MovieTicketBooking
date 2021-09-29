import {CHANGE_MOVIE_ADMIN_PAGE, SEARCH_MOVIE_ADMIN, TOTAL_COUNT_SETTING } from "./types";

const initialState = {
  foundMovie: [],
  siblingCount: 1,
  currentPage: 1,
  pageSize: 10,
  totalCount: 0,
  firstPageIndex: 0,
  lastPageIndex: 0,
  loadingModal: false,
  note: "",
};

const MovieAdminManager = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_MOVIE_ADMIN_PAGE: {
      const currentPage = parseInt(payload);
      const firstIdx = (currentPage - 1) * state.pageSize;
      const lastIdx = firstIdx + state.pageSize;
      return {
        ...state,
        currentPage: currentPage,
        firstPageIndex: firstIdx,
        lastPageIndex: lastIdx,
      };
    }
    case TOTAL_COUNT_SETTING: {
      return {...state, totalCount: payload};
    }
    case SEARCH_MOVIE_ADMIN: {
      const totalCount = payload.length;
      return {...state, totalCount: totalCount, foundMovie: payload};
    }
    default:
      return state;
  }
};
export default MovieAdminManager;
