import userApi from "apis/userApi";
import React, { Component } from "react";
import { GROUP_ID } from "settings/apiConfig";
import "./FormChangePass.scss";
import { formValid } from "settings/formValidation";
import { FaLock, FaLockOpen, FaUserLock } from "react-icons/fa";
class FormUpdateUser extends Component {
  state = {
    userInfo: null,
    loadding: true,
    infoShow: false,
    infoAdminChange: {
      taiKhoan: this.props.currentUser.taiKhoan,
      matKhau: "",
    },
    oldHidden: true,
    newHidden: true,
    error: "",
  };
  handleClick = (event) => {
    event.stopPropagation();
    const oldPass = document.querySelector(".user-OldPass");
    const newPass = document.querySelector(".user-NewPass");
    const oldPassDisplay = event.target.closest("#oldPass i");
    const newPassDisplay = event.target.closest("#newPass i");
    const changePassBtn = event.target.closest("#changePassBtn");
    const exitBtn = event.target.closest("#exitBtn");
    const closeBtn = event.target.closest("button.close");

    if (!!oldPassDisplay) {
      this.setState({ oldHidden: !this.state.oldHidden });
      if (!!this.state.oldHidden) {
        oldPass.type = "text";
      } else {
        oldPass.type = "password";
      }
    }
    if (!!newPassDisplay) {
      this.setState({ newHidden: !this.state.newHidden });
      if (!!this.state.newHidden) {
        newPass.type = "text";
      } else {
        newPass.type = "password";
      }
    }
    if (!!changePassBtn) {
      const { infoAdminChange, infoChange } = this.props;
      if (oldPass.value != infoAdminChange.pass) {
        this.setState({ error: "Mật khẩu cũ không đúng!" });
        return;
      }
      if (newPass.value === "") {
        this.setState({ error: "Mật khẩu mới không được để trống" });
        return;
      }
      this.props.infoChange(newPass.value);
    }
    if (!!closeBtn || !!exitBtn) {
      this.removeItemValue();
    }
  };
  removeItemValue = () => {
    const oldPass = document.querySelector(".user-OldPass");
    const newPass = document.querySelector(".user-NewPass");
    oldPass.value = "";
    newPass.value = "";
    this.setState({ oldHidden: true, newHidden: true, error: "" });
  };
  componentDidMount() {
    const { infoAdminChange } = this.state;
    userApi
      .fetchFindUserInfo(this.props.currentUser.taiKhoan)
      .then((res) => {
        infoAdminChange.pass = res.data[0].matKhau;
        this.setState({
          userInfo: res.data[0],
          loadding: false,
          infoAdminChange: infoAdminChange,
        });
        this.wait = setTimeout(() => {
          this.setState({ infoShow: true });
        }, 200);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // Đổi password
  infoChange = (data) => {
    let { infoAdminChange, userInfo } = this.state;
    userInfo.matKhau = data;
    userInfo = { ...userInfo, maNhom: GROUP_ID };
    console.log(userInfo, infoAdminChange);
    userApi
      .postUpdateUser(userInfo, this.props.currentUser.accessToken)
      .then((res) => {
        infoAdminChange.matKhau = res.data.matKhau;
        infoAdminChange.taiKhoan = res.data.taiKhoan;
        this.props.updatePassword(infoAdminChange);
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let isValidation = true;
    let data = this.props.data;
    let messageError = this.props.messageError;
    const status = formValid(
      name,
      value,
      this.props.userAccountData,
      messageError
    );
    data = { ...data, [name]: value };
    isValidation = status.isvalid;
    messageError = status.messageError;
    data = data;
    this.props.dataInput(data, messageError, isValidation);
  };
  updateUser = (data) => {
    this.props.putUserUpdate(data, this.props.accessToken);
  };
  changeStatus = (status) => {
    if (status === "") {
      return <span className="inputStatus"></span>;
    } else if (status === "true") {
      return (
        <span className="inputStatus">
          <i class="fa fa-check"></i>
        </span>
      );
    } else {
      return (
        <span className="inputStatus error">
          <i class="fa fa-exclamation-circle"></i>
          <div className="errorMessage">{status}</div>
        </span>
      );
    }
  };

  render() {
    const { userInfo, infoAdminChange, oldHidden, newHidden } = this.state;
    const { currentUser, loadding } = this.props;
    const isUserLogin =
    this.props.currentAccountLogin === this.props.data.taiKhoan;
    // console.log(this.props.data);
    // console.log(currentUser);

    return (
      <>
        <form action="" method="post" autoComplete="off">
          <div className="form-group">
            <div className="form-inputContainer ">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-user "> Tài khoản:</i>
                </div>
                <div className="col-6">
                  <input
                    id="taiKhoan"
                    type="text"
                    name="taiKhoan"
                    defaultValue={this.props.data.taiKhoan}
                    onChange={this.handleChange}
                    disabled="true"
                  />
                </div>
              </div>
              {this.changeStatus(this.props.messageError.taiKhoan)}
            </div>
          </div>
          {/* Mật khẩu collapse */}
          <div >
            <div className="row">
              <div className="title-left justify-content-between align-items-bottom col-6">
                <input
                  type="checkbox"
                  className=" form-input"
                  id="exampleCheck1"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Sửa mật khẩu
                </label>
              </div>
            </div>
            <div className="form-update-password mt-3" onClick={this.handleClick}>
              <div className="collapse " id="collapseExample">
                <div id="oldPass" className="password-item row ">
                  <div className="title-left col-6">
                  <p>Mật khẩu cũ:</p>

                  </div>

                  <div className="col-6 ">
                    <input
                      autoComplete="off"
                      type="password"
                      className={
                        " user-OldPass " + (this.state.error ? "error" : "")
                      }
                      name="matKhau"
                      id=""
                    />
                    {oldHidden ? (
                      <i class="fa fa-eye-slash"></i>
                    ) : (
                      <i class="fa fa-eye"></i>
                    )}
                  </div>
                </div>
                <div id="newPass" className="password-item mt-1 row ">
                  <div className=" title-left col-6">
                    <p> Mật khẩu mới:</p>
                  </div>
                  <div className="col-6 ">
                    <input
                      autoComplete="off"
                      type="password"
                      className={
                        "user-NewPass " +
                        (this.state.error === "Mật khẩu mới không được để trống"
                          ? "error"
                          : "")
                      }
                      name="newPass"
                      id=""
                    />
                    {newHidden ? (
                      <i class="fa fa-eye-slash"></i>
                    ) : (
                      <i class="fa fa-eye"></i>
                    )}
                  </div>
                </div>
                <div className="note">{this.state.error}</div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-inputContainer">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-envelope "> Email:</i>
                </div>
                <div className="col-6">
                  {isUserLogin ? (
                    <input
                      type="text"
                      name="email"
                      className="form-input"
                      defaultValue={currentUser.email}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      type="text"
                      name="email"
                      className="form-input"
                      placeholder="Địa chỉ email"
                      defaultValue={currentUser.email}
                      onChange={this.handleChange}
                    />
                  )}
                </div>
              </div>
              {this.changeStatus(this.props.messageError.email)}
            </div>
          </div>
          <div className="form-group">
            <div className="form-inputContainer">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-phone "> Số điện thoại:</i>
                </div>
                <div className="col-6">
                  {isUserLogin ? (
                    <input
                      type="text"
                      name="soDt"
                      className="form-input "
                      defaultValue={currentUser.soDT}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      type="text"
                      name="soDt"
                      className="form-input"
                      defaultValue={currentUser.soDT}
                      onChange={this.handleChange}
                    />
                  )}
                </div>
              </div>
              {this.changeStatus(this.props.messageError.soDt)}
            </div>
          </div>
          <div className="form-group">
            <div className="form-inputContainer">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-credit-card "> Họ và tên:</i>
                </div>
                <div className="col-6">
                  {isUserLogin ? (
                    <input
                      type="text"
                      name="hoTen"
                      className="form-input "
                      defaultValue={currentUser.hoTen}
                      onChange={this.handleChange}
                    />
                  ) : (
                    <input
                      type="text"
                      name="hoTen"
                      className="form-input "
                      value={currentUser.hoTen}
                      onChange={this.handleChange}
                    />
                  )}
                </div>
              </div>

              {this.changeStatus(this.props.messageError.hoTen)}
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default FormUpdateUser;
