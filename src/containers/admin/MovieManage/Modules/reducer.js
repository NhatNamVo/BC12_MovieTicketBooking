const initialState = {
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
    case CHANGE_PAGE: {
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

    default:
      return state;
  }
};
export default MovieAdminManager;
