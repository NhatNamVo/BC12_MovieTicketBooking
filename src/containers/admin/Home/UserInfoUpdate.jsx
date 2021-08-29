import React, { Component } from "react";

class UserInfoUpdate extends Component {
    componentDidMount() {
        
        const matKhauInput = document.querySelector('input[name="matKhau"]');
        const hoTenInput = document.querySelector('input[name="hoTen"]');
        const emailInput = document.querySelector('input[name="email"]');
        const soDtInput = document.querySelector('input[name="soDt"]');
        const maLoaiNguoiDungInput = document.querySelector('select[name="maLoaiNguoiDung"]');
        matKhauInput.addEventListener('input',this.infoAdminChange);
        hoTenInput.addEventListener('input',this.infoAdminChange);
        emailInput.addEventListener('input',this.infoAdminChange);
        soDtInput.addEventListener('input',this.infoAdminChange);
        maLoaiNguoiDungInput.addEventListener('change',this.infoAdminChange);
    }
    infoAdminChange = (event) => {
        let {infoAdminChange, infoChange} = this.props;
        const value = event.target.value;
        const name = event.target.name;
        infoAdminChange = {...infoAdminChange, [name]: value};
        infoChange(infoAdminChange);
    }
  render() {
      const {infoAdminChange} = this.props;
      const { email, hoTen, matKhau, soDt, taiKhoan, maLoaiNguoiDung } = infoAdminChange;
    return (
      <>
        <div
          className="modal fade"
          id="editUserInfo"
          tabIndex={-1}
          aria-labelledby="editUserInfo"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editUserInfo">
                  Cập nhật thông tin
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body m-auto" style={{width: '75%'}}>
                  <div className="row justify-content-between align-items-center my-1">
                      <p className="font-weight-bold m-0">Tài khoản:</p>
                      <input type="text" className = 'form-control' style={{width: '180px'}} value={taiKhoan} name="taiKhoan" id="" readOnly/>
                  </div>
                  <div className="row justify-content-between align-items-center my-1">
                      <p className="font-weight-bold m-0">Mật khẩu:</p>
                      <input type="text" className = 'form-control' style={{width: '180px'}} value={matKhau} name="matKhau" id="" />
                  </div>
                  <div className="row justify-content-between align-items-center my-1">
                      <p className="font-weight-bold m-0">Họ và tên:</p>
                      <input type="text" className = 'form-control' style={{width: '180px'}} value={hoTen} name="hoTen" id="" />
                  </div>
                  <div className="row justify-content-between align-items-center my-1">
                      <p className="font-weight-bold m-0">Email:</p>
                      <input type="text" className = 'form-control' style={{width: '180px'}} value={email} name="email" id="" />
                  </div>
                  <div className="row justify-content-between align-items-center my-1">
                      <p className="font-weight-bold m-0">Số điện thoại:</p>
                      <input type="text" className = 'form-control' style={{width: '180px'}} value={soDt} name="soDt" id="" />
                  </div>
                  <div className="row justify-content-between align-items-center my-1">
                      <p className="font-weight-bold m-0">Loại người dùng:</p>
                      {/* <input type="text" className = 'form-control' style={{width: '180px'}} value={maLoaiNguoiDung} name="maLoaiNguoiDung" id="" /> */}
                      <select id="inputState" className="form-control" name="maLoaiNguoiDung" value={maLoaiNguoiDung} style={{width: '180px'}}>
                        <option value=''>Loại người dùng</option>
                        <option value='QuanTri'>Quản trị</option>
                        <option value='KhachHang'>Khách hàng</option>
                    </select>

                  </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserInfoUpdate;
