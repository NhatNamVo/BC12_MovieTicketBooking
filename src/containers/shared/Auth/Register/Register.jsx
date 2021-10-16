import React, { Component } from "react";
import background from "assets/image/background_Login.jpg";
import "../FormLogin.scss";
import { GROUP_ID } from "settings/apiConfig";
import { actRegister } from "../module/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router";
class Register extends Component {
  state = {
    isPass: true,
    isUser: true,
    isEmail: true,
    isPhone: true,
    isName: true,
  };
  handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "taiKhoan":
        if (!!value) {
          this.setState({ isUser: true });
        }
        break;
      case "matKhau":
        if (!!value) {
          this.setState({ isPass: true });
        }
        break;
      case "email":
        if (!!value) {
          this.setState({ isEmail: true });
        }
        break;
      case "soDt":
        if (!!value) {
          this.setState({ isPhone: true });
        }
        break;
      case "hoTen":
        if (!!value) {
          this.setState({ isName: true });
        }
        break;
      default:
        break;
    }
  };
  RegisterSubmit = (e) => {
    e.preventDefault();
    let newUser = { maNhom: GROUP_ID, maLoaiNguoiDung: "KhachHang" };
    let isPass = true;
    let isUser = true;
    let isEmail = true;
    let isPhone = true;
    let isName = true;
    for (let i = 0; i < 5; i++) {
      const name = e.target[i].name;
      const value = e.target[i].value;
      switch (name) {
        case "taiKhoan":
          if (!value) {
            isUser = false;
          }
          break;
        case "matKhau":
          if (!value) {
            isPass = false;
          }
          break;
        case "email":
          if (!value) {
            isEmail = false;
          }
          break;
        case "soDt":
          if (!value) {
            isPhone = false;
          }
          break;
        case "hoTen":
          if (!value) {
            isName = false;
          }
          break;
        default:
          break;
      }
      const userInfo = { ...newUser, [name]: value };
      newUser = { ...userInfo };
    }
    if (!isUser || !isPass || !isEmail || !isPhone || !isName) {
      this.setState({
        isPass: isPass,
        isUser: isUser,
        isEmail: isEmail,
        isPhone: isPhone,
        isName: isName,
      });
      return;
    }
    this.props.register(newUser, this.props.history);
  };
  render() {
    if (!!this.props.currentUser) return <Redirect to="/" />;
    const { loadding, error } = this.props;
    return (
      <div
        className="login-component"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="login-container">
          <h3 className="login-title">Đăng ký</h3>
          <div className="login-form">
            <form
              action=""
              method="post"
              className="register-form"
              onSubmit={this.RegisterSubmit}
              autoComplete="off"
            >
              <div className="form-group">
                <div className="form-input">
                  <input
                    type="text"
                    name="taiKhoan"
                    className="form-input"
                    placeholder="Tài khoản"
                    onChange={this.handleChange}
                  />
                  <i class="fa fa-user"></i>
                </div>
                <small id="helpId" className="form-note">
                  {!this.state.isUser ? "Chưa nhập tài khoản" : ""}
                </small>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <input
                    type="password"
                    name="matKhau"
                    className="form-input"
                    placeholder="Mật khẩu"
                    onChange={this.handleChange}
                  />
                  <i class="fa fa-lock"></i>
                </div>
                <small id="helpId" className="form-note">
                  {!this.state.isPass ? "Chưa nhập mật khẩu" : ""}
                </small>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <input
                    type="text"
                    name="email"
                    className="form-input"
                    placeholder="Địa chỉ email"
                    onChange={this.handleChange}
                  />
                  <i class="fa fa-envelope"></i>
                </div>
                <small id="helpId" className="form-note">
                  {!this.state.isEmail ? "Chưa nhập email" : ""}
                </small>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <input
                    type="text"
                    name="soDt"
                    className="form-input"
                    placeholder="Số điện thoại"
                    onChange={this.handleChange}
                  />
                  <i class="fa fa-phone"></i>
                </div>
                <small id="helpId" className="form-note">
                  {!this.state.isPhone ? "Chưa nhập số điện thoại" : ""}
                </small>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <input
                    type="text"
                    name="hoTen"
                    className="form-input"
                    placeholder="Họ tên"
                    onChange={this.handleChange}
                  />
                  <i class="fa fa-credit-card"></i>
                </div>
                <small id="helpId" className="form-note">
                  {!this.state.isName ? "Chưa nhập họ và tên" : ""}
                </small>
              </div>
              <span className="note-login">{error ? error : ""}</span>
              <button
                type="submit"
                name
                id
                className="login-submit register-submit"
              >
                Đăng ký
                <span
                  className={
                    "spinner-border spinner-border-sm " +
                    (!loadding ? "d-none" : "")
                  }
                  role="status"
                  aria-hidden="true"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
  loadding: state.authUserReducer.loadding,
  error: state.authUserReducer.error,
});
const mapDispatchToProps = (dispatch) => ({
  register: (newUser, history) => {
    dispatch(actRegister(newUser, history));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
