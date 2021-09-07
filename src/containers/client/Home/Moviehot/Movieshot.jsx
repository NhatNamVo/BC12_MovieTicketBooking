import React, { Component } from "react";
import MovieItem from "../../../shared/MovieItem/MovieItem";
import renderMovie from '../../../shared/MovieItem/RenderMovieList';
import {connect} from 'react-redux';
import 'containers/shared/MovieItem/Movieshow.scss';
class Moviehot extends Component {
  render() {
    const hotMovie = this.props.hotMovie.slice(0,4);
    return (
      <div className="container movie-container">
        <h3>Phim đang hot</h3>
        <div className="row">
          {renderMovie(MovieItem, hotMovie)}
        </div>
      </div>
    );
  }
}
const mapStateToProps= state => ({
  hotMovie: state.movieReducer.hotMovie,
})
export default connect(mapStateToProps)(Moviehot);
