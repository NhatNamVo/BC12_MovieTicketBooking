import React, { Component } from "react";

class SeatVip extends Component {
  checkSeatStatus = () => {
    const { index, seatVipCheck } = this.props;
    if (seatVipCheck[index] === 0) {
      return (
        <img
          width="100%"
          className="seatItem"
          src="../images/seat-1.png"
          alt=""
        />
      );
    } else if (seatVipCheck[index] === 1) {
      return (
        <img
          width="100%"
          className="seatItem"
          src="../images/seat-1-booked.png"
          alt=""
        />
      );
    } else {
      return (
        <img
          width="100%"
          className="seatItem"
          src="../images/seat-chose.png"
          alt=""
        />
      );
    }
  };
  runTime = 1;
  render() {
    const { daDat, giaVe, loaiGhe, maGhe, maRap, stt, tenGhe } =
      this.props.seat;
    const { index, widthContainer, colSeat, seatVipY,seatVipCheck } = this.props;
    let xSeat = 0;
    let seatName = "";
    if (index < colSeat) {
      xSeat = index;
      seatName = seatVipY[0] + (xSeat + 1);
    } else {
      let divVariable = Math.floor(index / colSeat);
      while (index - xSeat != colSeat * divVariable) {
        xSeat++;
      }
      seatName = seatVipY[divVariable] + (xSeat + 1);
    }

    return (
      <div
        className="seat-item"
        style={{ width: widthContainer + "%" }}
        data-index={index}
        data-price={giaVe}
        data-seatname={tenGhe}
        data-seattype={loaiGhe}
        data-nameDisplay = {seatName}
        data-seatId = {maGhe}
      >
        {this.checkSeatStatus()}
        <p className={"seatName "+((seatVipCheck[index] === 2)?"seat-choosed":"")}>{seatName}</p>
      </div>
    );
  }
}

export default SeatVip;
