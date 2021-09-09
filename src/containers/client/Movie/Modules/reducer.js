import { CHANGE_PAGE, TOTAL_MOUNT} from "./types";
const initialState = {
  siblingCount: 1,
  currentPage: 1,
  pageSize: 0,
  totalCount: 0,
  firstPageIndex: 0,
  lastPageIndex: 12,
};

const pagePanigationReducer = (state = initialState, { type, payload }) => {
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
    case TOTAL_MOUNT: {
      const listCount =  payload.totalCount;
      const pageSize = payload.pageSize;
      return {...state, totalCount: listCount, pageSize: pageSize};
    }
    default:
      return state;
  }
};

export default pagePanigationReducer;
