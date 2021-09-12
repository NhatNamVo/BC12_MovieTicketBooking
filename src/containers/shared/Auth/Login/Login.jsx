import React, { Component } from "react";
import { Link } from "react-router-dom";
import background from "assets/image/background_Login.jpg";
import "./Login.scss";
class Login extends Component {
  render() {
    return (
      <div
        className="login-component"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="login-container">
          <h3 className="login-title">Đăng nhập</h3>
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
              <button type="submit" name id className="login-submit">
                Đăng nhập
              </button>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name
                    id
                    defaultValue="checkedValue"
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

export default Login;
