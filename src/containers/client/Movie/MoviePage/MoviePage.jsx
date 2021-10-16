import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangePage } from "../Modules/action";
import renderMovieList from "containers/shared/MovieItem/RenderMovieList";
import MovieItem from "containers/shared/MovieItem/MovieItem";
class MoviePage extends Component {
  state = {
    content: true,
  };
  componentDidMount() {
    if (!this.props.match.params.pageNumber) {
      this.props.ChangeCurrentPage(1);
    }
  }
  changeMoviePage = () => {
    if (!this.props.match.params.pageNumber) {
      this.props.ChangeCurrentPage(1);
    } else {
      this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.location.search !== "") {
        const searchMovieName = new URLSearchParams(window.location.search).get(
          "movie"
        );
        this.props.findMovie(searchMovieName);
      }
    }
  }
  render() {
    const { listMovie, firstPageIndex, lastPageIndex } = this.props;
    const data = listMovie.slice(firstPageIndex, lastPageIndex);
    if (listMovie === "") {
      return (
        <>
          <h4 className="nothingFound">Không tìm thấy</h4>
          <br />
          <h4 className='movieRef'>Phim tham khảo</h4>
          <div className="movieList-content row">
            {renderMovieList(MovieItem, this.props.movies.slice(0, 12))}
          </div>
        </>
      );
    }
    return (
      <div className="movieList-content row">
        {this.changeMoviePage()}
        {renderMovieList(MovieItem, data)}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  movies: state.movieReducer.listMovie,
  firstPageIndex: state.pagePanigationReducer.firstPageIndex,
  lastPageIndex: state.pagePanigationReducer.lastPageIndex,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeCurrentPage: (changePageID) => {
    dispatch(actChangePage(changePageID));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
