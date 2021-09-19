import React, { Component } from "react";
import SeatNormal from "./SeatNormal";
import SeatVip from "./SeatVip";
import "./Seat.scss";
class SeatLayout extends Component {
  state = {
    seatNormal: null,
    seatVip: null,
    seatNormalCheck: null,
    seatVipCheck: null,
    seatNormalY: null,
    seatVipY: null,
    col: 16,
    normalSeatRow: 4,
    vipSeatRow: 4,
    widthContainer: null,
  };
  componentDidMount() {
    const { seats } = this.props;
    const width = 100/this.state.col;
    const seatNormal = seats
      .filter((seat) => {
        return seat.loaiGhe === "Thuong";
      })
      .slice(0, this.state.normalSeatRow*this.state.col);
    const seatVip = seats
      .filter((seat) => {
        return seat.loaiGhe === "Vip";
      })
      .slice(0, this.state.vipSeatRow*this.state.col);
    const seatNormalCheck = seatNormal.map((seat) => {
      if (seat.daDat === true) {
        return 0;
      } else {
        return 1;
      }
    });
    const seatVipCheck = seatVip.map((seat) => {
      if (seat.daDat === true) {
        return 0;
      } else {
        return 1;
      }
    });
    const seatNormalLength = seatNormal.length/this.state.col;
    const seatVipLength = seatVip.length/this.state.col;
    let seatNormalY = [];
    let seatVipY = [];
    for(let i = 0; i<seatNormalLength; i++) {
      let acssCharacter = 65;
      acssCharacter +=i;
      const letter = String.fromCharCode(acssCharacter);
      seatNormalY.push(letter);
    }
    for(let i = seatNormalLength; i< seatNormalLength+seatVipLength; i++){
      let acssCharacter = 65;
      acssCharacter +=i;
      const letter = String.fromCharCode(acssCharacter);
      seatVipY.push(letter);
    }
    this.setState({
      seatNormal: seatNormal,
      seatVip: seatVip,
      seatNormalCheck: seatNormalCheck,
      seatVipCheck: seatVipCheck,
      widthContainer: width,
      seatNormalY: seatNormalY,
      seatVipY: seatVipY,
    });
  }
  handleChoseSeat = (event) => {
    const seatChose = event.target.closest(".seat-item");
    if (!!seatChose) {
      const index = seatChose.dataset.index;
      const price = seatChose.dataset.price;
      const seatType = seatChose.dataset.seattype;
      const nameDisplay = seatChose.dataset.namedisplay;
      const seatId = seatChose.dataset.seatid;
      const { seatNormalCheck, seatVipCheck } = this.state;
      if (seatType === "Thuong") {
       switch(seatNormalCheck[index]){
         case 1:
          seatNormalCheck[index]=2;
          this.props.choseSeat(seatId,price,nameDisplay);
          break;
         case 2:
          seatNormalCheck[index]=1;
          this.props.cancelSeat(seatId,price,nameDisplay);
          break;
         case 0:
          break;
       }
      }
      if (seatType === "Vip") {
        switch(seatVipCheck[index]){
          case 1:
            seatVipCheck[index]=2;
            this.props.choseSeat(seatId,price,nameDisplay);
           break;
          case 2:
            seatVipCheck[index]=1;
            this.props.cancelSeat(seatId,price,nameDisplay);
           break;
          case 0:
           break;
        }
      }
      this.setState({
        seatNormalCheck: seatNormalCheck,
        seatVipCheck: seatVipCheck,
      });
      
    }
  };
  render() {
    const { seatNormal, seatVip, seatNormalCheck, seatVipCheck,widthContainer,col,seatNormalY,seatVipY} = this.state;
    return (
      seatNormal && (
        <div className="seatLayout-container" onClick={this.handleChoseSeat}>
          <div
            className="seatnormal-container m-auto row"
            style={{ width: "95%" }}
          >
            {seatNormal.map((seat, idx) => {
              return (
                <SeatNormal
                  key={idx}
                  seat={seat}
                  index={idx}
                  seatNormalCheck={seatNormalCheck}
                  widthContainer={widthContainer}
                  colSeat = {col}
                  seatNormalY={seatNormalY}
                />
              );
            })}
          </div>
          <div
            className="seatvip-container m-auto row"
            style={{ width: "95%" }}
          >
            {seatVip.map((seat, idx) => {
              return (
                <SeatVip
                  key={idx}
                  seat={seat}
                  index={idx}
                  seatVipCheck={seatVipCheck}
                  widthContainer={widthContainer}
                  colSeat = {col}
                  seatVipY={seatVipY}
                />
              );
            })}
          </div>
        </div>
      )
    );
  }
}

export default SeatLayout;
