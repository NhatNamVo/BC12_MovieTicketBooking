import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actLogOutUser } from "containers/shared/Auth/module/actions";
import "./UserLogin.scss";
class UserLogin extends Component {
  state = {
    isClicked: false,
  };
  handleClick = (e) => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  logOut = e => {
    this.props.logOut();
  }
  render() {
    const { taiKhoan, maLoaiNguoiDung } = this.props.currentUser;
    return (
      <li className="nav-item userLogin">
        <div className="nav-link" onClick={this.handleClick}>
          <div className="userIcon">
            <i class="fa fa-user"></i>
          </div>
        </div>
        <div className={"dropbox " + (this.state.isClicked ? "active" : "")}>
          <ul>
            <li>{"Xin chào " + taiKhoan}</li>
            {maLoaiNguoiDung === "QuanTri" ? (
              <li>
                <Link to="/admin">Quản lý</Link>
              </li>
            ) : (
              ""
            )}
            <li onClick ={this.logOut}><Link to={'/'}>Logout</Link></li>
          </ul>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    dispatch(actLogOutUser());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
