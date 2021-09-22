import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminHeader.scss";
import UserLogin from 'components/Header/UserLogin/UserLogin';
class AdminHeader extends Component {
  render() {
    return (
      <header className="adminHeader">
        <div className="header-content container">
          <div className="logobranch">Movie Ticket</div>
          <div className="menu">
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
              <li className="menu-item">
                <UserLogin/>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default AdminHeader;
