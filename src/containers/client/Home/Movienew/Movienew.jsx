import React, { Component } from "react";
import "./Movienew.scss";
import CurrentMovienew from "./CurrentMovienew";
import MovienewList from "./MovienewList";
import 'containers/shared/MovieItem/Movieshow.scss';
class Movienew extends Component {
  state = {
    background: [
      { id: 1, imgUrl: "./images/assets/images/background1_large.jpg" },
    ],
}
  render() {
    const { match, history, location } = this.props;
    return (
      <div
        style={{
          height: "900px",
          backgroundImage: `url(${this.state.background[0].imgUrl})`,
        }}
        className="film-background movie-container"
      >
        <div className="container movie-container movieNew-container">
          <h3>Phim sắp chiếu</h3>
          <CurrentMovienew
            match={match}
            history={history}
            location={location}
          />
        </div>
        <div className="newMovieList">
          <MovienewList />
        </div>
      </div>
    );
  }
}

export default Movienew;
