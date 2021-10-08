import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserLogin from "./UserLogin/UserLogin";
import "./Header.scss";
class Header extends Component {
  checkLogin = () => {
    if (!!this.props.currentUser) {
      return (
        <li className="nav-item header-user">
          <UserLogin />
        </li>
      );
    } else {
      return (
        <>
          <div className="   pr-0 header-button">
            <Link className="nav-link" to="/login">
              Đăng nhập
            </Link>
          </div>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/register">
              Đăng ký
            </Link>
          </li> */}
        </>
      );
    }
  };
  render() {
    return (
      <div className="header-section">
        <div className="container">
          <nav className="navbar navbar-expand-sm">
            <Link className="navbar-brand" to="/">
              Cinema Booking
            </Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa fa-minus"></i>
            </button>
            <div
              className="collapse  navbar-collapse header__menu "
              id="collapsibleNavId"
            >
              <ul className="navbar-nav  mt-2 mt-lg-0 menu">
                <li className="nav-item active ">
                  <Link className="nav-link " to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movie">
                    Danh sách phim
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/theater">
                    Cụm rạp
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            {this.checkLogin()}
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
});

export default connect(mapStateToProps)(Header);
