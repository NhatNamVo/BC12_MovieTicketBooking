import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actLogOutUser } from "containers/shared/Auth/module/actions";
import "./UserLogin.scss";
class UserLogin extends Component {
  state = {
    isClicked: false,
  };
  componentDidMount() {
    const movieTicketContent = document.querySelector('.movieTicket-content');
    const adminContainer = document.querySelector('.admin-container');
    if(!!movieTicketContent){
      movieTicketContent.addEventListener('click',this.handleEvent);
    }
    if(!!adminContainer){
      adminContainer.addEventListener('click',this.handleEvent);
    }
  }
  handleEvent = (e) => {
    const userLogin = e.target.closest('.userLogin');
    if(!userLogin){
      this.changePage();
    }
  }
  handleClick = (e) => {
    this.setState({ isClicked: !this.state.isClicked });
  };
  logOut = e => {
    this.props.logOut();
    window.history.go('/');
  }
  changePage = (e) => {
    this.setState({ isClicked: false });
  }
  render() {
    const { taiKhoan, maLoaiNguoiDung } = this.props.currentUser;
    return (
      <div className="userLogin">
        <div className="nav-link" onClick={this.handleClick}>
          <div className="userIcon">
            <span>{taiKhoan}</span>
            <i class="fa fa-user-circle ml-3"></i>
          </div>
        </div>
        <div className={"dropbox " + (this.state.isClicked ? "active" : "")}>
          <ul>
            {maLoaiNguoiDung === "QuanTri" ? (
              <li className="item" onClick = {this.changePage}>
                <Link to="/admin">Quản lý</Link>
              </li>
            ) : (
              <li className="item">
                <Link to="/userInfo">Thông tin</Link>
              </li>
            )}
            <li className="item" onClick ={()=>this.logOut()}><Link to={'/'}>Đăng xuất</Link></li>
          </ul>
        </div>
      </div>
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
