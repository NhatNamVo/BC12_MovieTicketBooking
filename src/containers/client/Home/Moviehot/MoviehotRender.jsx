import React, { Component } from "react";
import MovieItem from "containers/shared/MovieItem/MovieItem";
import renderMovie from "containers/shared/MovieItem/RenderMovieList";


class MovieHotReder extends Component {
  state = {
    hotMovie: [],
  };
  componentDidMount() {
    this.changeHotMovieList(this.props.windowWidth);

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.windowWidth != this.props.windowWidth) {
        this.changeHotMovieList(this.props.windowWidth);
    }
  }
  changeHotMovieList = (windowWidth) => {
    let hotMovie = [];
    if (windowWidth < 576 || windowWidth >= 768) {
      hotMovie = this.props.hotMovie.slice(0, 8);
    } else {
      hotMovie = this.props.hotMovie.slice(0, 9);
    }
    this.setState({ hotMovie: hotMovie });
  };
  render() {
    return (
      <>
        <div className="row "  >{renderMovie(MovieItem, this.state.hotMovie)}</div>
      </>
    );
  }
}

export default MovieHotReder;
