import { actFetchBookingHistory } from "containers/shared/Auth/module/actions";
import React, { Component } from "react";
import "./LichSuDatVe.scss";
import { connect } from "react-redux";

class LichSuDatVe extends Component {
  render() {
    const { thongTinDatVe } = this.props;
    return (
      <>
        <div className="card  bookingHistory">
          <div className="bookingHistory-card">
            <div className="container">
              {thongTinDatVe.slice(0, 5).map((veDaDat, idx) => {
                return (
                  <div className="booking-item ">
                    <div className="row"
                    >
                      <div className="col-6 ">
                        <h5 className="card-title">{veDaDat.tenPhim}</h5>
                        <p className="card-text">
                          {`Ngày đặt ${new Date(
                            veDaDat.ngayDat
                          ).toLocaleDateString()}-${new Date(
                            veDaDat.ngayDat
                          ).toLocaleTimeString("it-IT", {
                            hour: "numeric",
                            minute: "numeric",
                          })}`}
                        </p>
                        <p className="card-text">Giá vé {veDaDat.giaVe}</p>
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
        </div>
      </>
    );
  }
}

export default LichSuDatVe;
