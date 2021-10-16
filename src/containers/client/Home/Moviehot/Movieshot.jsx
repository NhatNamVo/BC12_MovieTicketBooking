import React, { Component } from "react";
import { connect } from "react-redux";
import "containers/shared/MovieItem/Movieshow.scss";
import MovieHotReder from "./MoviehotRender";
class Moviehot extends Component {
  state = {
    windowWidth: window.innerWidth,
  };
  componentDidMount() {
    window.addEventListener("resize", this.changeWindowWidth);
  }
  changeWindowWidth = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };
  changeToMoviePage = () => {
    this.props.history.push("/movie");
  };
  render() {
    return (
      <div className="container movie-container">
        <div className="movieTitle">
          <h4 className="movieHome__title">
            Phim nổi bật
            <div className="movieHome__titleBorder"></div>
            <div className="movieHome__titleBorder"></div>
          </h4>
          <div className="movieTitle-btn" onClick={this.changeToMoviePage}>
            Xem thêm<i class="fa fa-film"></i>
          </div>
        </div>
        <MovieHotReder
          windowWidth={this.state.windowWidth}
          hotMovie={this.props.hotMovie}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  hotMovie: state.movieReducer.hotMovie,
});
export default connect(mapStateToProps)(Moviehot);
