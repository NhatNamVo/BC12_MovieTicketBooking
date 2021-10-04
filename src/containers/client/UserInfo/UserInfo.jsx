import userApi from "apis/userApi";
import Loader from "components/Loader/Loader";
import { actFetchBookingHistory, actupdatePass } from "containers/shared/Auth/module/actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { GROUP_ID } from "settings/apiConfig";
import "../UserInfo/UserInfo.scss";
import LichSuDatVe from "./LichSuDatVe/LichSuDatVe";
import ModalUserInfo from "./ModalUserInfo/ModalUserInfo";
class UserInfo extends Component {
  state = {
    userInfo: null,
    loadding: true,
    infoShow: false,
    infoAdminChange: {
      taiKhoan: this.props.currentUser.taiKhoan,
      matKhau: "",
    },
    error: "",
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
          this.setState({infoShow: true,})
        },200);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
  render() {
    const {userInfo, infoAdminChange}=this.state;
    const { currentUser, thongTinDatVe, loadding } = this.props;
    // if (loadding){
    //   return <Loader/>
    // }

    return (
      <>
        <div
          className="user__banner"
          style={{ backgroundImage: "url(/images/user-bg.jpg)" }}
        >
          <div className="container">
            <div className="">
              <ModalUserInfo />
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
                        <h4>Xin chào {currentUser.hoTen},</h4>
                        <small>
                          Với trang này, bạn sẽ quản lý được tất cả thông tin
                          tài khoản của mình.
                        </small>
                      </div>
                      <div className="payment-card">
                        <div className="row">
                          <div className="col-6 item-left">
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
                            
                          </div>
                        </div>
                      </div>
                      <div className="user-btn">
                              <button
                                id="userInfoUpdate"
                                className="btn seatChose-btn "
                                data-toggle="modal"
                                data-target="#modalUserInfo"
                              >
                                Sửa thông tin
                              </button>
                            </div>
                    </div>
                    {/* Lịch sử đặt vé */}
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <LichSuDatVe
                        currentUser={currentUser}
                        thongTinDatVe={thongTinDatVe}
                      />
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
  componentDidMount() {
    const currentUsername = {
      taiKhoan: this.props.currentUser.taiKhoan,
    };
    this.props.fetchBookingHistory(currentUsername);
  }
}
const mapStateToProps = (state) => ({
  loadding: state.authUserReducer.loadding,
  currentUser: state.authUserReducer.currentUser,
  thongTinDatVe: state.authUserReducer.thongTinDatVe,
});
const mapDispatchToProps = (dispatch) => ({
  fetchBookingHistory: (userName) => {
    dispatch(actFetchBookingHistory(userName));
  },
  updatePassword: (updatedUser) => {
    dispatch(actupdatePass(updatedUser));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
