import { CHANGE_PAGE, FETCH_ALL_USER_FAIL, FETCH_ALL_USER_REQUEST, FETCH_ALL_USER_SUCCESS} from "./types";
const initialState = {
  userAccountData: [],
  siblingCount: 1,
  currentPage: 1,
  pageSize: 9,
  totalCount: 0,
  firstPageIndex: 0,
  lastPageIndex: 9,
  loadding: false,
};

const UserAccountReducer = (state = initialState, { type, payload }) => {
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
    case FETCH_ALL_USER_REQUEST: {
      return {...state,loadding: true};
    }
    case FETCH_ALL_USER_SUCCESS: {
      const userList =  payload;
      const listCount =  userList.length;
      return {...state, totalCount: listCount, userAccountData:userList, loadding: false};
    }
    case FETCH_ALL_USER_FAIL: {
      return {...state, loadding: false};
    }
    default:
      return state;
  }
};

export default UserAccountReducer;
