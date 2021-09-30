export const formValid = (name, value, list, messageError) => {
  let status = {
    isvalid: true,
    messageError: null,
  };
  status.messageError = {...messageError};
  switch (name) {
    case "taiKhoan": {
      const checkUser = list.findIndex((user) => {
        return user.taiKhoan === value;
      });
      if (checkUser !== -1) {
        status.isvalid = false;
        status.messageError.taiKhoan = "Tài khoản đã tồn tại";
      }
      else{
        status.isvalid = true;
        status.messageError.taiKhoan = "true";
      }
      if(value === ''){
        status.isvalid = false;
        status.messageError.taiKhoan = "";
      }
      return status;
    }
    case "matKhau": {
      if(value.length<6 && value!==''){
        status.isvalid = false;
        status.messageError.matKhau = "Mật khẩu chưa đủ 6 ký tự";
      }
      else if(value.length >= 6){
        status.isvalid = true;
        status.messageError.matKhau = "true";
      }
      if(value ===''){
        status.isvalid = false;
        status.messageError.matKhau = "";
      }
      return status;
    }
    case "email": {
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!regex.test(value)){
        status.isvalid = false;
        status.messageError.email = "Email sai định dạng";
      }
      else{
        status.isvalid = true;
        status.messageError.email = "true";
      }
      const checkUser = list.findIndex((user) => {
        return user.email === value;
      });
      if(checkUser !== -1){
        status.isvalid = false;
        status.messageError.email = "Email đã tồn tại";
      }
      if(value ===''){
        status.isvalid = false;
        status.messageError.email = "";
      }
      return status;
    }
    case "soDt":{
      const covertNum = parseInt(value);
      const regex = /^-?\d+$/;
      if(!regex.test(value)){
        status.isvalid = false;
        status.messageError.soDt = "Số điện thoại sai định dạng";
      }
      else{
        if(value.length !== 10){
          status.isvalid = false;
          status.messageError.soDt = "Số điện thoại không đúng";
        }
        else{
          status.isvalid = true;
          status.messageError.soDt = "true";
        }
      }
      if(value === ''){
        status.isvalid = false;
        status.messageError.soDt = "";
      }
      return status;
    }
    case 'hoTen':{
      if(value.length>0){
        status.isvalid = true;
        status.messageError.hoTen = "true";
      }
      if(value === ''){
        status.isvalid = false;
        status.messageError.hoTen = "";
      }
      return status;
    }
    case 'maLoaiNguoiDung':{
      if(value === ''){
        status.isvalid = false;
        status.messageError.maLoaiNguoiDung = false;
      }
      if(value !== ''){
        status.isvalid = true;
        status.messageError.maLoaiNguoiDung = true;
      }
      return status;
    }
    case 'tenPhim':{
      if(value.length > 0){
        status.isvalid = true;
        status.messageError.tenPhim = "true";
      }
      if(value === ''){
        status.isvalid = true;
        status.messageError.tenPhim = '';
      }
      return status;
    }
    case 'trailer':{
      if(value.length > 0){
        status.isvalid = true;
        status.messageError.trailer = "true";
      }
      if(value === ''){
        status.isvalid = true;
        status.messageError.trailer = '';
      }
      return status;
    }
    case 'danhGia':{
      const regex = /^-?\d+$/;
      if(!regex.test(value)){
        status.isvalid = false;
        status.messageError.soDt = "Không đúng định dạng điểm (0-10)";
      }
      if(value > 0 && value < 10){
        status.isvalid = true;
        status.messageError.danhGia = "true";
      }
      else if(value < 0 || value > 10){
        status.isvalid = false;
        status.messageError.danhGia = "Số điểm vượt mức (0-10)";
      }
      if(value === ''){
        status.isvalid = true;
        status.messageError.danhGia = '';
      }
      return status;
    }
    case 'ngayKhoiChieu':{
      if(value.length > 0){
        status.isvalid = true;
        status.messageError.ngayKhoiChieu = "true";
      }
      if(value === ''){
        status.isvalid = true;
        status.messageError.ngayKhoiChieu = '';
      }
      return status;
    }
    case 'moTa':{
      if(value.length > 0){
        status.isvalid = true;
        status.messageError.moTa = "true";
      }
      if(value === ''){
        status.isvalid = true;
        status.messageError.moTa = '';
      }
      return status;
    }
    case 'hinhAnh':{
      if(value.name.length > 0){
        status.isvalid = true;
        status.messageError.hinhAnh = "true";
      }
      return status;
    }
  }
};
