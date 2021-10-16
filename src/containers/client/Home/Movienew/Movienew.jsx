import React, { Component } from "react";
import "./Movienew.scss";
import CurrentMovienew from "./CurrentMovienew";
import MovienewList from "./MovienewList";
import "containers/shared/MovieItem/Movieshow.scss";
import { connect } from "react-redux";
import { actChangeCurrentMovieNew } from "../module/actions";
class Movienew extends Component {
  state = {
    background: [
      { id: 1, imgUrl: "./images/assets/images/background1_large.jpg" },
    ],
    slideItem: 2,
    windowWidth: window.innerWidth,
  };
  componentDidMount() {
    window.addEventListener("resize", this.changeWindowWidth);
  }
  changeWindowWidth = () => {
    this.setState({windowWidth: window.innerWidth });
  };
  changeCurrentPage = (idx) => {
    this.props.CurrentMovieChange(idx);
  }
  render() {
    const { match, history, location } = this.props;
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.background[0].imgUrl})`,
        }}
        className="film-background movie-container"
      >
        <div className="container movie-container movieNew-container">
          <div className="movieTitle">
            <h4 className="movieHome__title">
              Phim mới nhất
              <div className="movieHome__titleBorder"></div>
              <div className="movieHome__titleBorder"></div>
            </h4>
          </div>
          <CurrentMovienew
            match={match}
            history={history}
            location={location}
            windowWidth = {this.state.windowWidth}
          />
        </div>
        <div className="newMovieList wow zoomIn" data-wow-scroll="true">
          <MovienewList
            windowWidth={this.state.windowWidth} newMovie = {this.props.newMovie} currentMovieIdx={this.props.currentMovieIdx} changeCurrentPage={this.changeCurrentPage}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  newMovie: state.movieReducer.newMovie,
  currentMovieIdx: state.movieReducer.currentMovieIdx,
});
const mapDispatchToProps = (dispatch) => ({
  CurrentMovieChange: (idx) => {
    dispatch(actChangeCurrentMovieNew(idx));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Movienew);
