import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";
import { connect } from "react-redux";
import renderMovie from "containers/shared/TimePlan/MovieTimePlan";
class CurrentMovienew extends Component {
  setDescription = () => {
    const {moTa} = this.props.currentMovienew;
    if(this.props.windowWidth>1024){
      return moTa?.substr(0,500)+'...';
    }
    if(this.props.windowWidth>=768 && this.props.windowWidth<=1024){
      return moTa?.substr(0,300)+'...';
    }
    else if(this.props.windowWidth>=576 && this.props.windowWidth < 786){
      return moTa?.substr(0,200) + '...';
    }
    else{
      return moTa?.substr(0,100) + '...';
    }
  }
  render() {
    const { match, history, currentMovienew } = this.props;
    const { maPhim, tenPhim, hinhAnh, ngayKhoiChieu, moTa, danhGia, biDanh } = currentMovienew;
    return currentMovienew && (
      <>
        <div className="currentFilm row">
          <div className="currentFilm-info col-6">
            <h4 className="currentFilm-title">{tenPhim}</h4>
            <div className="currentFilm-rate">
              <i class="fa fa-star"></i>
              <span className="rate-mount">{danhGia}</span>
            </div>
            <div className="currentFilm-date">
              <i class="fa fa-calendar"></i>
              <span className="date">{new Date(ngayKhoiChieu).toLocaleDateString()}</span>
            </div>
            <p className="currentFilmInfo-desc">{this.setDescription()}</p>
            <p className="currentFilmInfo-btn">
              <Link to={match.url + "movie-detail/" + maPhim}>Xem thêm</Link>
            </p>
          </div>
          <div className="currentFilm-profileImg col-6">
            <div className="currentFilm-img">
              <img
                src={hinhAnh}
                alt={biDanh}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "./images/assets/images/cinemaDefault.jpg";
                }}
              />
              <Link
                to={{
                  pathname: match.url + "trailer/" + maPhim,
                  state: { background: history.location },
                }}
                className="video__button video__popup"
              >
                <FaRegPlayCircle />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  currentMovienew: state.movieReducer.currentMovienew,
});
export default connect(mapStateToProps)(CurrentMovienew);
