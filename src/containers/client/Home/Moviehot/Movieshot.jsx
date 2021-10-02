import React, { Component } from "react";
import MovieItem from "../../../shared/MovieItem/MovieItem";
import renderMovie from "../../../shared/MovieItem/RenderMovieList";
import { connect } from "react-redux";
import "containers/shared/MovieItem/Movieshow.scss";
import { Link } from "react-router-dom";
class Moviehot extends Component {
  // changeToMoviePage = () => {
  //   this.props.history.push("/movie");
  //   window.location.reload();
  // };
  render() {
    const hotMovie = this.props.hotMovie.slice(0, 8);
    return (
      <div className="container movie-container">
        <div className="movieTitle">
          <h4 className="movieHome__title">
            Phim nổi bật
            <div className="movieHome__titleBorder"></div>
            <div className="movieHome__titleBorder"></div>
          </h4>
          <div className="movieTitle-btn">
            <Link to="/movie">
              Xem thêm<i class="fa fa-film"></i>
            </Link>
          </div>
        </div>
        <div className="row">{renderMovie(MovieItem, hotMovie)}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  hotMovie: state.movieReducer.hotMovie,
});
export default connect(mapStateToProps)(Moviehot);
