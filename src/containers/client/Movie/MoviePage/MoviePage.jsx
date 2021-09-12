import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangePage } from "../Modules/action";
import renderMovieList from "containers/shared/MovieItem/RenderMovieList";
import MovieItem from "containers/shared/MovieItem/MovieItem";
class MoviePage extends Component {
  state = {
    content: true,
  }
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
  componentDidUpdate (prevProps,prevState){
    if(prevProps.location.search !== this.props.location.search){
      if(this.props.location.search !== ''){
        const searchMovieName = (new URLSearchParams(window.location.search).get('movie'));
        this.props.findMovie(searchMovieName);
      }
    }
  }
  render() {
    const { listMovie, firstPageIndex, lastPageIndex } = this.props; 
    const data = listMovie.slice(firstPageIndex, lastPageIndex);
    if(listMovie == ''){
      return <h1>không tìm thấy</h1>
    }
    return (
      <>
        {this.changeMoviePage()}
        {renderMovieList(MovieItem, data)}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  firstPageIndex: state.pagePanigationReducer.firstPageIndex,
  lastPageIndex: state.pagePanigationReducer.lastPageIndex,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeCurrentPage: (changePageID) => {
    dispatch(actChangePage(changePageID));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
