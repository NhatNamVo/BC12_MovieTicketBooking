import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import background from "assets/image/background_Login.jpg";
import "../FormLogin.scss";
import { actLogin, actSaveUserCheck } from "../module/actions";
class Login extends Component {
  state = {
    isPass: true,
    isUser: true,
  };
  handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    if (name === "taiKhoan" && value !== "") {
      this.setState({ isUser: true });
    }
    if (name === "matKhau" && value !== "") {
      this.setState({ isPass: true });
    }
  };
  changeCheckBox = (e) => {
    this.props.checked(e.target.checked);
  };
  loginSubmit = (e) => {
    e.preventDefault();
    let user = {};
    let isUser = true;
    let isPass = true;
    for (let i = 0; i <= 1; i++) {
      const name = e.target[i].name;
      const value = e.target[i].value;
      if (name === "taiKhoan" && value === "") {
        isUser = false;
      }
      if (name === "matKhau" && value === "") {
        isPass = false;
      }
      const userInfo = { ...user, [name]: value };
      user = { ...userInfo };
    }
    if (!isUser || !isPass) {
      this.setState({
        isUser: isUser,
        isPass: isPass,
      });
      return;
    }
    this.props.login(user, this.props.history, this.props.isLogined,this.props.isRegister);
  };
  checkRegister = () => {
    const { isRegister, userRegister } = this.props;
    if (!!isRegister) {
      return (
        <>
          <div className="form-group">
            <div className="form-input">
              <input
                name="taiKhoan"
                type="text"
                className="form-input"
                placeholder="Tài khoản"
                value={userRegister.taiKhoan}
                readOnly
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
                name="matKhau"
                type="password"
                className="form-input"
                placeholder="Mật khẩu"
                onInput={this.handleChange}
              />
              <i class="fa fa-lock"></i>
            </div>
            <small id="helpId" className="form-note">
              {!this.state.isPass ? "Chưa nhập mật khẩu" : ""}
            </small>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="form-group">
            <div className="form-input">
              <input
                name="taiKhoan"
                type="text"
                className="form-input"
                placeholder="Tài khoản"
                onInput={this.handleChange}
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
                name="matKhau"
                type="password"
                className="form-input"
                placeholder="Mật khẩu"
                onInput={this.handleChange}
              />
              <i class="fa fa-lock"></i>
            </div>
            <small id="helpId" className="form-note">
              {!this.state.isPass ? "Chưa nhập mật khẩu" : ""}
            </small>
          </div>
        </>
      );
    }
  };
  render() {
    const { loadding, error } = this.props;
    console.log(this.props.isRegister,this.props.userRegister);
    return (
      <div
        className="login-component"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="login-container">
          <h3 className="login-title">Đăng nhập</h3>
          <div className="login-form">
            <form action="" method="post" onSubmit={this.loginSubmit}>
              {this.checkRegister()}
              <span className="note-login">{error ? error : ""}</span>
              <button type="submit" name id className="login-submit">
                Đăng nhập
                <span
                  className={
                    "spinner-border spinner-border-sm " +
                    (!loadding ? "d-none" : "")
                  }
                  role="status"
                  aria-hidden="true"
                />
              </button>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name
                    id
                    defaultValue="checkedValue"
                    onChange={this.changeCheckBox}
                    defaultChecked
                  />
                  Lưu tài khoản
                </label>
              </div>
            </form>
          </div>
          <div className="login-register">
            <p>Bạn chưa có tài khoản TicketBooking?</p>
            <Link to="/register">Đăng ký ngay</Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loadding: state.authUserReducer.loadding,
  error: state.authUserReducer.error,
  isLogined: state.authUserReducer.isLogined,
  userRegister: state.authUserReducer.userRegister,
  isRegister: state.authUserReducer.isRegister,
});
const mapDispatchToProps = (dispatch) => ({
  login: (user, history, islogin, isRegister) => {
    dispatch(actLogin(user, history, islogin, isRegister));
  },
  checked: (ischecked) => {
    dispatch(actSaveUserCheck(ischecked));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
