import {
  CHANGE_PAGE,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_ALL_USER_FAIL,
  FETCH_ALL_USER_REQUEST,
  FETCH_ALL_USER_SUCCESS,
  POST_NEW_USER_FAIL,
  POST_NEW_USER_REQUEST,
  POST_NEW_USER_SUCCESS,
  PUT_USER_UPDATE_FAIL,
  PUT_USER_UPDATE_REQUEST,
  PUT_USER_UPDATE_SUCCESS,
} from "./types";
const initialState = {
  userAccountData: [],
  siblingCount: 1,
  currentPage: 1,
  pageSize: 10,
  totalCount: 0,
  firstPageIndex: 0,
  lastPageIndex: 0,
  loadding: false,
  loadingModal: false,
  note: "",
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
      return { ...state, loadding: true };
    }
    case FETCH_ALL_USER_SUCCESS: {
      const userList = payload;
      const listCount = userList.length;
      return {
        ...state,
        totalCount: listCount,
        userAccountData: userList,
        loadding: false,
      };
    }
    case FETCH_ALL_USER_FAIL: {
      return { ...state, loadding: false };
    }
    case POST_NEW_USER_REQUEST: {
      return { ...state, loadingModal: true };
    }
    case POST_NEW_USER_SUCCESS: {
      const { userAccountData } = state;
      userAccountData = userAccountData.push(payload);
      return {
        ...state,
        loadingModal: false,
        userAccountData: userAccountData,
      };
    }
    case POST_NEW_USER_FAIL: {
      return { ...state, loadingModal: false };
    }
    case PUT_USER_UPDATE_REQUEST: {
      return { ...state, loadingModal: true };
    }
    case PUT_USER_UPDATE_SUCCESS: {
      const { userAccountData } = state;
      const idx = userAccountData.findIndex((user) => {
        return user.taiKhoan === payload.taiKhoan;
      });
      userAccountData[idx] = payload;
      return {
        ...state,
        loadingModal: false,
        userAccountData: userAccountData,
      };
    }
    case PUT_USER_UPDATE_FAIL: {
      return { ...state, loadingModal: false };
    }
    case DELETE_USER_REQUEST: {
      return { ...state, loadingModal: true, note:''};
    }
    case DELETE_USER_SUCCESS: {
      let { note } = state;
      const { userAccountData } = state;

      note = payload.note;
      const idx = userAccountData.findIndex((user) => {
        return user.taiKhoan === payload.user;
      });
      userAccountData.splice(idx, 1);
      const listCount = userAccountData.length;
      return {
        ...state,
        loadingModal: false,
        userAccountData: userAccountData,
        note: note,
        totalCount: listCount,
      };
    }
    case DELETE_USER_FAIL: {
      return { ...state, loadingModal: false, note: 'Xóa thất bại' };
    }
    default:
      return state;
  }
};

export default UserAccountReducer;
