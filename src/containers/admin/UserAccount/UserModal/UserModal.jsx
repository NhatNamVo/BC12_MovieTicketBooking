import React, { Component } from "react";
import FormAddAccount from "./FormAddAccount";
import { GROUP_ID } from "settings/apiConfig";
import "./UserModal.scss";
import FormUpdateAccount from "./FormUpdateAccount";
class UserModal extends Component {
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
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: GROUP_ID,
      maLoaiNguoiDung: "",
    },
    isNote: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.idx !== this.props.idx) {
      if (!this.props.isAddUser) {
        this.changeStateData();
      }
    }
  }
  changeStateData = () => {
    let data = {
      ...this.props.userAccountData[this.props.idx],
      maNhom: GROUP_ID,
    };
    this.setState({ data: data });
  };
  handleClick = (e) => {
    e.stopPropagation();
    const exitBtn = e.target.closest("#exitModal");
    const closeBtn = e.target.closest(".close");
    if (!!exitBtn || !!closeBtn) {
      this.deleteDataForm();
      this.props.changeIdx();
    }
  };
  dataInput = (data, messageError, isValidation) => {
    this.setState({
      isValidation: isValidation,
      data: data,
      messageError: messageError,
    });
  };
  closeModal = () => {
    this.deleteDataForm();
    this.props.changeIdx();
  };
  deleteDataForm = () => {
    let { data, messageError, isValidation } = this.state;
    data.taiKhoan = "";
    data.matKhau = "";
    data.email = "";
    data.soDt = "";
    data.hoTen = "";
    data.maLoaiNguoiDung = "";

    messageError.taiKhoan = "";
    messageError.matKhau = "";
    messageError.email = "";
    messageError.soDt = "";
    messageError.hoTen = "";
    messageError.maLoaiNguoiDung = true;

    isValidation = true;
    this.setState({
      data: data,
      messageError: messageError,
      isValidation: isValidation,
    });
  };
  submitForm = () => {
    const { taiKhoan, matKhau, email, soDt, hoTen, maLoaiNguoiDung } =
      this.state.data;
    let { messageError } = this.state;
    let isValid = true;
    for (let key in messageError) {
      if(key === "maLoaiNguoiDung"){
        if(!messageError[key]){
          isValid = false;
          break;
        }
      }
      else{
        if (messageError[key] !== "" && messageError[key] !== "true") {
          isValid = false;
          break;
        }
      } 
    }
    if (
      !taiKhoan ||
      !matKhau ||
      !email ||
      !soDt ||
      !hoTen ||
      !maLoaiNguoiDung
    ) {
      if (!taiKhoan) {
        messageError.taiKhoan = "Tài khoản trống";
      }
      if (!matKhau) {
        messageError.matKhau = "Mật khẩu trống";
      }
      if (!email) {
        messageError.email = "Email trống";
      }
      if (!soDt) {
        messageError.soDt = "Số điện thoại trống";
      }
      if (!hoTen) {
        messageError.hoTen = "Họ tên trống";
      }
      if (!maLoaiNguoiDung) {
        messageError.maLoaiNguoiDung = false;
      }
      this.setState({ messageError: messageError });
      return;
    } else {
      if (!this.state.isValidation || !isValid) {
        return;
      }
      if (this.props.isAddUser) {
        this.props.addNewUser(this.state.data);
        if (!this.props.loadingModal) {
          this.setState({ isNote: true });
          this.wait = setTimeout(() => {
            document.querySelector("#exitModal").click();
            this.setState({ isNote: false });
          }, 1500);
        }
      } else {
        this.props.updateUser(this.state.data);
        if (!this.props.loadingModal) {
          this.setState({ isNote: true });
          this.wait = setTimeout(() => {
            document.querySelector("#exitModal").click();
            this.setState({ isNote: false });
          }, 1500);
        }
      }
    }
  };
  render() {
    const { isAddUser } = this.props;
    return (
      <>
        <div
          className="modal fade"
          id="userModal"
          tabIndex={-1}
          onClick={this.closeModal}
        >
          <div className="modalContent" onClick={this.handleClick}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {isAddUser ? "Thêm tài khoản" : "Cập nhật tài khoản"}
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
                <div className="modal-body">
                  {!!isAddUser ? (
                    <FormAddAccount
                      dataInput={this.dataInput}
                      userAccountData={this.props.userAccountData}
                      data={this.state.data}
                      messageError={this.state.messageError}
                    />
                  ) : (
                    <FormUpdateAccount
                      dataInput={this.dataInput}
                      userAccountData={this.props.userAccountData}
                      data={this.state.data}
                      messageError={this.state.messageError}
                      currentAccountLogin={this.props.userAccount}
                    />
                  )}
                  {this.state.isNote ? (
                    <div className="modalNote">
                      <h5>{this.props.note}</h5>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    id="exitModal"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Thoát
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.submitForm}
                  >
                    {isAddUser ? "Thêm" : "Cập nhật"}
                    {this.props.loadingModal ? (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                      </div>
                    ) : (
                      ""
                    )}
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
export default UserModal;
