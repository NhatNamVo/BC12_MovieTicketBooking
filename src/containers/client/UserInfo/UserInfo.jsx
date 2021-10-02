import { actFetchBookingHistory } from "containers/shared/Auth/module/actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../UserInfo/UserInfo.scss";
import LichSuDatVe from "./LichSuDatVe/LichSuDatVe";
class UserInfo extends Component {
  render() {
    const { currentUser,thongTinDatVe } = this.props;
    return (
      <>
        <div
          className="user__banner"
          style={{ backgroundImage: "url(/images/user-bg.jpg)" }}
        >
          <div className="container">
            <div className="user__content">
              <div className="checkout-card">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Thông tin
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      
                    >
                      Lịch sử đặt vé
                    </a>
                  </li>
                  
                </ul>
                <div className="tab-content " id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="title">
                      <h4>Xin chào {currentUser.hoTen}</h4>
                      <small>
                        Với trang này, bạn sẽ quản lý được tất cả thông tin tài
                        khoản của mình.
                      </small>
                    </div>
                    <div className="payment-card">
                      <div className="container"></div>
                      <div className="row">
                        <div className="col-6">
                          <div className="user__item">
                            <p>Email: </p>
                            <span>{currentUser.email}</span>
                          </div>
                          <div className="user__item">
                            <p>Họ và tên: </p>
                            <span>{currentUser.hoTen}</span>
                          </div>
                          <div className="user__item">
                            <p>Số điện thoại: </p>
                            <span>{currentUser.soDT}</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="user__item">
                            <p>Tài khoản: </p>
                            <span>{currentUser.taiKhoan}</span>
                          </div>
                          {/* <div className="user__item">
                            <p>: </p>
                            <span>Nguyen Van A</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="user-btn">
                      <button className="btn seatChose-btn">Cập nhật</button>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <LichSuDatVe currentUser={currentUser} thongTinDatVe={thongTinDatVe}/>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount(){
    const currentUsername={
      taiKhoan:this.props.currentUser.taiKhoan ,
     }
    this.props.fetchBookingHistory(currentUsername)
  }
}
const mapStateToProps = (state) => ({
  currentUser: state.authUserReducer.currentUser,
  thongTinDatVe: state.authUserReducer.thongTinDatVe,
});
const mapDispatchToProps = (dispatch) => ({
  fetchBookingHistory: (userName)=>{
      dispatch(actFetchBookingHistory(userName));
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);
