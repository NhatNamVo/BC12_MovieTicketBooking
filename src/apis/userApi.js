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
  },
  postNewUserAcount: (newUser,token) => {
    return callApi(`QuanLyNguoiDung/ThemNguoiDung`,"POST",newUser,token);
  },
  deleteUserAccount: (userAccount, token) => {
    return callApi(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userAccount}`,"DELETE",null, token);
  },
  fetchBookingHistory:(userName)=>{
    return callApi("QuanLyNguoiDung/ThongTinTaiKhoan","POST",userName)
  }
};

export default userApi;
