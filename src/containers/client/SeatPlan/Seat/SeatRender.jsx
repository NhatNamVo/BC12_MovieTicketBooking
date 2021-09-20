import React, { Component } from "react";

class SeatRender extends Component {
  checkSeatStatus = () => {
    const {index, seatCheck } = this.props;
    if (seatCheck[index] === 0) {
      return (
        <img
          width="100%"
          className="seatItem"
          src="../images/seat-1.png"
          alt=""
        />
      );
    } else if (seatCheck[index] === 1) {
        return (
          <img
            width="100%"
            className="seatItem"
            src="../images/seat-1-free.png"
            alt=""
          />
        );
      }
      else if (seatCheck[index] === 2) {
        return (
          <img
            width="100%"
            className="seatItem"
            src="../images/seat-1-booked.png"
            alt=""
          />
        );
      }
      else if(seatCheck[index] === 3){
        return <img
        width="100%"
        className="seatItem"
        src="../images/seat-chose.png"
        alt=""
      />
      }
  };
  render() {
    const { daDat, giaVe, loaiGhe, maGhe, maRap, stt, tenGhe} =
      this.props.seat;
    const { index,widthContainer,colSeat,seatCheck} = this.props;

    return (
      <div
        className="seat-item"
        style={{ width: widthContainer+'%',}}
        data-index={index}
        data-price={giaVe}
        data-seatname={tenGhe}
        data-seattype = {loaiGhe}
        data-seatId = {maGhe}
      >
        {this.checkSeatStatus()}
        <p className={"seatName " + ((seatCheck[index] === 2)?"seat-choosed":"")}>{tenGhe}</p>
      </div>
    );
  }
}

export default SeatRender;
