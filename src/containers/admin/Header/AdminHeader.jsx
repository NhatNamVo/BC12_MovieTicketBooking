import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminHeader.scss";
import UserLogin from "components/Header/UserLogin/UserLogin";
class AdminHeader extends Component {
  state = {
    menuBtn: false,
    menuShow: false,
  };
  changeMenuBtn = (e) => {
    const adminContainer = document.querySelector('.admin-container');
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
    const userLoginBtn = e.target.closest('li.user-login');
    const managerBtn = e.target.closest('.user-login li.item');
    if (!!menuItem && !userLoginBtn) {
      this.closeMenu();
    };
    if(!!managerBtn){
      this.closeMenu();
    }
  };
  closeMenu = () => {
    const adminContainer = document.querySelector('.admin-container');
    adminContainer.style.position = '';
    this.setState({ menuBtn: false });
    this.wait = setTimeout(() => {
      this.setState({ menuShow: false });
    }, 300);
  };
  render() {
    return (
      <header className="adminHeader" onClick={this.closeMenu}>
        <div className="header-content container">
          <div className="logobranch">
            <Link to="/admin">Movie Ticket</Link>
          </div>
          <div
            className={"menuBtn " + (this.state.menuBtn ? "active" : "")}
            onClick={this.changeMenuBtn}
          >
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div
            className={"overPlay " + (this.state.menuBtn ? "active" : "")}
          ></div>
          <div
            className={"menu " + (this.state.menuShow ? "show " : "") + (this.state.menuBtn ? "active" : "")}
            onClick={this.handleClick}
          >
            <ul className="menu-list">
              <li className="menu-item">
                <NavLink className="menu-itemLink" to="/" exact="true">
                  Trang chủ
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-itemLink" exact="true" to="/admin">
                  Thông tin Admin
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-itemLink" to="/admin/user-manage">
                  Quản lý thành viên
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink className="menu-itemLink" to="/admin/movie-manage">
                  Quản lý phim
                </NavLink>
              </li>
              <li className="menu-item user-login">
                <UserLogin />
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default AdminHeader;
