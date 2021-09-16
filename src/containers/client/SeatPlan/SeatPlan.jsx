import React, { Component } from "react";
import Loader from "components/Loader/Loader";
import theaterBanner from "assets/image/theater_banner/theaterBanner.jpg";
import "containers/client/MovieDetail/MovieDetail.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaGooglePlusG,
  FaRegPlayCircle,
  FaShoppingCart,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import TheaterInfo from "./TheaterInfo/TheaterInfo";

export default class SeatPlan extends Component {
  render() {
    const movieDetail = {
      maLichChieu: 16207,
      tenCumRap: "BHD Star Cineplex - Bitexco",
      tenRap: "Rạp 9",
      diaChi: "L3-Bitexco Icon 68, 2 Hải Triều, Q.1",
      tenPhim: "Lừa Đểu Gặp Lừa Đảo  ",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/lua-deu-gap-lua-dao_gp03.jpg",
      ngayChieu: "01/01/2019",
      gioChieu: "10:01",
    };
    return (
      <div>
        <div
          className="details__banner img-fluid"
          style={{
            backgroundImage: `url(${theaterBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" container">
            <div className="row no-gutters details__banner__wrapper ">
              <div className="col-md-4 details__banner__img">
                <img
                  className="img-fluid"
                  src={movieDetail.hinhAnh}
                  alt="hình ảnh"
                />
                <FaRegPlayCircle />
              </div>
              <div className="col-md-8  details__banner__content offset-lg-4 ">
                <h3 className="card-title">{movieDetail.tenPhim}</h3>
                <TheaterInfo movieDetail={movieDetail} />
              </div>
            </div>
          </div>
        </div>
        <div className="book-tickets">
          <div className="container">
            <div className="book-wrapper offset-lg-4">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
