import React, { Component } from "react";
import "./notePopup.scss";
import SeatChosed from "./SeatChosed";
class TimeLeftNote extends Component {
  state = {
    display: false,
    fall: false,
    messageShow: false,
  };
  componentDidMount() {
    this.wait = setTimeout(() => {
      this.setState({ display: true });
    }, 20);
  }
  bookingAgain = () => {
    this.setState({ fall: true, display: false });
    this.wait = setTimeout(() => {
      this.setState({ fall: false });
    }, 1000);
    this.wait = setTimeout(() => {
      this.props.bookingAgain();
    }, 1200);
  };
  booking = () => {
    this.props.booking();
  };
  cancleBooking = () => {
    this.props.history.goBack();
  };
  render() {
    const { isTimeLeft, seatChose, loaddingPost } = this.props;
    return (
      <div className={"Popup-container " + (isTimeLeft ? "show" : "")}>
        <div
          className={
            "BookingFail-box " +
            (this.state.display ? "display" : "") +
            (this.state.fall ? "fall" : "")
          }
        >
          <div className="BookingFail-note">
            {this.props.seatChose.choseSeat.length > 0 ? (
              <SeatChosed seatChose={seatChose.choseSeat} loaddingPost={loaddingPost}/>
            ) : (
              <p className="BookingFail-message">
                Thời gian đặt vé đã hết. Bạn chưa đặt vé?
              </p>
            )}
            <button
              className="BookingFail-confirm"
              onClick={
                this.props.seatChose.choseSeat.length
                  ? this.booking
                  : this.bookingAgain
              }
            >
              {this.props.seatChose.choseSeat.length ? "Đặt vé" : "Đặt lại"}
            </button>
            <span
              classname={
                "spinner-border spinner-border-sm " +
                (!loaddingPost ? "d-none" : "")
              }
              role="status"
              aria-hidden="true"
            />
            <button className="BookingFail-cancle" onClick={this.cancleBooking}>
              Thoát
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeLeftNote;
