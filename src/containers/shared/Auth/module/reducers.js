import {
  CHECK_USER_SAVE,
  FETCH_BOOKING_HISTORY,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCESS,
} from "./types";

const initialState = {
  currentUser: null,
  userRegister: null,
  isRegister: false,
  isLogined: true,
  error: "",
  loadding: false,
  thongTinDatVe: [
    {
      "danhSachGhe": [
        {
          "maHeThongRap": "BHDStar",
          "tenHeThongRap": "BHD Star Cineplex - Phạm Hùng",
          "maCumRap": "Rạp 5",
          "tenCumRap": "Rạp 5",
          "maRap": 475,
          "tenRap": "Rạp 5",
          "maGhe": 51284,
          "tenGhe": "44"
        }
      ],
      "maVe": 67175,
      "ngayDat": "2021-08-29T11:40:47.733",
      "tenPhim": "John Wick II",
      "giaVe": 90000,
      "thoiLuongPhim": 120
    },
  ],
};

const authUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loadding: true };
    case LOGIN_SUCESS:
      return {
        ...state,
        loadding: false,
        userRegister: null,
        isRegister: false,
        currentUser: payload,
        error: "",
      };
    case LOGIN_FAIL:
      return { ...state, loadding: false, error: payload };
    case CHECK_USER_SAVE:
      return { ...state, isLogined: payload };
    case LOGOUT_USER:
      return { ...state, currentUser: null };
    case REGISTER_REQUEST:
      return { ...state, loadding: true };
    case REGISTER_SUCESS:
      const userAccount = payload.taiKhoan;
      const userPassword = payload.matKhau;
      const newUser = {
        taiKhoan: userAccount,
        matKhau: userPassword,
      };
      return {
        ...state,
        loadding: false,
        isRegister: true,
        error: "",
        userRegister: newUser,
      };
    case REGISTER_FAIL:
      return { ...state, loadding: false, isRegister: false, error: payload };
    case FETCH_BOOKING_HISTORY:
      return { ...state,thongTinDatVe:payload.thongTinDatVe}
      default:
      return state;
  }
};

export default authUserReducer;
