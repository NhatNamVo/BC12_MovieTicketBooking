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
import FailNotePopup from "./NotePopup/FailNotePopup";
import TimeLeftNote from "./NotePopup/TimeLeftNote";

class SeatPlan extends Component {
  state = {
    lineWidth: 0,
    theaterRoom: null,
    loadding: true,
    error: "",
    loaddingPost: false,
    seatChose: {
        choseSeat: [],
        totalPrice: 0,
    },
    orderTicket: {
      maLichChieu: 0,
      danhSachVe: [],
      taiKhoanNguoiDung: this.props.taiKhoan,
    },
    isBooking: false,
    isTimeLeft: false,
  };
  async componentDidMount() {
    const theaterRoomCode = this.props.match.params.showtimeId;
    const { orderTicket } = this.state;
    orderTicket.maLichChieu = parseInt(theaterRoomCode);
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
      maGhe: parseInt(seatId),
      giaVe: parseInt(price),
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
      if (this.state.orderTicket.danhSachVe.length == 0) {
        this.setState({isBooking:true})
      }
    }
  };

  bookingAgain =() => {
    this.setState({loaddingPost: false});
    window.location.reload();
  };
  booking = () => {
    this.setState({loaddingPost: true})
    const bookingBtn = document.querySelector('.seatChose-btn');
    bookingBtn.click();
  };
  checkTimeLeft = () => {
    this.setState({isTimeLeft: true});
  }
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
              <div className="col-md-12 col-lg-8 details__banner__content offset-lg-4 ">
                <h3 className="card-title">{movieInfo.tenPhim}</h3>
                <TheaterInfo movieDetail={movieInfo}/>
              </div>
            </div>
          </div>
        </div>
        <div className="book-tickets">
          <div className="container">
            <div className="book-wrapper seatPlan-movieInfo offset-lg-4">
              <div className="theater-infoTime">
                <div className="theater-date">{movieInfo.ngayChieu}</div>
                <div className="theater-time">{movieInfo.gioChieu}</div>
              </div>

              <div className="timeLeft">
                Thời gian: <TimeLeft timeLeftWidth={this.timeLeft} checkTimeLeft={this.checkTimeLeft}/>
              </div>
            </div>
          </div>
        </div>
        <div className="seat-container container">
          <div className="screen">
            {/* <img src="/images/theater.png" alt="man hinh" /> */}
            MÀN HÌNH
            </div>
          <SeatLayout
            seats={seat}
            choseSeat={this.choseSeat}
            cancelSeat={this.cancelSeat}
          />
        </div>
        <div className="seatInfo container">
          <div className="seatInfo-item">
            <img
            width="80%"
            className="seatItem"
            src="../images/seat-1-free.png"
            alt=""
          />
          <p>Ghế thường</p>
          </div>
          <div className="seatInfo-item">
            <img
            width="80%"
            className="seatItem"
            src="../images/seat-1-booked.png"
            alt=""
          />
          <p>Ghế Vip</p>
          </div>
          <div className="seatInfo-item">
            <img
            width="80%"
            className="seatItem"
            src="../images/seat-1.png"
            alt=""
          />
          <p>Ghế đã đặt</p>
          </div>
          <div className="seatInfo-item">
            <img
            width="80%"
            className="seatItem"
            src="../images/seat-chose.png"
            alt=""
          />
          <p>Ghế đang chọn</p>
          </div>
        </div>
        <div
          className="choseSeat-container container"
          onClick={this.postSeatChose}
        >
          <ChoseBox seatChose={this.state.seatChose} movieInfo={movieInfo} orderTicket={this.state.orderTicket} accessToken={this.props.accessToken} loaddingPost={this.state.loaddingPost}/>
        </div>
        <FailNotePopup history = {this.props.history} isBooking={this.state.isBooking} bookingAgain={this.bookingAgain}/>
        <TimeLeftNote history = {this.props.history} isTimeLeft={this.state.isTimeLeft} booking={this.booking} seatChose={this.state.seatChose} bookingAgain={this.bookingAgain} loaddingPost={this.state.loaddingPost}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.authUserReducer.currentUser.accessToken,
  taiKhoan: state.authUserReducer.currentUser.taiKhoan,
});

export default connect(mapStateToProps)(SeatPlan);
