import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const movieApi = {
  fechAllMovieApi() {
    return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  },

  fetchMovieDetailApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  fetchFindUserInfo(userAccount) {
    return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GROUP_ID}&tuKhoa=${userAccount}`);
  },
};

export default movieApi;
