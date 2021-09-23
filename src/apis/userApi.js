import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

const userApi = {
  loginApi: (user) => {
    return callApi("QuanLyNguoiDung/DangNhap", "POST", user);
  },
  registerApi: (newUser) => {
    return callApi("QuanLyNguoiDung/DangKy", "POST", newUser);
  },
  fetchFindUserInfo: (user) => {
    return callApi(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${user}`);
  },
  postUpdateUser: (updateUser, token) => {
    return callApi(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, "PUT", updateUser,token);
  },
  fetchAllUserAcount: () => {
    return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
  },
  findUserAcount: (user) => {
    return callApi(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${user}`);
  }
};

export default userApi;
