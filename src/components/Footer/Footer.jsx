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
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import WOW from "wowjs";
class Footer extends Component {
  state = {
    open: true,
  };

  handleChangeOpen = (content) => {
    const { open } = this.state;
    const fa = document.querySelector(".fa");

    const info = document.querySelector(".footer-info");
    const branch = document.querySelector(".footer-branch");
    const contact = document.querySelector(".address-footer");

    if (open === false) {
      switch (content) {
        case "info":
          const faInfo = document.querySelector(".fa-infor");
          info.style.display = "none";
          faInfo.classList.add("fa-plus");
          faInfo.classList.remove("fa-minus");
          break;
        case "branch":
          const faBranch = document.querySelector(".fa-branch");
          branch.style.display = "none";
          faBranch.classList.add("fa-plus");
          faBranch.classList.remove("fa-minus");
          break;
        case "contact":
          const faContact = document.querySelector(".fa-contact");
          contact.style.display = "none";
          faContact.classList.add("fa-plus");
          faContact.classList.remove("fa-minus");
          break;
        default:
          break;
      }
      this.setState({
        open: true,
      });
    } else {
      switch (content) {
        case "info":
          const plus = document.querySelector(".fa-infor");
          info.style.display = "block";
          plus.classList.add("fa-minus");
          plus.classList.remove("fa-plus");
          break;
        case "branch":
          const plus2 = document.querySelector(".fa-branch");
          branch.style.display = "block";
          plus2.classList.add("fa-minus");
          plus2.classList.remove("fa-plus");
          break;
        case "contact":
          const plus3 = document.querySelector(".fa-contact");
          contact.style.display = "block";
          plus3.classList.add("fa-minus");
          plus3.classList.remove("fa-plus");
          break;
        default:
          break;
      }
      this.setState({
        open: false,
      });
    }
  };
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
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
              <div
                className="footer-logo wow fadeInLeft"
                data-wow-scroll="true"
              >
                <Link to="/">
                  <h4>Movie Ticket</h4>
                </Link>
              </div>

              <ul className="social wow fadeInRight" data-wow-scroll="true">
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
          <div className="container ">
            <div className="footer-middle  wow fadeInUp" data-wow-scroll="true">
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <div className="d-flex">
                    <h5 className="footer-middle-title">Liên kết nhanh</h5>
                    <span onClick={() => this.handleChangeOpen("info")}>
                      <i class="fa fa-plus fa-infor"></i>
                    </span>
                  </div>

                  <ul
                    className="footer-info fadeInUp "
                    style={{ display: "none" }}
                  >
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
                    <span onClick={() => this.handleChangeOpen("branch")}>
                      <i class="fa fa-plus fa-branch"></i>
                    </span>
                  </div>
                  <div className="footer-branch" style={{ display: "none" }}>
                    <div className="branch fadeInUp row col-sm-12 col-xs-12 ">
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
                </div>
                <div className="col-lg-4" id="contact">
                  <div className="d-flex">
                    <h5 className="footer-middle-title">Liên hệ</h5>
                    <span onClick={() => this.handleChangeOpen("contact")}>
                      <i class="fa fa-plus fa-contact"></i>
                    </span>
                  </div>
                  <div className="footer-contact">
                    <ul
                      className="address-footer fadeInUp"
                      style={{ display: "none" }}
                    >
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
                  <p>Copyright © 2021 </p>
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
