import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const movieApi = {
  fechAllMovieApi() {
    return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  },

  fetchMovieDetailApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  fetMovieBannerApi(){
    return callApi(`QuanLyPhim/LayDanhSachBanner`);
  },
  // fetchFindUserInfo(userAccount) {
  //   return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GROUP_ID}&tuKhoa=${userAccount}`);
  // },
  // fetchAllUserAcount(){
  //   return callApi(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
  // },
  fetchTheaterApi(){
    return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
  },
  fetchMovieTheaterApi(maHeThongRap){
    return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${GROUP_ID}`)
  },
};

export default movieApi;
