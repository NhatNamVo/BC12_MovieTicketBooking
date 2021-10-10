import React, { Component } from "react";
import { logoTheaterList } from "containers/shared/logoTheater/logoTheater";
import "./Footer.scss";
import cybersoftImg from "assets/image/MIN-OP1.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaPlus,
  FaRegEnvelope,
  FaTwitter,
  FaMinus,
} from "react-icons/fa";
class Footer extends Component {
  state={
    open:true,
  }
  handleChangeOpen = () => {
    const info = document.querySelector(".footer-info");
    const plus = document.querySelector(".fa-plus");
    plus.classList.add("fa-minus");
    plus.classList.remove("fa-plus");
    info.style.display = "block";
  };
  // handleChangeClose = () => {
  //   const info = document.querySelector(".footer-info");
  //   const minus = document.querySelector(".fa-minus");
  //   minus.classList.add("fa-plus");
  //   minus.classList.remove("fa-minus");
  //   info.style.display = "none";
  // };
  render() {
    const {open}=this.state;
    return (
      
      <footer>
        <div
          className="footer-section-box"
          style={{
            backgroundImage: "url(/images/footer-bg.png)",
          }}
        >
          <div className="container">
            <div className="footer-top">
              <div className="footer-logo">
                <Link to="/">
                  <h4>Movie Ticket</h4>
                </Link>
              </div>

              <ul className="social">
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaPinterestP />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaGooglePlusG />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="footer-middle ">
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <div className="d-flex">
                    <h5 className="footer-middle-title">Liên kết nhanh</h5>
                    <span onClick={() => this.handleChangeOpen()}>
                      <i class="fa fa-plus" >
                        
                      </i>
                      
                    </span>
                  </div>

                  <ul className="footer-info" style={{ display: "none" }}>
                    <li className="nav-item ">
                      <a className="nav-link " href="/" exact="true">
                        Trang chủ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/movie">
                        Danh sách phim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/theater">
                        Cụm rạp
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex">
                    <h5 className="footer-middle-title">Đối tác</h5>
                    <span>
                      <i class="fa fa-plus"></i>
                    </span>
                  </div>

                  <div
                    className="footer-branch row col-sm-12 col-xs-12 "
                    style={{ display: "none" }}
                  >
                    <a
                      href="https://www.cgv.vn/"
                      target="_blank"
                      className="branch-logo "
                    >
                      <img
                        className="footer-icon"
                        src={logoTheaterList.cgv}
                        alt="cgv"
                      />
                    </a>
                    <a
                      href="http://lottecinemavn.com"
                      target="_blank"
                      className="branch-logo"
                    >
                      <img
                        className="footer-icon"
                        src={logoTheaterList.lotte}
                        alt="lotte"
                      />
                    </a>
                    <a
                      href="http://galaxycine.vn"
                      target="_blank"
                      className="branch-logo"
                    >
                      <img
                        className="footer-icon"
                        src={logoTheaterList.galaxy}
                        alt="galaxy"
                      />
                    </a>
                    <a
                      href="http://bhdstar.vn"
                      target="_blank"
                      className="branch-logo"
                    >
                      <img
                        className="footer-icon"
                        src={logoTheaterList.bhd}
                        alt="bhd"
                      />
                    </a>
                    <a
                      href="https://cinestar.com.vn/"
                      target="_blank"
                      className="branch-logo"
                    >
                      <img
                        className="footer-icon"
                        src={logoTheaterList.cineStar}
                        alt="cineStar"
                      />
                    </a>
                    <a
                      href="https://www.megagscinemas.vn"
                      target="_blank"
                      className="branch-logo"
                    >
                      <img
                        className="footer-icon"
                        src={logoTheaterList.mega}
                        alt="mega"
                      />
                    </a>
                    <a
                      href="https://cybersoft.edu.vn/"
                      target="_blank"
                      className="branch-logo"
                    >
                      <img
                        className="footer-icon"
                        src={cybersoftImg}
                        alt="Cybersoft"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4" id="contact">
                  <div className="d-flex">
                    <h5 className="footer-middle-title">Liên hệ</h5>
                    <span>
                      <i class="fa fa-plus"></i>
                    </span>
                  </div>
                  <div className="footer-contact">
                    <ul className="address-footer" style={{ display: "none" }}>
                      <li className="item">
                        <div className="icon">
                          <FaMapMarkedAlt />
                        </div>
                        <p className="address">
                          123/4A Đường số 08, Phường Linh Chiểu, Thủ Đức, Thành
                          phố Hồ Chí Minh{" "}
                        </p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <FaPhoneAlt />
                        </div>
                        <p className="address">19001000</p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <FaRegEnvelope />
                        </div>
                        <p className="address">movieTicket@gmail.com </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <div className="copy-right d-flex">
                  <p>Copyright © 2021 All Rights Reserved By </p>
                  <a href="#">Ticket</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
