import React, { Component } from "react";
import Loader from "components/Loader/Loader";
import "containers/client/MovieDetail/MovieDetail.scss";
import { connect } from "react-redux";
import { actFetchMovieDetail } from "./module/movieDetailAction";
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
import WOW from "wowjs";
class MovieDetail extends Component {
  kiemTraLichChieu = () => {
    const { movieDetail } = this.props;
    console.log(movieDetail);
    if (movieDetail.heThongRapChieu.length === 0) {
      return (
        <div className="check ">
          <h3>Chưa có lịch chiếu</h3>
        </div>
      );
    }
  };
  
  render() {
    const { movieDetail, loading, history } = this.props;

    if (loading) return <Loader />;
    return (
      movieDetail && (
        <div className="movie-detail">
          <div
            className="details__banner img-fluid"
            style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
          >
            <div className=" container">
              <Link
                to={{
                  pathname: "/trailer/" + movieDetail.maPhim,
                  state: { background: history.location },
                }}
                href={movieDetail.trailer}
                className="video__button video__popup trailer "
              >
                <FaRegPlayCircle />
              </Link>
              <div className="row no-gutters details__banner__wrapper ">
                <div className="col-md-4 details__banner__img wow fadeScale" data-wow-sroll="true" data-wow-duration="3s" >
                  <img
                    className="img-fluid"
                    src={movieDetail.hinhAnh}
                    alt="hình ảnh"
                  />
                  <Link
                    to={{
                      pathname: "/trailer/" + movieDetail.maPhim,
                      state: { background: history.location },
                    }}
                    href={movieDetail.trailer}
                    className="video__button video__popup"
                  >
                    <FaRegPlayCircle />
                  </Link>
                </div>
                <div className="col-md-8  details__banner__content offset-lg-4 wow fadeScale" data-wow-scroll="true" data-wow-duration="4s">
                  <h3 className="card-title">{movieDetail.tenPhim}</h3>
                  <div className="tags">
                    <a href="#">Anh</a>
                    <a href="#">Pháp</a>
                    <a href="#">Ý</a>
                    <a href="#">Đức</a>
                  </div>
                  <a href="#" className="button">
                    {movieDetail.tinhTrang}
                  </a>
                  <div className="time-social">
                    <div className="time">
                      <FaRegCalendarAlt />
                      <span className="p-1 p-3 ">
                        {new Date(
                          movieDetail.ngayKhoiChieu
                        ).toLocaleDateString()}
                      </span>
                      <FaRegClock />
                      <span className="p-1 p-3">
                        {new Date(movieDetail.ngayKhoiChieu).toLocaleTimeString(
                          "it-IT",
                          {
                            hour: "numeric",
                            minute: "numeric",
                          }
                        )}
                      </span>
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
              </div>
            </div>
          </div>
          <div className="book-tickets wow fadeInUp" data-wow-scroll="true" data-wow-duration="4s">
            <div className="container">
              <div className="book-wrapper offset-lg-4">
                <div className="left-side">
                  <div className="item">
                    <FaShoppingCart />
                    <span className="p-1">92k+</span>
                  </div>
                  <div className="item">
                    <FaRegHeart />
                    <span className="p-1">80k+</span>
                  </div>
                  <div className="item">
                    <span className="p-1 ">{movieDetail.danhGia}</span>
                    <FaStar className="star" />
                  </div>
                  <div className="item rate">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <span className="p-1">{movieDetail.danhGia}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="detail__descrip padding-top padding-bottom">
            <div className="container">
              <div className="row ">
                <div className="col-lg-9 wow fadeInUp"
                data-wow-scroll="true "
                data-wow-duration="3s">
                  <div className="description container ">
                    <ul className="tab-menu nav nav-pills card-header-pills ">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          <h5>MÔ TẢ</h5>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <h5>BÌNH LUẬN</h5>
                        </a>
                      </li>
                    </ul>
                    <div className="card-body  ">
                      <h5 className="mb-5"> {movieDetail.tenPhim}</h5>
                      <p className="card-text ">{movieDetail.moTa}</p>
                    </div>
                  </div>
                  {/* Theater */}
                  <div className="movie__detail__theater " >
                    <div className="header">
                      <h4>LỊCH CHIẾU</h4>
                    </div>
                    <div className="row">
                      <div className="col-2">
                        <div
                          className="nav flex-column nav-pills text-left icon-theater"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          {movieDetail.heThongRapChieu.map(
                            (heThongRap, idx) => {
                              return (
                                <a
                                  key={heThongRap.maHeThongRap}
                                  className={`nav-link ${
                                    idx === 0 && "active"
                                  }`}
                                  id="v-pills-home-tab"
                                  data-toggle="pill"
                                  href={`#${heThongRap.maHeThongRap}`}
                                  role="tab"
                                  aria-controls="v-pills-home"
                                  aria-selected="true"
                                >
                                  <img
                                    src={heThongRap.logo}
                                    style={{
                                      width: "30px",
                                      marginRight: "6px",
                                    }}
                                    alt="logo He thong rap"
                                  />
                                </a>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="col-10">
                        <div
                          className="tab-content movie__ticket"
                          id="v-pills-tabContent"
                        >
                          {this.kiemTraLichChieu()}
                          {movieDetail.heThongRapChieu.map(
                            (heThongRap, idx) => {
                              return (
                                <div
                                  className={`tab-pane fade show ${
                                    idx === 0 && "active"
                                  }`}
                                  id={heThongRap.maHeThongRap}
                                  role="tabpanel"
                                  aria-labelledby="v-pills-home-tab"
                                >
                                  {heThongRap.cumRapChieu.map((cumRap) => {
                                    return (
                                      <div className="text-left">
                                        <Link
                                          to={`/theater`}
                                          className="theater-name"
                                        >
                                          <h6 className="pl-3 ">
                                            {cumRap.tenCumRap}
                                          </h6>
                                        </Link>
                                        <div className="my-3 ml-3 ticket row">
                                          {cumRap.lichChieuPhim
                                            .slice(0, 10)
                                            .map((lichChieu) => {
                                              return (
                                                <div
                                                  className="ticket__item mr-3 mb-3  "
                                                  style={{
                                                    backgroundImage:
                                                      "url(/images/movie-ticket.png)",
                                                  }}
                                                >
                                                  <Link
                                                    to={`/seat-plan/${lichChieu.maLichChieu}`}
                                                    className=" btn-ticket  "
                                                  >
                                                    <div>
                                                      {new Date(
                                                        lichChieu.ngayChieuGioChieu
                                                      ).toLocaleTimeString(
                                                        "it-IT",
                                                        {
                                                          hour: "numeric",
                                                          minute: "numeric",
                                                        }
                                                      )}
                                                    </div>
                                                  </Link>
                                                </div>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-50 ">
                  <div className="widget-1 widget-offer ">
                    <h3 className="title">GỢI Ý</h3>
                    <div className="offer-body">
                      <div className="offer-item ">
                        <div className="top">
                          <img
                            src={process.env.PUBLIC_URL + "/images/offer-1.png"}
                            alt=""
                          />
                        </div>
                        <div className="bottom">
                          <h6>
                            <a href="#">Ưu đãi cho thẻ ngân hàng</a>
                          </h6>
                          <p>
                            Hoàn tiền lên đến 10% khi thanh toán bằng thẻ ngân
                            hàng CyberBank.
                          </p>
                        </div>
                      </div>
                      <div className="offer-item ">
                        <div className="top">
                          <img
                            src={process.env.PUBLIC_URL + "/images/offer-2.png"}
                            alt=""
                          />
                        </div>
                        <div className="bottom">
                          <h6>
                            <a href="#">Thanh toán nhanh gọn</a>
                          </h6>
                          <p>
                            Hoàn tất đặt vé nhanh chỉ với các bước đơn giản.
                          </p>
                        </div>
                      </div>
                      <div className="offer-item ">
                        <div className="top">
                          <img
                            src={process.env.PUBLIC_URL + "/images/offer-3.png"}
                            alt=""
                          />
                        </div>
                        <div className="bottom">
                          <h6>
                            <a href="#">Ưu đãi thẻ thành viên</a>
                          </h6>
                          <p>
                            Đăng ký để được tích điểm nhận ngay ưu đãi khi đặt
                            vé.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.fetchMovieDetail(movieId);
    new WOW.WOW({
      live: false,
    }).init();
  }
}
const mapStateToProps = (state) => ({
  movieDetail: state.movieDetailReducer.movieDetail,
  loading: state.movieDetailReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMovieDetail: (movieId) => {
    dispatch(actFetchMovieDetail(movieId));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
