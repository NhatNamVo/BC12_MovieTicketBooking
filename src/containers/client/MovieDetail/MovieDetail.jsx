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


class MovieDetail extends Component {
  render() {
    const { movieDetail, loading, history } = this.props;
    console.log(this.props);
    if (loading) return <Loader />;
    return (
      movieDetail && (
        <>
          <div
            className="details__banner img-fluid"
            style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
          >
            <div className=" container">
              <div className="row no-gutters details__banner__wrapper ">
                <div className="col-md-4 details__banner__img">
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
                <div className="col-md-8  details__banner__content offset-lg-4 ">
                  <h3 className="card-title">{movieDetail.tenPhim}</h3>
                  <div className="tags">
                    <a href="#">English</a>
                    <a href="#">France</a>
                    <a href="#">Italy</a>
                    <a href="#">Germany</a>
                  </div>
                  <a href="#" className="button">
                    {movieDetail.tinhTrang}
                  </a>
                  <div className="time-social">
                    <div className="time">
                      <FaRegCalendarAlt />
                      <span className="p-1 pr-5 ">
                        {new Date(
                          movieDetail.ngayKhoiChieu
                        ).toLocaleDateString()}
                      </span>
                      <FaRegClock />
                      <span className="p-1">
                        {new Date(
                          movieDetail.ngayKhoiChieu
                        ).toLocaleTimeString()}
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
          <div className="book-tickets">
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
                    <span className="p-1 ">5.0</span>
                    <FaStar className="star" />
                  </div>
                  <div className="item">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <span className="p-1">0.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="detail__descrip padding-top padding-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="description">
                    <ul className="tab-menu nav nav-pills card-header-pills">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          DESCRIPTION
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          REVIEW
                        </a>
                      </li>
                    </ul>
                    <div className="card-body">
                      <h5 className="mb-5">The {movieDetail.tenPhim}</h5>
                      <p className="card-text ">{movieDetail.moTa}</p>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                    </div>
                  </div>
                  {/* Theater */}
                  <div className="movie__detail__theater">
                    <div className="header">
                      <h4>MOVIE THEATER</h4>
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
                                  />
                                </a>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="col-10">
                        <div className="tab-content movie__ticket" id="v-pills-tabContent">
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
                                        <img
                                          src={cumRap.hinhAnh}
                                          style={{ width: "40px"}} alt=""
                                        />
                                        <span className="pl-3">
                                          {cumRap.tenCumRap}
                                        </span>
                                        <div className="my-3 ticket">
                                          {cumRap.lichChieuPhim.map(
                                            (lichChieu) => {
                                              return (
                                                <Link
                                                  to={`/seat-plan/${lichChieu.maLichChieu}`}
                                                  style={{ backgroundImage: "url(/images/movie-ticket.png)" }}
                                                  className="btn mr-3 mb-2 ticket__item "
                                                >
                                                  {new Date(
                                                    lichChieu.ngayChieuGioChieu
                                                  ).toLocaleTimeString()}
                                                </Link>
                                              );
                                            }
                                          )}
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
                <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
                  <div className="widget-1 widget-offer">
                    <h3 className="title">TODAY OFFER</h3>
                    <div className="offer-body">
                      <div className="offer-item">
                        <div className="top">
                          <img
                            src={process.env.PUBLIC_URL + "/images/offer-1.png"}
                            alt=""
                          />
                        </div>
                        <div className="bottom">
                          <h6>
                            <a href="#">Brand Card Cashback Offer</a>
                          </h6>
                          <p>
                            It is a long established fact that a reader will be
                            distracted
                          </p>
                        </div>
                      </div>
                      <div className="offer-item">
                        <div className="top">
                          <img
                            src={process.env.PUBLIC_URL + "/images/offer-2.png"}
                            alt=""
                          />
                        </div>
                        <div className="bottom">
                          <h6>
                            <a href="#">Online Payment Offer</a>
                          </h6>
                          <p>
                            It is a long established fact that a reader will be
                            distracted
                          </p>
                        </div>
                      </div>
                      <div className="offer-item">
                        <div className="top">
                          <img
                            src={process.env.PUBLIC_URL + "/images/offer-3.png"}
                            alt=""
                          />
                        </div>
                        <div className="bottom">
                          <h6>
                            <a href="#">Bank Payment Cashback</a>
                          </h6>
                          <p>
                            It is a long established fact that a reader will be
                            distracted
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    );
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.fetchMovieDetail(movieId);
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
