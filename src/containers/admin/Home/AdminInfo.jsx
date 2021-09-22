import userApi from "apis/userApi";
import { GROUP_ID } from "settings/apiConfig";
import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import UserInfoUpdate from "./UserInfoUpdate";
import {connect} from 'react-redux';
import { actupdatePass,actLogOutUser } from "containers/shared/Auth/module/actions";
class AdminInfo extends Component {
  state = {
    adminInfo: null,
    loadding: true,
    infoAdminChange: {
      taiKhoan: this.props.currentUser.taiKhoan,
      matKhau: '',
    },
    error: '',
  };
  componentDidMount() {
    const {infoAdminChange} = this.state;
    userApi
      .fetchFindUserInfo(this.props.currentUser.taiKhoan)
      .then((res) => {
        infoAdminChange.pass = res.data[0].matKhau;
        this.setState({
          adminInfo: res.data[0],
          loadding: false,
          infoAdminChange: infoAdminChange,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  infoChange = (data) => {
    let {infoAdminChange,adminInfo} = this.state;
    adminInfo.matKhau = data;
    adminInfo = {...adminInfo, maNhom: GROUP_ID};
    console.log(adminInfo,infoAdminChange);
    userApi.postUpdateUser(adminInfo,this.props.currentUser.accessToken)
    .then(res=>{
      infoAdminChange.matKhau = res.data.matKhau;
      infoAdminChange.taiKhoan = res.data.taiKhoan;
      this.props.updatePassword(infoAdminChange);
    })
    .catch(error => {
      this.setState({error: error});
    });
  };
  render() {
    const { adminInfo, loadding, infoAdminChange } = this.state;
    if (loadding) {
      return <Loader/>;
    }
    const { email, hoTen, matKhau, soDt, taiKhoan } = adminInfo;
    return (
      <>
        <div className="card m-auto border-0" style={{ width: "40%" }}>
          <img
            src="./images/userImage.jpg"
            className="card-img-top m-auto"
            width="60%"
            alt="..."
          />
          <div className="card-body row m-auto" style={{ width: "100%" }}>
            <ul className="list-group text-left">
              <li className="list-group-item border-0">
                <p className="font-weight-bold m-0">Họ và tên:</p>
              </li>
              <li className="list-group-item border-0">
                <p className="font-weight-bold m-0">Tài khoản:</p>
              </li>
              <li className="list-group-item border-0">
                <p className="font-weight-bold m-0">Mật khẩu:</p>
              </li>
              <li className="list-group-item border-0">
                <p className="font-weight-bold m-0">Số điện thoại:</p>
              </li>
              <li className="list-group-item border-0">
                <p className="font-weight-bold m-0">Email:</p>
              </li>
            </ul>
            <ul className="list-group text-left">
              <li className="list-group-item border-0">
                <p className="m-0">{hoTen}</p>
              </li>
              <li className="list-group-item border-0">
                <p className="m-0">{taiKhoan}</p>
              </li>
              <li className="list-group-item border-0">
                <p className="m-0">{matKhau}</p>
              </li>
              <li className="list-group-item border-0">
                <p className="m-0">{soDt}</p>
              </li>
              <li className="list-group-item border-0">
                <p className="m-0">{email}</p>
              </li>
            </ul>
          </div>
          <div className="row justify-content-between mx-0">
            <button className="btn btn-primary" data-toggle="modal" data-target="#editUserInfo">Sửa mật khẩu</button>
            <button className="btn btn-primary">Đăng xuất</button>
          </div>
        </div>
        <UserInfoUpdate infoAdminChange= {infoAdminChange} infoChange={this.infoChange}/>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
});
const mapDispatchToProps = (dispatch) =>({
  updatePassword: updatedUser => {
    dispatch(actupdatePass(updatedUser));
  },
  logOut: () => {
    dispatch(actLogOutUser());
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(AdminInfo);
