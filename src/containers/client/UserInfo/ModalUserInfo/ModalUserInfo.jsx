import React, { Component } from "react";
import { GROUP_ID } from "settings/apiConfig";
import "./ModalUserInfo.scss";
import FormUpdateUser from "./FormUpdateUser";
import { connect } from "react-redux";
import { actUpdateUser, actUpdateUserClient } from "containers/admin/UserAccount/Modules/action";
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
      soDt: this.props.currentUser.soDT,     
      maNhom: GROUP_ID,
      maLoaiNguoiDung: this.props.currentUser.maLoaiNguoiDung,
      hoTen: this.props.currentUser.hoTen,
    },
    isNote: false,
  };
  
  changeStateData = () => {
    let data = {
      ...this.props.userAccountData[this.props.idx],
      maNhom: GROUP_ID, 
    };
    this.setState({ data: data });
  };
  // handleClick = (e) => {
  //   e.stopPropagation();
  //   const exitBtn = e.target.closest("#exitModal");
  //   const closeBtn = e.target.closest(".close");
  //   if (!!exitBtn || !!closeBtn) {
  //     this.deleteDataForm();
  //     this.props.changeIdx();
  //   }
  // };
  updateUser = (data) => {
    console.log(data);
    this.props.putUserUpdate(data,this.props.accessToken);
  }

  dataInput = (data, messageError, isValidation) => {
    this.setState({
      isValidation: isValidation,
      data: data,
      messageError: messageError,
      
    });
    
  };
  
  submitForm = () => {
    const { taiKhoan, matKhau, email, soDT, hoTen} =
      this.props.currentUser;
    let { messageError, data } = this.state;
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
      !soDT ||
      !hoTen 
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
   console.log(this.state.data);
    return (
      <>
        <div
          id="modalUserInfo"
          className="modal fade "
          tabIndex="-1"
          onClick={this.closeModal}
        >
          <div className="modalContent" onClick={this.handleClick}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                     Cập nhật tài khoản
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
                  
                    <FormUpdateUser
                    // openModal={()=>this.openModal(this.props.currentUser)}
                    currentUser={this.props.currentUser}
                      dataInput={this.dataInput}
                      userAccountData={this.props.userAccountData}
                      data={this.state.data}
                      messageError={this.state.messageError}
                      currentAccountLogin={this.props.userAccount}
                    />
                  
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
                    className="btn seatChose-btn"
                    onClick={()=>this.submitForm()}
                    
                  >
                    Cập nhật
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
const mapStateToProps = (state) => ({
  userAccountData: state.UserAccountReducer.userAccountData,
  userAccount: state.authUserReducer.currentUser.taiKhoan,

  currentUser: state.authUserReducer.currentUser,
  loadingModal: state.UserAccountReducer.loadingModal,
  accessToken: state.authUserReducer.currentUser.accessToken,

  note: state.UserAccountReducer.note,
});
const mapDispatchToProps=((dispatch) =>( {
  putUserUpdate: (user,token) =>{
    dispatch(actUpdateUserClient(user,token));
  }
}))
export default connect(mapStateToProps,mapDispatchToProps) (ModalUserInfo);

