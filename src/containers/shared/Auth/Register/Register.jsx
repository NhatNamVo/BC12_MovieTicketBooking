import React, { Component } from "react";
import background from "assets/image/background_Login.jpg";
import "../FormLogin.scss";
class Register extends Component {
  render() {
    return (
      <div
        className="login-component"
        style={{ backgroundImage: `url(${background})` }}
      >
          <div className="login-container">
          <h3 className="login-title">Đăng ký</h3>
          <div className="login-form">
            <form action="" method="post">
              <div className="form-group">
                <div className="form-input">
                  <input type="text" className="form-input" placeholder="Tài khoản" />
                  <i class="fa fa-user"></i>
                </div>
                <small id="helpId" className="form-note"></small>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <input type="password" className="form-input" placeholder="Mật khẩu" />
                  <i class="fa fa-lock"></i>
                </div>
                <small id="helpId" className="form-note"></small>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <input type="text" className="form-input" placeholder="Địa chỉ email" />
                  <i class="fa fa-envelope"></i>
                </div>
                <small id="helpId" className="form-note"></small>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <input type="text" className="form-input" placeholder="Số điện thoại" />
                  <i class="fa fa-phone"></i>
                </div>
                <small id="helpId" className="form-note"></small>
              </div>
              {/* <div className="form-group">
                <div className="form-input">
                  <input type="text" className="form-input" placeholder="Mã nhóm" value="GP12" readOnly />
                  <i class="fa fa-user"></i>
                </div>
                <small id="helpId" className="form-note"></small>
              </div> */}
              <div className="form-group">
                <div className="form-input">
                  <input type="text" className="form-input" placeholder="Họ tên" />
                  <i class="fa fa-credit-card"></i>
                </div>
                <small id="helpId" className="form-note"></small>
              </div>
              <button type="submit" name id className="login-submit register-submit">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
