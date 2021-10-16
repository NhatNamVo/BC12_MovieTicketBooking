import React, { Component } from "react";
import { GROUP_ID } from "settings/apiConfig";
import { formValid } from "settings/formValidation";

class FormUpdateAccount extends Component {
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let isValidation = true;
    let data = this.props.data;
    let messageError = this.props.messageError;
    const status = formValid(
      name,
      value,
      this.props.userAccountData,
      messageError
    );
    data = { ...data, [name]: value };
    isValidation = status.isvalid;
    messageError = status.messageError;
    data = data;
    this.props.dataInput(data, messageError, isValidation);
  };
  changeStatus = (status) => {
    if (status === "") {
      return <span className="inputStatus"></span>;
    } else if (status === "true") {
      return (
        <span className="inputStatus">
          <i class="fa fa-check"></i>
        </span>
      );
    } else {
      return (
        <span className="inputStatus error">
          <i class="fa fa-exclamation-circle"></i>
          <div className="errorMessage">{status}</div>
        </span>
      );
    }
  };
  render() {
    const isUserLogin =
      this.props.currentAccountLogin === this.props.data.taiKhoan;
    return (
      <>
          <form action="" method="post" id="userInfo">
            <div className="form-group">
              <div className="form-inputContainer">
                <input
                  id="user"
                  type="text"
                  name="taiKhoan"
                  className="form-input"
                  placeholder="Tài khoản"
                  value={this.props.data.taiKhoan}
                  onChange={this.handleChange}
                  disabled='true'
                />
                <i class="fa fa-user"></i>
                {this.changeStatus(this.props.messageError.taiKhoan)}
              </div>
            </div>
            <div className="form-group">
              <div className="form-inputContainer">
                <input
                  type="password"
                  name="matKhau"
                  className="form-input"
                  placeholder="Mật khẩu"
                  value={this.props.data.matKhau}
                  onChange={this.handleChange}
                  disabled='true'
                />
                <i class="fa fa-lock"></i>
                {this.changeStatus(this.props.messageError.matKhau)}
              </div>
            </div>
            <div className="form-group">
              <div className="form-inputContainer">
                {isUserLogin ? (
                  <input
                    type="text"
                    name="email"
                    className="form-input"
                    placeholder="Địa chỉ email"
                    value={this.props.data.email}
                    onChange={this.handleChange}
                  />
                ) : (
                  <input
                    type="text"
                    name="email"
                    className="form-input"
                    placeholder="Địa chỉ email"
                    value={this.props.data.email}
                    onChange={this.handleChange}
                    disabled="true"
                  />
                )}
                <i class="fa fa-envelope"></i>
                {this.changeStatus(this.props.messageError.email)}
              </div>
            </div>
            <div className="form-group">
              <div className="form-inputContainer">
              {isUserLogin ?
                (<input
                  type="text"
                  name="soDt"
                  className="form-input"
                  placeholder="Số điện thoại"
                  value={this.props.data.soDt}
                  onChange={this.handleChange}
                />):(<input
                    type="text"
                    name="soDt"
                    className="form-input"
                    placeholder="Số điện thoại"
                    value={this.props.data.soDt}
                    onChange={this.handleChange}
                    disabled='true'
                  />)}
                <i class="fa fa-phone"></i>
                {this.changeStatus(this.props.messageError.soDt)}
              </div>
            </div>
            <div className="form-group">
              <div className="form-inputContainer">
              {isUserLogin ?
                (<input
                  type="text"
                  name="hoTen"
                  className="form-input"
                  placeholder="Họ tên"
                  value={this.props.data.hoTen}
                  onChange={this.handleChange}
                />):(<input
                    type="text"
                    name="hoTen"
                    className="form-input"
                    placeholder="Họ tên"
                    value={this.props.data.hoTen}
                    onChange={this.handleChange}
                    disabled='true'
                  />)}
                <i class="fa fa-credit-card"></i>
                {this.changeStatus(this.props.messageError.hoTen)}
              </div>
            </div>
            <div className="form-group">
              <div className="form-inputContainer">
                <input
                  type="text"
                  name="maNhom"
                  className="form-input"
                  value={GROUP_ID}
                  disabled="true"
                />
                <i class="fa fa-users"></i>
              </div>
            </div>
            <div class="form-inputContainer">
              <label for=""></label>
              <select
                class={
                  "form-select " +
                  (this.props.messageError.maLoaiNguoiDung ? "" : "error")
                }
                name=""
                id=""
                name="maLoaiNguoiDung"
                value={this.props.data.maLoaiNguoiDung}
                onChange={this.handleChange}
              >
                <option value="">Loại tài khoản</option>
                <option value="KhachHang">Khách hàng</option>
                <option value="QuanTri">Quản trị</option>
              </select>
              <i class="fa fa-magic"></i>
            </div>
          </form>
      </>
    );
  }
}
export default(FormUpdateAccount);
