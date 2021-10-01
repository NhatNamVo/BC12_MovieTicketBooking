import React, { Component } from "react";
import "../UserInfo/UserInfo.scss";
class UserInfo extends Component {
  render() {
    return (
      <>
        <div
          className="user__banner"
          style={{ backgroundImage: "url(/images/user-bg.jpg)" }}
        >
          <div className="user__content">
            <div className="container">
              <div className="row user-card">
                <div className="col-lg-8">
                  <div className="checkout-card mb-0">
                    <h5>Thông tin</h5>
                    <div className="payment-card">
                      <div className="container"></div>
                      <div className="row">
                        <div className="col-6">
                          <div className="user__item">
                            <p>Email: </p>
                            <span>Nguyen Van A</span>
                          </div>
                          <div className="user__item">
                            <p>Họ và tên: </p>
                            <span>Nguyen Van A</span>
                          </div>
                          <div className="user__item">
                            <p>Số điện thoại: </p>
                            <span>Nguyen Van A</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="user__item">
                            <p>Tài khoản: </p>
                            <span>Nguyen Van A</span>
                          </div>
                          {/* <div className="user__item">
                            <p>: </p>
                            <span>Nguyen Van A</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="user-btn">
                      <button className="btn seatChose-btn">Thay đổi</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserInfo;
