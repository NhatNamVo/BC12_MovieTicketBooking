import React, { Component } from "react";

class SeatNormal extends Component {
  checkSeatStatus = () => {
    const {index, seatNormalCheck } = this.props;
    if (seatNormalCheck[index] === 0) {
      return (
        <img
          width="100%"
          className="seatItem"
          src="../images/seat-1.png"
          alt=""
        />
      );
    } else if (seatNormalCheck[index] === 1) {
        return (
          <img
            width="100%"
            className="seatItem"
            src="../images/seat-1-free.png"
            alt=""
          />
        );
      }
      else if(seatNormalCheck[index] === 2){
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
    const { index,widthContainer,colSeat,seatNormalY,seatNormalCheck} = this.props;
    let xSeat = 0;
    let seatName = '';
    if(index<colSeat){
        xSeat=index;
        seatName = seatNormalY[0]+(xSeat+1);
    }else{
        let divVariable = Math.floor(index/colSeat);
        while(index-xSeat!=colSeat*divVariable){
            xSeat++;
        }
        seatName = seatNormalY[divVariable]+(xSeat+1);
    }
    return (
      <div
        className="seat-item"
        style={{ width: widthContainer+'%',}}
        data-index={index}
        data-price={giaVe}
        data-seatname={tenGhe}
        data-seattype = {loaiGhe}
        data-nameDisplay = {seatName}
        data-seatId = {maGhe}
      >
        {this.checkSeatStatus()}
        <p className={"seatName " + ((seatNormalCheck[index] === 2)?"seat-choosed":"")}>{seatName}</p>
      </div>
    );
  }
}

export default SeatNormal;
