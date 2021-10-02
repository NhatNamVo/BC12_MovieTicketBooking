import { actFetchBookingHistory } from "containers/shared/Auth/module/actions";
import React, { Component } from "react";
import  "./LichSuDatVe.scss"
import { connect } from "react-redux";

class LichSuDatVe extends Component {
  render() {
    const { thongTinDatVe } = this.props;

    console.log(thongTinDatVe);
    return (
      <>
        <div className="card  bookingHistory" style={{ maxWidth: 540 }}>
          
            <div className="payment-card">
              {thongTinDatVe.slice(0, 3).map((veDaDat,idx) => {
                return (
                  <div className="booking-item">
                      <div className="container">
                      <h5 className="card-title">{veDaDat.tenPhim}</h5>
                    {/* {veDaDat.map((gheDat) => {
                      return (
                        <p className="card-text">{gheDat.tenHeThongRap}</p>
                      );
                    })} */}

                    <p className="card-text">
                      {`Ngày đặt ${new Date(veDaDat.ngayDat).toLocaleDateString()}-${new Date(veDaDat.ngayDat).toLocaleTimeString("it-IT",{
                          hour: "numeric",minute: "numeric"
                      })}`}
                    </p>
                    <p className="card-text">
                      Giá vé {veDaDat.giaVe}
                    </p>
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
