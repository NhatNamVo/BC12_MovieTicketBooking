import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
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
        </>
      );
    }
  };
  render() {
    return (
      <header className="header-section">
        <div className="container">
          <nav className="navbar navbar-expand-sm">
            <Link className="navbar-brand" to="/">
              Movie Ticket
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
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/" exact="true">
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/movie">
                    Danh sách phim
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/theater">
                    Cụm rạp
                  </NavLink>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            {this.checkLogin()}
          </nav>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
});

export default connect(mapStateToProps)(Header);
