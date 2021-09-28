import React, { Component } from "react";
import "../MovieCheckout/Checkout.scss";
export default class Checkout extends Component {
  componentDidMount() {
    const { choseSeat } = this.props.location;
    console.log(choseSeat);
  }
  // viTri =(choseSeat)=>{
  //   for(let i=0;i<choseSeat.length;i++){
  //      choseSeat[i].toString();
  //   }
  // }
  render() {
    const { choseSeat, totalPrice,history } = this.props.location.seatChose;
    const { movieInfo } = this.props.location;
    console.log(this.props);
    return (
      <>
        <div
          className="checkout__banner "
          style={{ backgroundImage: `url(${movieInfo.hinhAnh})` }}
        ></div>
        <div className="checkout-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="checkout-card mb-0">
                  <h5>Hình thức thanh toán</h5>
                  <form className="payment-card">
                    <div>
                      <div className="form-group">
                        <label htmlFor="card-name">Tên ngân hàng</label>
                        <input
                          type="input"
                          className="form-control"
                          id="card-name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="card-number">Số tài khoản</label>
                        <input
                          type="input"
                          className="form-control"
                          id="card-number"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ticket-selected">
                  <h4 className="title">CHI TIẾT VÉ</h4>
                  <ul className="item-detail">
                    <li>
                      <h6 className="subtitle">{movieInfo.tenPhim}</h6>
                      <p className="info">{movieInfo.tenRap}</p>
                    </li>
                    <li>
                      <h6 className="subtitle">
                        <span>{movieInfo.tenCumRap}</span>
                        <span>{choseSeat.length}</span>
                      </h6>
                      <div className="info">
                        <span>{movieInfo.ngayChieu}</span>
                        <span>{movieInfo.gioChieu}</span>
                        <span>TICKETS</span>
                      </div>
                    </li>
                    <li>
                      <h6 className="subtitle">
                        <span>VỊ TRÍ</span>

                        <span>
                          {choseSeat.map((seat, idx) => {
                            if (idx > 0) {
                              return <span>, {seat}</span>;
                            }
                            return <span>{seat}</span>;
                          })}
                        </span>
                      </h6>
                    </li>
                    <li>
                      <h6 className="subtitle">
                        <span>GIÁ VÉ</span>
                        <span>{totalPrice}</span>
                      </h6>
                    </li>
                  </ul>
                  <div className="button">
                  <div className="btn btn-detail">THANH TOÁN</div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
