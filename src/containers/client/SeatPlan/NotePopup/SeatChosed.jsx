import React, { Component } from "react";

class SeatChosed extends Component {
  render() {
    const { seatChose, loaddingPost } = this.props;
    if (loaddingPost) {
      return (
        <p className="BookingFail-message">
          <span
            className={
              "spinner-border spinner-border-sm " +
              (!loaddingPost ? "d-none" : "")
            }
            role="status"
            aria-hidden="true"
          />
        </p>
      );
    }
    return (
      <>
        <p className="BookingFail-message">
          Thời gian đặt vé đã hết.
          <p>
            Ghế đang chọn:
            {seatChose.map((seat, idx) => {
              if (idx > 0) {
                return <span>, {seat}</span>;
              }
              return <span>{" " + seat}</span>;
            })}
          </p>
          <p>Tiếp tục đặt vé?</p>
        </p>
      </>
    );
  }
}

export default SeatChosed;
