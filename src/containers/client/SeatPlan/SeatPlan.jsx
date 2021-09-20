import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "components/Loader/Loader";
import theaterBanner from "assets/image/theater_banner/theaterBanner.jpg";
import "containers/client/MovieDetail/MovieDetail.scss";
import "./SeatPlan.scss";
import TheaterInfo from "./TheaterInfo/TheaterInfo";
import TimeLeft from "./TimeLeft/TimeLeft";
import ticketApi from "apis/ticketApi";
import SeatLayout from "./Seat/SeatLayout";
import ChoseBox from "./choseBox/ChoseBox";
import { connection } from "index";

class SeatPlan extends Component {
  state = {
    lineWidth: 0,
    theaterRoom: null,
    loadding: true,
    error: "",
    seatChose: {
        choseSeat: [],
        totalPrice: 0,
    },
    orderTicket: {
      maLichChieu: 0,
      danhSachVe: [],
      taiKhoanNguoiDung: this.props.taiKhoan,
    },
  };
  // timeLeft = (width) => {
  //   this.setState({ lineWidth:width});
  // }
  async componentDidMount() {
    const theaterRoomCode = this.props.match.params.showtimeId;
    const { orderTicket } = this.state;
    orderTicket.maLichChieu = theaterRoomCode;
    try {
      const { data } = await ticketApi.fetchTheaterRoom(theaterRoomCode);
      this.setState({
        theaterRoom: data,
        loadding: false,
        orderTicket: orderTicket,
      });
    } catch (error) {
      this.setState({
        error: error,
        loadding: false,
        orderTicket: orderTicket,
      });
    }
  }
  choseSeat = (seatId, price, seatName) => {
    const { orderTicket, seatChose } = this.state;
    const ticket = {
      maGhe: seatId,
      giaVe: price,
    };
    orderTicket.danhSachVe.push(ticket);
    seatChose.choseSeat.push(seatName);
    seatChose.totalPrice += parseInt(price);
    this.setState({ seatChose: seatChose, orderTicket: orderTicket });
  };
  cancelSeat = (seatId, price, seatName) => {
    const { orderTicket, seatChose } = this.state;
    const seatIdx = orderTicket.danhSachVe.findIndex((seat) => {
      return seat.maGhe === seatId;
    });
    orderTicket.danhSachVe.splice(seatIdx, 1);
    const seatNameIdx = seatChose.choseSeat.findIndex((seat) => {
      return seat === seatName;
    });
    seatChose.choseSeat.splice(seatNameIdx, 1);
    seatChose.totalPrice -= price;
    this.setState({ orderTicket: orderTicket, seatChose: seatChose });
  };
  postSeatChose = (e) => {
    const paymentBtn = e.target.closest(".seatChose-btn");
    if (!!paymentBtn) {
      if (this.state.orderTicket.danhSachVe.length != 0) {
        console.log("danhsachghedangdat", this.state.orderTicket.danhSachVe);
        console.log("taiKhoan", this.props.taiKhoan);
        console.log("maLichChieu", this.state.orderTicket.maLichChieu);
        console.log(this.props.accessToken);
      }
    }
  };
  render() {
    if (this.state.loadding) return <Loader />;
    const { thongTinPhim, danhSachGhe } = this.state.theaterRoom;
    const movieInfo = thongTinPhim;
    const seat = danhSachGhe;

    return (
      <div className="seatPlan-container">
        <div
          className="details__banner img-fluid"
          style={{
            backgroundImage: `url(${theaterBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row no-gutters details__banner__wrapper ">
              <div className="col-md-4 details__banner__img">
                <img
                  className="img-fluid"
                  src={movieInfo.hinhAnh}
                  alt="hình ảnh"
                />
              </div>
              <div className="col-md-8  details__banner__content offset-lg-4 ">
                <h3 className="card-title">{movieInfo.tenPhim}</h3>
                <TheaterInfo movieDetail={movieInfo} />
              </div>
            </div>
          </div>
        </div>
        <div className="book-tickets">
          <div className="container">
            <div className="book-wrapper seatPlan-movieInfo offset-lg-4">
              <div
                className="borderSeatPlan"
                style={{ width: this.state.lineWidth + "%" }}
              ></div>
              <div className="theater-infoTime">
                <div className="theater-date">{movieInfo.ngayChieu}</div>
                <div className="theater-time">{movieInfo.gioChieu}</div>
              </div>

              <div className="timeLeft">
                Time Left: <TimeLeft timeLeftWidth={this.timeLeft} />
              </div>
            </div>
          </div>
        </div>
        <div className="seat-container container">
          <div className="screen">Man hinh</div>
          <SeatLayout
            seats={seat}
            choseSeat={this.choseSeat}
            cancelSeat={this.cancelSeat}
          />
        </div>
        <div
          className="choseSeat-container container"
          onClick={this.postSeatChose}
        >
          <ChoseBox seatChose={this.state.seatChose} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.authUserReducer.currentUser.accessToken,
  taiKhoan: state.authUserReducer.currentUser.taiKhoan,
});

export default connect(mapStateToProps)(SeatPlan);
