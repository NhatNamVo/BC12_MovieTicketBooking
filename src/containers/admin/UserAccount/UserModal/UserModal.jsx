import React, { Component } from "react";
import { GROUP_ID } from "settings/apiConfig";
import './UserModal.scss'
class UserModal extends Component {
  render() {
    const { isAddUser } = this.props;
    return (
      <>
        <div id="userModal" className="modal fade" id="userModal" tabIndex={-1}>
          <div className="modalContent">
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
                  <form action="" method="post" id="userInfo">
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          type="text"
                          name="taiKhoan"
                          className="form-input"
                          placeholder="Tài khoản"
                        />
                        <i class="fa fa-user"></i>
                      </div>
                      <small id="helpId" className="form-note">
                      </small>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          type="password"
                          name="matKhau"
                          className="form-input"
                          placeholder="Mật khẩu"
                        />
                        <i class="fa fa-lock"></i>
                      </div>
                      <small id="helpId" className="form-note">
                      </small>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          type="text"
                          name="email"
                          className="form-input"
                          placeholder="Địa chỉ email"
                        />
                        <i class="fa fa-envelope"></i>
                      </div>
                      <small id="helpId" className="form-note">
                      </small>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          type="text"
                          name="soDt"
                          className="form-input"
                          placeholder="Số điện thoại"
                        />
                        <i class="fa fa-phone"></i>
                      </div>
                      <small id="helpId" className="form-note">
                      </small>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          type="text"
                          name="hoTen"
                          className="form-input"
                          placeholder="Họ tên"
                        />
                        <i class="fa fa-credit-card"></i>
                      </div>
                      <small id="helpId" className="form-note">
                      </small>
                    </div>
                    <div className="form-group">
                      <div className="form-inputContainer">
                        <input
                          type="text"
                          name="maNhom"
                          className="form-input"
                          placeholder="Họ tên"
                          value={GROUP_ID} ReadOnly
                        />
                        <i class="fa fa-users"></i>
                      </div>
                      <small id="helpId" className="form-note">
                      </small>
                    </div>
                    <div class="form-inputContainer">
                      <label for=""></label>
                      <select class="form-select" name="" id="">
                        <option value='0'>Loại tài khoản</option>
                        <option value='1'>Khách hàng</option>
                        <option value='2'>Quản trị</option>
                      </select>
                      <i class="fa fa-magic"></i>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
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
