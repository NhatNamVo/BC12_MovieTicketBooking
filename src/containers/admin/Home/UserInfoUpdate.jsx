import React, { Component } from "react";
import "./AdminUserModal.scss";
import { connect } from "react-redux";
class UserInfoUpdate extends Component {
  state = {
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
  render() {
    const { infoAdminChange,loadding} = this.props;
    const { oldHidden, newHidden } = this.state;
    return (
      <>
        <div
          className="modal fade"
          id="editUserInfo"
          tabIndex={-1}
          aria-labelledby="editUserInfo"
          aria-hidden="true"
          onClick={this.removeItemValue}
        >
          <div className="modalContent" onClick={this.handleClick}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editUserInfo">
                    Thay đổi mật khẩu
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div
                  className="userInfo-item modal-body m-auto"
                  style={{ width: "75%" }}
                >
                  <div className="row justify-content-between align-items-center my-1">
                    <p className="font-weight-bold m-0">Tài khoản:</p>
                    <input
                      type="text"
                      className="form-control"
                      value={infoAdminChange.taiKhoan}
                      name="taiKhoan"
                      id=""
                      readOnly
                    />
                  </div>
                  <div
                    id="oldPass"
                    className="userInfo-item row justify-content-between align-items-center my-1"
                  >
                    <p className="font-weight-bold m-0">Mật khẩu cũ:</p>
                    <input
                      type="password"
                      className={
                        "form-control user-OldPass " +
                        (this.state.error ? "error" : "")
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
                  <div
                    id="newPass"
                    className="userInfo-item row justify-content-between align-items-center my-1"
                  >
                    <p className="font-weight-bold m-0">Mật khẩu mới:</p>
                    <input
                      type="password"
                      className={
                        "form-control user-NewPass " +
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
                  <div className="note">{this.state.error}</div>
                </div>

                <div className="modal-footer">
                  <button
                    id="changePassBtn"
                    type="button"
                    className="btn btn-primary"
                  >
                    Đổi mật khẩu
                    <span
                      className={
                        "spinner-border spinner-border-sm " +
                        (!loadding ? "d-none" : "")
                      }
                      role="status"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    id="exitBtn"
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Thoát
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loadding: state.authUserReducer.loadding,
});
export default connect(mapStateToProps)(UserInfoUpdate);
