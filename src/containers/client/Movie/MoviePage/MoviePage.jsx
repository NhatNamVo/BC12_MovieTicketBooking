import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangePage } from "../Modules/action";
import renderMovieList from "containers/shared/MovieItem/RenderMovieList";
import MovieItem from "containers/shared/MovieItem/MovieItem";
class MoviePage extends Component {
  componentDidMount() {
    console.log(this.props.match.params.pageNumber);
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
  render() {
    const { listMovie, firstPageIndex, lastPageIndex } = this.props;
    const data = listMovie.slice(firstPageIndex, lastPageIndex);
    return (
      <>
        {this.changeMoviePage()}
        {renderMovieList(MovieItem, data)}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  listMovie: state.movieReducer.listMovie,
  showingMovie: state.movieReducer.showingMovie,
  hotMovie: state.movieReducer.hotMovie,
  newMovie: state.movieReducer.newMovie,
  firstPageIndex: state.pagePanigationReducer.firstPageIndex,
  lastPageIndex: state.pagePanigationReducer.lastPageIndex,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeCurrentPage: (changePageID) => {
    dispatch(actChangePage(changePageID));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
