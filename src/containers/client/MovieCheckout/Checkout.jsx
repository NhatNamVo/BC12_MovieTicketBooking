import React, { Component } from "react";
import "../MovieCheckout/Checkout.scss";
export default class Checkout extends Component {
  render() {
    return (
      <div
        className="theater__banner hero-area"
        style={{ backgroundImage: "url(/images/banner-1.jpg)" }}
      >
        <div className="checkout-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="checkout-card mb-0">
                  <h5>Hình thức thanh toán</h5>
                  <form className="payment-card">
                    <div>
                      <div className="form-group">
                        <label htmlFor="card-name">
                          Tên ngân hàng
                        </label>
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
                  <ul>
                    <li>
                      <h6 className="subtitle">HOME</h6>
                      <p className="info"></p>
                    </li>
                    <li>
                      <h6 className="subtitle">
                        <span>BHD</span>
                        <span>04</span>
                      </h6>
                      <div className="info">
                        <span>14/08/2021</span>
                        <span>TICKET</span>
                      </div>
                    </li>
                    <li>
                      <h6 className="subtitle">
                        <span>VỊ TRÍ</span>
                        <span>A13, A14</span>
                      </h6>
                    </li>
                    <li>
                      <h6 className="subtitle">
                        <span>GIÁ VÉ</span>
                        <span>150000</span>
                      </h6>
                    </li>
                  </ul>
                  <ul>
                    <div className="btn btn-detail">THANH TOÁN</div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
