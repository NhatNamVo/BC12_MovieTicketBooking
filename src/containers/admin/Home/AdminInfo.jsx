import movieApi from "apis/movieApi";
import React, { Component } from "react";
import UserInfoUpdate from "./UserInfoUpdate";
class AdminInfo extends Component {
  user = {
    taiKhoan: "angellam",
    matKhau: "123456",
  };
  state = {
    adminInfo: null,
    loadding: true,
    infoAdminChange: null,
  };
  componentDidMount() {
    console.log(this.user);
    movieApi
      .fetchFindUserInfo(this.user.taiKhoan)
      .then((res) => {
        this.setState({
          adminInfo: res.data.content[0],
          loadding: false,
          infoAdminChange: res.data.content[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  infoChange = (data) => {
    this.setState({
        infoAdminChange: data,
    })
  };
  render() {
    const { adminInfo, loadding, infoAdminChange } = this.state;
    if (loadding) {
      return "....";
    }
    console.log(adminInfo);
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
            <button className="btn btn-primary" data-toggle="modal" data-target="#editUserInfo">Sửa thông tin</button>
            <button className="btn btn-primary">Đăng xuất</button>
          </div>
        </div>
        <UserInfoUpdate infoAdminChange= {infoAdminChange} infoChange={this.infoChange}/>
      </>
    );
  }
}

export default AdminInfo;
