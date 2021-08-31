import { CHANGE_PAGE, FETCH_ALL_USER_FAIL, FETCH_ALL_USER_REQUEST, FETCH_ALL_USER_SUCCESS} from "./types";
const initialState = {
  userAccountData: [],
  siblingCount: 1,
  currentPage: 1,
  pageSize: 2,
  totalCount: 0,
  firstPageIndex: 0,
  lastPageIndex: 9,
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
      return {...state};
    }
    case FETCH_ALL_USER_SUCCESS: {
      const userList =  payload;
      console.log(userList);
      const listCount =  userList.length;
      return {...state, totalCount: listCount, userAccountData:userList};
    }
    case FETCH_ALL_USER_FAIL: {
      return {...state};
    }
    default:
      return state;
  }
};

export default UserAccountReducer;
