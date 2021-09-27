import React, { Component } from "react";
import "containers/client/Theater/Theater.scss";
import Loader from "components/Loader/Loader";
import { actFetchTheater } from "./module/theaterAction";
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import TheaterFilter from "./TheaterFilter/TheaterFilter";
import { Link } from "react-router-dom";
import "./Theater.scss";

class Theater extends Component {
  state = {
    sortVal: "BHDStar",
  };
  render() {
    const { match, history, location, theater, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="theater-content">
        <TheaterFilter
          theater={theater}
          match={match}
          history={history}
          location={location}
        />
        <div className="container">
          <div className="movie__detail__theater">
            <div className="header">
              {theater.map((heThongRap) => {
                return (
                  <div className="d-flex">
                    <img
                      src={heThongRap.logo}
                      style={{ width: "50px" }}
                      alt=""
                    />
                    <h1>{`Rạp ${heThongRap.tenHeThongRap}`}</h1>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-4 ">
                <div>
                  {theater.map((heThongRap) => {
                    return (
                      <div
                        className="nav flex-column nav-pills text-left icon-theater"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        {heThongRap.lstCumRap.map((cumRap, idx) => {
                          return (
                            <a
                              key={cumRap.maCumRap}
                              className={`nav-link ${
                                idx === 0 && "active"
                              } py-3`}
                              id="v-pills-home-tab"
                              data-toggle="pill"
                              href={`#${cumRap.maCumRap}`}
                              role="tab"
                              aria-controls="v-pills-home"
                              aria-selected="true"
                            >
                              <FaHeart />
                              {cumRap.tenCumRap}
                            </a>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-8">
                <div>
                  {theater.map((heThongRap) => {
                    return (
                      <div
                        className="tab-content movie__ticket"
                        id="v-pills-tabContent"
                      >
                        {heThongRap.lstCumRap.map((cumRap, idx) => {
                          return (
                            <div
                              className={`tab-pane fade show ${
                                idx === 0 && "active"
                              }`}
                              id={cumRap.maCumRap}
                              role="tabpanel"
                              aria-labelledby="v-pills-home-tab"
                            >
                              {cumRap.danhSachPhim.map((movie, idx) => {
                                return (
                                  <div className=" mb-5 text-left">
                                    <div className="ml-3 img d-flex">
                                      {/* hình ảnh bị lỗi */}
                                      <img
                                        src={movie.hinhAnh}
                                        style={{ width: "80px" }}
                                        alt={movie.tenPhim}
                                        onError={(e) => {
                                          e.target.onerror = null;
                                          e.target.src =
                                            "https://picsum.photos/75/75";
                                        }}
                                      />
                                      <div className="content pl-3">
                                        <h5 >
                                          {movie.tenPhim}
                                        </h5>

                                        <p>{`${cumRap.diaChi}`}</p>
                                        <Link
                                          to={`/movie-detail/${movie.maPhim}`}
                                          className="btn btn-detail "
                                        >
                                          Chi tiết
                                        </Link>
                                      </div>
                                    </div>

                                    <div className=" my-3 ticket">
                                      {movie.lstLichChieuTheoPhim
                                        .slice(0, 10)
                                        .map((lichChieu) => {
                                          return (
                                            <Link
                                              to={`/seat-plan/${lichChieu.maLichChieu}`}
                                              className="btn mr-3 mb-3 "
                                            >
                                              <div
                                                className="ticket__item d-flex"
                                                style={{
                                                  backgroundImage:
                                                    "url(/images/movie-ticket.png)",
                                                }}
                                              >
                                                {new Date(
                                                  lichChieu.ngayChieuGioChieu
                                                ).toLocaleTimeString("it-IT", {
                                                  hour: "numeric",
                                                  minute: "numeric",
                                                })}
                                              </div>
                                            </Link>
                                          );
                                        })}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.sortVal);
    this.props.fetchTheater(this.props.sortVal);
  }
}
const mapStateToProps = (state) => ({
  theater: state.theaterReducer.theater,
  loading: state.theaterReducer.loading,
  sortVal: state.theaterFilterReducer.sortVal,
});
const mapDispatchToProps = (dispatch) => ({
  fetchTheater: (maHeThongRap) => {
    dispatch(actFetchTheater(maHeThongRap));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Theater);
//làm lại dropdown
