import React, { Component } from "react";
import { formValid } from "settings/formValidation";
class FormUpdateUser extends Component {
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
    // console.log(data);
    this.props.dataInput(data, messageError, isValidation);
  };
  updateUser = (data) => {
    this.props.putUserUpdate(data,this.props.accessToken);
  }
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

    const{currentUser}=this.props;
    const isUserLogin =
    this.props.currentAccountLogin === this.props.data.taiKhoan;
    console.log(this.props.data);
    console.log(currentUser);

    return (

      <>
        <form action="" method="post" autoComplete="off">
          <div className="form-group">
            <div className="form-inputContainer ">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-user "> Tài khoản:</i>
                </div>
                <input
                  id="taiKhoan"
                  type="text"
                  name="taiKhoan"
                  className=" col-6"
                  defaultValue={this.props.data.taiKhoan}
                  onChange={this.handleChange}
                  disabled="true"

                />
              </div>
              {this.changeStatus(this.props.messageError.taiKhoan)}
            </div>
          </div>
          <div className="form-group">
            <div className="form-inputContainer ">
              <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-lock "> Mật khẩu:</i>
                </div>
                <input
                  id="matKhau"
                  type="password"
                  name="matKhau"
                  className=" col-6"                  
                  defaultValue={currentUser.matKhau}
                  onChange={this.handleChange}
                  disabled="true"
                />
              </div>

              {this.changeStatus(this.props.messageError.matKhau)}
            </div>
          </div>
          <div className="form-group">
            <div className="form-inputContainer">
            <div className="row">
                <div className="title-left col-6">
                  <i class="fa fa-envelope "> Email:</i>
                </div>
                {isUserLogin ? (
                  <input
                    type="text"
                    name="email"
                    className="form-input col-6"
                    
                    defaultValue={currentUser.email}
                    onChange={this.handleChange}
                  />
                ) : (
                  <input
                    type="text"
                    name="email"
                    className="form-input col-6"
                    placeholder="Địa chỉ email"
                    defaultValue={currentUser.email}
                    onChange={this.handleChange}
                  />
                )}
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
                {isUserLogin ? (
                  <input
                    type="text"
                    name="soDt"
                    className="form-input col-6"
                    
                    defaultValue={currentUser.soDT}
                    onChange={this.handleChange}
                  />
                ) : (
                  <input
                    type="text"
                    name="soDt"
                    className="form-input col-6"
                    
                    defaultValue={currentUser.soDT}
                    onChange={this.handleChange}
                  />
                )}
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
                {isUserLogin ? (
                  <input
                    type="text"
                    name="hoTen"
                    className="form-input col-6"
                    
                    defaultValue={currentUser.hoTen}
                    onChange={this.handleChange}
                  />
                ) : (
                  <input
                    type="text"
                    name="hoTen"
                    className="form-input col-6"
                    
                    value={currentUser.hoTen}
                    onChange={this.handleChange}
                  />
                )}
              </div>
              {this.changeStatus(this.props.messageError.hoTen)}
            </div>
          </div>

          
        </form>
      </>
    );
  }
}
export default(FormUpdateUser);
