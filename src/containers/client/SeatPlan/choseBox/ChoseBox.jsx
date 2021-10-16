import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ChoseBox.scss";
class ChoseBox extends Component {
  state = {
    loaddingPost: false,
    isBooking: false,
  };
  bookingTicket = (e) => {
    if (this.props.seatChose.choseSeat.length === 0) {
      e.preventDefault();
    }
  };

  render() {
    const { seatChose } = this.props;
    const newTo = {
      pathname: "/checkout",
      seatChose: this.props.seatChose,
      movieInfo: this.props.movieInfo,
      orderTicket: this.props.orderTicket,
      accessToken: this.props.accessToken,
      match: this.props.match,
      history: this.props.history,
      location: this.props.location,
    };
    return (
      <div className="choseBox-content">
        <div className="seatChose-item seatChose-info">
          <div className="seatChose-item seat-chosed">
            <p className="title">Ghế chọn</p>
            <h3 className="result">
              {seatChose.choseSeat.map((seat, idx) => {
                if (idx > 0) {
                  return <span>, {seat}</span>;
                }
                return <span>{seat}</span>;
              })}
            </h3>
          </div>
          <div className=" seat-price">
            <p className="title">Tổng tiền</p>
            <h3 className="result">
              {seatChose.totalPrice === 0 ? "" : seatChose.totalPrice}
            </h3>
          </div>
        </div>

        <div className="seatChose-item">
          <Link
            to={newTo}
            className="seatChose-btn"
            onClick={this.bookingTicket}
          >
            Thanh toán
          </Link>
        </div>
      </div>
    );
  }
}

export default ChoseBox;
