import React, { Component } from "react";
import { connect } from "react-redux";
import banner from "./assets/images/banner-movie.jpg";
import Pagination from "components/Pagination/Pagination";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./MoviePage/MoviePage";
import { actSetting } from "./Modules/action";
import { actFetchAllMovie } from "containers/client/Home/module/actions";
import Loader from "components/Loader/Loader";
import "./Movie.scss";
import MovieFilter from "./Filter/MovieFilter";
import './Filter/FilterMovie.scss';
class Movie extends Component {
  state = {
    movies: this.props.listMovie,
    bannerImge: "./images/banner-movie.jpg",
  };
  pageSize = 12;
  componentDidMount() {
    if (this.props.listMovie.length == 0) {
      this.props.fetchAllMovie();
    } else {
      this.settingPanigation();
    }
  }
  settingPanigation = () => {
    const settingPagination = {
      totalCount: this.props.listMovie.length,
      pageSize: this.pageSize,
    };
    this.props.movieDivPage(settingPagination);
  };
  render() {
    const { totalCount, siblingCount, currentPage, pageSize, match } =
      this.props;
    const url = match.url;
    if (this.props.listMovie.length === 0) {
      return <Loader />;
    }
    return (
      <>
        <div className="movieList">
          <div
            className="movieList-banner"
            style={{ backgroundImage: `url(${banner})` }}
          ></div>
          <div className="movie-banner">
            <div className="banner-info">
              <h1>BUY MOVIE TICKETS</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="movie-content container">
            <MovieFilter />
            <div className="movie-container row">
              <Switch>
                <Route
                  path="/movie"
                  exact="true"
                  render={(props) => <MoviePage {...props} />}
                />
                <Route
                  path="/movie/page:pageNumber"
                  render={(props) => <MoviePage {...props} />}
                />
              </Switch>
            </div>
            {this.settingPanigation()}
            <Pagination
              url={url}
              totalCount={totalCount}
              siblingCount={siblingCount}
              currentPage={currentPage}
              pageSize={pageSize}
            />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  listMovie: state.movieReducer.listMovie,
  totalCount: state.pagePanigationReducer.totalCount,
  siblingCount: state.pagePanigationReducer.siblingCount,
  currentPage: state.pagePanigationReducer.currentPage,
  pageSize: state.pagePanigationReducer.pageSize,
});
const mapDispatchToProps = (dispatch) => ({
  movieDivPage: (totalMount) => {
    dispatch(actSetting(totalMount));
  },
  fetchAllMovie: () => {
    dispatch(actFetchAllMovie());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
