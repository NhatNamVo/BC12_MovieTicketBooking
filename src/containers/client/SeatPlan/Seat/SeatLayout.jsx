import React, { Component } from "react";
import SeatRender from "./SeatRender";
import "./Seat.scss";
class SeatLayout extends Component {
  state = {
    seatCheck: null,
    col: 16,
    widthContainer: null,
  };
  componentDidMount() {
    const { seats } = this.props;
    const width = 100/this.state.col;
    const seatCheck = seats.map((seat) => {
      if (seat.daDat === true) {
        return 0;
      } else {
        if(seat.loaiGhe === 'Thuong'){
          return 1;
        }
        if(seat.loaiGhe === 'Vip'){
          return 2;
        }
      }
    });
    this.setState({
      seatCheck: seatCheck,
      widthContainer: width,
    });
  }
  handleChoseSeat = (event) => {
    const seatChose = event.target.closest(".seat-item");
    if (!!seatChose) {
      const index = seatChose.dataset.index;
      const price = seatChose.dataset.price;
      const seatId = seatChose.dataset.seatid;
      const seatType = seatChose.dataset.seattype;
      const seatName = seatChose.dataset.seatname;
      const { seatCheck} = this.state;
       switch(seatCheck[index]){
         case 1:
          seatCheck[index]=3;
          this.props.choseSeat(seatId,price,seatName);
          break;
         case 2:
          seatCheck[index]=3;
          this.props.choseSeat(seatId,price,seatName);
          break;
          case 3:
            if(seatType==='Thuong'){
              seatCheck[index]=1;
            }
            else if(seatType==='Vip'){
              seatCheck[index]=2;
            }
            this.props.cancelSeat(seatId,price,seatName);
         case 0:
          break;
       }
      this.setState({
        seatCheck: seatCheck,
      });
      
    }
  };
  render() {
    const { seatCheck,widthContainer,col} = this.state;
    return (
      seatCheck && (
        <div className="seatLayout-container" onClick={this.handleChoseSeat}>
          <div
            className="seatnormal-container m-auto row"
            style={{ width: "100%" }}
          >
            {this.props.seats.map((seat, idx) => {
              return (
                <SeatRender
                  key={idx}
                  seat={seat}
                  index={idx}
                  seatCheck={seatCheck}
                  widthContainer={widthContainer}
                  colSeat = {col}
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
