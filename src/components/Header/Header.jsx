import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserLogin from "./UserLogin/UserLogin";
class Header extends Component {
  checkLogin = () => {
    if (!!this.props.currentUser) {
      return <UserLogin />;
    } else {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Đăng nhập
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Đăng ký
            </Link>
          </li>
        </>
      );
    }
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/theater">
                Theaters
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Contact
              </Link>
            </li>
            {this.checkLogin()}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
});

export default connect(mapStateToProps)(Header);
