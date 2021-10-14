import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import UserLogin from "./UserLogin/UserLogin";
import "./Header.scss";
import logo from "assets/image/logo.png";
class Header extends Component {
  state = {
    menuBtn: false,
    menuShow: false,
  };
  changeMenuBtn = (e) => {
    const adminContainer = document.querySelector('.movieTicket-content');
    e.stopPropagation();
    if(this.state.menuBtn){
      this.closeMenu();
      return;
    }
    this.setState({ menuShow: !this.state.menuShow });
    adminContainer.style.position = 'fixed';
    this.wait = setTimeout(() => {
      this.setState({ menuBtn: !this.state.menuBtn });
    }, 300);
  };
  handleClick = (e) => {
    e.stopPropagation();
    const menuItem = e.target.closest("li");
    const userLoginBtn = e.target.closest('li.userItem');
    const userInfo = e.target.closest('.dropbox.active li.item');
    if (!!menuItem && !userLoginBtn) {
      this.closeMenu();
    };
    if (!menuItem && !userLoginBtn) {
      this.closeMenu();
    };
    if(!!userInfo){
      this.closeMenu();
    }
  };
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
          <div className="pr-0 header-button">
            <Link className="nav-link" to="/login">
              Đăng nhập
            </Link>
          </div>
        </>
      );
    }
  };
  closeMenu = () => {
    const adminContainer = document.querySelector('.movieTicket-content');
    adminContainer.style.position = '';
    this.setState({ menuBtn: false });
    this.wait = setTimeout(() => {
      this.setState({ menuShow: false });
    }, 300);
  };
  loadHomePage = (e) => {
    window.location.replace('/');
  }
  render() {
    return (
      <header className="header-section" onClick={this.closeMenu}>
          <nav className="navbar menuNavBar container">
            <Link className="navbar-brand" onClick={this.loadHomePage}>
              <img src={logo} alt="logo" />
            </Link>

            <div className={"menuBtn " + (this.state.menuShow ? "show " : "") + (this.state.menuBtn ? "active" : "")} onClick={this.changeMenuBtn}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div
            className={"overPlay " + (this.state.menuBtn ? "active" : "")}
          ></div>
              <ul className={"navbar-nav menu "+ (this.state.menuShow ? "show " : "") + (this.state.menuBtn ? "active" : "")} onClick={this.handleClick}>
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
                <li className="nav-item userItem">{this.checkLogin()}</li>
              </ul>
          </nav>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
});

export default connect(mapStateToProps)(Header);
