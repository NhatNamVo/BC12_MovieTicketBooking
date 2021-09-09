import withMovieLayout from "hocs/withMovieLayout";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieTimePlan from "../TimePlan/MovieTimePlan";
import "./MovieItem.scss";
class MovieItem extends Component {
  state = {
    src: "./images/assets/images/cinemaDefault.jpg",
    errored: false,
  };
  errorImgFlag = true;
  render() {
    const { tenPhim, hinhAnh, maPhim, biDanh, danhGia, ngayKhoiChieu } =
      this.props.data;

    return (
      <div className="movieItem col-12 col-md-6 col-lg-3">
        <div className="movieItem-content">
          <div className="movie-poster">
            <Link to={`/movie-detail/${maPhim}`}>
              <img
                className="card-img-top"
                src={hinhAnh}
                alt={biDanh}
                onError={(e) => {
                  if (this.errorImgFlag) {
                    this.errorImgFlag = false;
                    e.target.src = "./images/assets/images/cinemaDefault.jpg";
                  }
                }}
              />
              <div className="movieItem-title">
                <h4 className="movieItem-title">{tenPhim}</h4>
              </div>
            </Link>
          </div>
          <div className="movieItem-info">
            <div className="date">{MovieTimePlan(ngayKhoiChieu)}</div>
            <div className="rate">
              <i class="fa fa-star"></i>
              {danhGia}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withMovieLayout(MovieItem);
