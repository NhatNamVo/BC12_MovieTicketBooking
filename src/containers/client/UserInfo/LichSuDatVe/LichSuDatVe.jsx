import { actFetchBookingHistory } from "containers/shared/Auth/module/actions";
import React, { Component } from "react";
import "./LichSuDatVe.scss";
import { connect } from "react-redux";

class LichSuDatVe extends Component {
  render() {
    const { thongTinDatVe } = this.props.currentUser;
    return (
      <>
        <div className={"bookingHistory " + (this.props.isBookingHistory? "show ":'') + (this.props.isDisplay?'display':'')}>
          <div className="bookingHistory-card">
            {thongTinDatVe
              .slice(thongTinDatVe.length - 5, thongTinDatVe.length)
              .map((veDaDat, idx) => {
                return (
                  <div key={idx} className="booking-item">
                    <h5 className="card-title">{veDaDat.tenPhim}</h5>
                    <div className="row">
                      <div className="col-6 timeBooking">
                        
                        <p className="card-text">
                          {`Ngày đặt: ${new Date(
                            veDaDat.ngayDat
                          ).toLocaleDateString()}-${new Date(
                            veDaDat.ngayDat
                          ).toLocaleTimeString("it-IT", {
                            hour: "numeric",
                            minute: "numeric",
                          })}`}
                        </p>
                        <p className="card-text">Giá vé: {veDaDat.giaVe}</p>
                      </div>
                      <div className="col-6">
                        {veDaDat.danhSachGhe.slice(0, 1).map((gheDat) => {
                          return (
                            <div className="gheDat">
                              <h6 className="card-text">
                                {gheDat.tenHeThongRap}
                              </h6>
                            </div>
                          );
                        })}
                        {veDaDat.danhSachGhe.map((gheDat) => {
                          return (
                            <span>
                              {`${gheDat.tenRap}-Ghế ${gheDat.tenGhe}`}
                              <br></br>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default LichSuDatVe;
