import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';
import axios from 'axios';

const movieApi = {
  fechAllMovieApi() {
    return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
  },

  fetchMovieDetailApi(movieId) {
    return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`);
  },
  fetMovieBannerApi(){
    return axios({
      url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner`,
      method: 'GET',
    });
  },
  fetchTheaterApi(){
    return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
  },
  fetchMovieTheaterApi(maHeThongRap){
    return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${GROUP_ID}`);
  },
  postMovieApi(formData){
    return callApi(`QuanLyPhim/ThemPhimUploadHinh`,"POST",formData);
  },
  deleteMovieApi(movieCode,token){
    return callApi(`QuanLyPhim/XoaPhim?MaPhim=${movieCode}`,"DELETE",null,token);  
  },
  postMovieUpdate(movieData, token){
    return callApi(`QuanLyPhim/CapNhatPhimUpload`,'POST',movieData,token);
  }
};

export default movieApi;
