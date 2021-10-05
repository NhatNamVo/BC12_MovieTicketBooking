import React, { Component } from "react";
import { GROUP_ID } from "settings/apiConfig";
import "./ModalUserInfo.scss";
import { connect } from "react-redux";
import {
  actUpdateUser,
  actUpdateUserClient,
} from "containers/admin/UserAccount/Modules/action";
class ModalUserInfo extends Component {
  state = {
    isValidation: true,
    messageError: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maLoaiNguoiDung: true,
    },
    data: {
      taiKhoan: this.props.currentUser.taiKhoan,
      matKhau: this.props.currentUser.matKhau,
      email: this.props.currentUser.email,
      soDt: this.props.currentUser.soDt,
      maNhom: GROUP_ID,
      maLoaiNguoiDung: this.props.currentUser.maLoaiNguoiDung,
      hoTen: this.props.currentUser.hoTen,
    },
    oldHidden: false,
    newHidden: false,
    isNote: false,
  };

  changeStateData = () => {
    let data = {
      ...this.props.userAccountData[this.props.idx],
      maNhom: GROUP_ID,
    };
    this.setState({ data: data });
  };
  updateUser = (data) => {
    console.log(data.matKhau);
    this.props.putUserUpdate(data, this.props.accessToken);
  };

  dataInput = (data, messageError, isValidation) => {
    // console.log(data);
    this.setState({
      isValidation: isValidation,
      data: data,
      messageError: messageError,
    });
  };

  submitForm = () => {
    const { taiKhoan, matKhau, email, soDT, hoTen } = this.props.currentUser;
    let { messageError, data } = this.state;
    let isValid = true;
    for (let key in messageError) {
      if (key === "maLoaiNguoiDung") {
        if (!messageError[key]) {
          isValid = false;
          break;
        }
      } else {
        if (messageError[key] !== "" && messageError[key] !== "true") {
          isValid = false;
          break;
        }
      }
    }
    if (!taiKhoan || !matKhau || !email || !soDT || !hoTen) {
      if (!taiKhoan) {
        messageError.taiKhoan = "Tài khoản trống";
      }
      if (!matKhau) {
        messageError.matKhau = "Mật khẩu trống";
      }
      if (!email) {
        messageError.email = "Email trống";
      }
      if (!soDT) {
        messageError.soDt = "Số điện thoại trống";
      }
      if (!hoTen) {
        messageError.hoTen = "Họ tên trống";
      }
      this.setState({ messageError: messageError });
      return;
    } else {
      if (!this.state.isValidation || !isValid) {
        return;
      }

      this.updateUser(this.state.data);
      if (!this.props.loadingModal) {
        this.setState({ isNote: true });
        this.wait = setTimeout(() => {
          document.querySelector("#exitModal");
          this.setState({ isNote: false });
        }, 1500);
      }
    }
  };
  render() {
    const {oldHidden,newHidden} = this.state;
    return (
      <>
        <form action="" method="post" autoComplete="off">
          <div>
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
          <div className="form-group">
            <div className="form-inputContainer">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-envelope "> Email:</i>
                </div>
                <div className="col-6 form-input">
                    <input
                      type="text"
                      name="email"
                      className="form-input"
                      // defaultValue={currentUser.email}
                      onChange={this.handleChange}
                    />
                </div>
              </div>
              {/* {this.changeStatus(this.props.messageError.email)} */}
            </div>
          </div>
          <div className="form-group">
            <div className="form-inputContainer">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-phone "> Số điện thoại:</i>
                </div>
                <div className="col-6 form-input">
                    <input
                      type="text"
                      name="soDt"
                      className="form-input "
                      onChange={this.handleChange}
                    />
                </div>
              </div>
              {/* {this.changeStatus(this.props.messageError.soDt)} */}
            </div>
          </div>
          <div className="form-group">
            <div className="form-inputContainer">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-credit-card "> Họ và tên:</i>
                </div>
                <div className="col-6 form-input">
                    <input
                      type="text"
                      name="hoTen"
                      className="form-input "
                      // defaultValue={currentUser.hoTen}
                      onChange={this.handleChange}
                    />
                </div>
              </div>
              {/* {this.changeStatus(this.props.messageError.hoTen)} */}
            </div>
          </div>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  userAccountData: state.UserAccountReducer.userAccountData,
  userAccount: state.authUserReducer.currentUser.taiKhoan,

  currentUser: state.authUserReducer.currentUser,
  loadingModal: state.UserAccountReducer.loadingModal,
  accessToken: state.authUserReducer.currentUser.accessToken,

  note: state.UserAccountReducer.note,
});
const mapDispatchToProps = (dispatch) => ({
  putUserUpdate: (user, token) => {
    dispatch(actUpdateUserClient(user, token));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalUserInfo);
