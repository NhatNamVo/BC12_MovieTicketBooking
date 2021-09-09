import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import "containers/client/MovieDetail/MovieDetail.scss";
import { connect } from "react-redux";
import { actFetchMovieDetail } from "./module/movieDetailAction";
import {Link} from 'react-router-dom';
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaGooglePlusG,
  FaRegPlayCircle,
} from "react-icons/fa";

class MovieDetail extends Component {
  render() {
    const { movieDetail, loading, match, history } = this.props;
    console.log(this.props);
    if (loading) return <Loader />;
    return (
      movieDetail && (
        <div>
          <div
            className="details__banner img-fluid"
            style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
          >
            <div className="card container">
              <div className="row no-gutters details__banner__wrapper ">
                <div className="col-md-4 details__banner__img">
                  <img
                    className="img-fluid"
                    src={movieDetail.hinhAnh}
                    alt="hình ảnh"
                  />
                  <Link to={{
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
                        <FaFacebookF />
                        <a href="#"></a>
                      </li>
                      <li>
                        <FaTwitter />
                        <a href="#"></a>
                      </li>
                      <li>
                        <FaPinterestP />
                        <a href="#"></a>
                      </li>
                      <li>
                        <FaLinkedinIn />
                        <a href="#"></a>
                      </li>
                      <li>
                        <FaGooglePlusG />
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-pills card-header-pills">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* Theater */}
        </div>
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
