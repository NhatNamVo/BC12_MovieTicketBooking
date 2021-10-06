import React, { Component } from "react";
import { logoTheaterList } from "containers/shared/logoTheater/logoTheater";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-support">
              <div className="footer-title">Đơn vị hổ trợ</div>
              <div className="footer-branch">
                <div className="branch-logo">
                  <img src={logoTheaterList.cgv} alt="cgv" />
                </div>
                <div className="branch-logo">
                  <img src={logoTheaterList.lotte} alt="lotte" />
                </div>
                <div className="branch-logo">
                  <img src={logoTheaterList.galaxy} alt="galaxy" />
                </div>
                <div className="branch-logo">
                  <img src={logoTheaterList.bhd} alt="bhd" />
                </div>
                <div className="branch-logo">
                  <img src={logoTheaterList.cineStar} alt="cineStar" />
                </div>
                <div className="branch-logo">
                  <img src={logoTheaterList.mega} alt="mega" />
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <div className="footer-title">MovieTicket</div>
              <div className="footer-branchSloGan">
                Vé xem phim uy tín, chất lượng mới nổi hàng đầu Việt Nam
              </div>
              <div className="contact">
                <p className="contactItem">
                  Hotline:{" "}
                  <span>
                    <a href="tel:19001000">19001000</a>
                  </span>
                </p>
                <p className="contactItem">
                  Email:{" "}
                  <span>
                    <a href="mailto:movieTicket@gmail.com">
                      movieTicket@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
