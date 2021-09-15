import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

const userApi = {
  loginApi: (user) => {
    return callApi("QuanLyNguoiDung/DangNhap", "POST", user);
  },
  registerApi: (newUser) => {
    return callApi("QuanLyNguoiDung/DangKy", "POST", newUser);
  },
};

export default userApi;
