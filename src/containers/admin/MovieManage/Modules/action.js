import { CHANGE_MOVIE_ADMIN_PAGE, SEARCH_MOVIE_ADMIN, TOTAL_COUNT_SETTING } from "./types";

export const actChangePage = (changePageID) => ({
  type: CHANGE_MOVIE_ADMIN_PAGE,
  payload: changePageID,
});

// setting totalCount Pagination

const actTotalCount = (totalCount) => ({
  type: TOTAL_COUNT_SETTING,
  payload: totalCount,
});
export const actSettingTotalCount = (search) => {
  return (dispatch, getState) => {
    const movieList = getState().movieReducer.listMovie;
    const foundSearch = getState().MovieAdminManager.foundMovie;
    let totalCount;
    if(search === ''){
      totalCount = movieList.length;
    }
    else{
      totalCount = foundSearch.length;
    }
    dispatch(actTotalCount(totalCount));
  };
};

// searchMovie

export const actSearchMovie = (movie) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_MOVIE_ADMIN,
      payload: movie,
    });
  };
};
