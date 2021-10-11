import React, { Component } from "react";
import { connect } from "react-redux";
import banner from "./assets/images/banner-movie.jpg";
import Pagination from "components/Pagination/Pagination";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./MoviePage/MoviePage";
import { actSetting } from "containers/client/Movie/Modules/action";
import { actAddMovieList } from "containers/client/Movie/module/action";
import { actFetchAllMovie } from "containers/client/Home/module/actions";
import Loader from "components/Loader/Loader";
import "./Movie.scss";
import MovieFilter from "./Filter/MovieFilter";
import "./Filter/FilterMovie.scss";
class Movie extends Component {
  state = {
    pageSize: 12,
    movieFound: this.props.listMovie,
    isSearch: false,
  };

  componentDidMount() {
    if (this.props.listMovie.length === 0) {
      this.props.fetchAllMovie();
    } else {
      this.filterMovie(this.props.sort, this.props.show);
      this.settingPanigation();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.listMovie !== this.props.listMovie) {
      this.props.movieAddList(this.props.listMovie);
    }
    if (
      prevProps.sort !== this.props.sort ||
      prevProps.show !== this.props.show
    ) {
      this.filterMovie(this.props.sort, this.props.show);
    }
    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.location.search === "") {
        this.filterMovie(this.props.sort, this.props.show);
      }
    }
  }
  settingPanigation = () => {
    let settingPagination = {
      totalCount: this.props.movies.length,
      pageSize: this.state.pageSize,
    };
    this.props.movieDivPage(settingPagination);
  };
  filterMovie = (sort, show) => {
    let movieList = this.props.listMovie;
    switch (sort) {
      case 0:
        movieList = this.props.listMovie;
        break;
      case 1:
        movieList = this.props.hotMovie;
        break;
      case 2:
        movieList = this.props.newMovie;
        break;
      default:
        movieList = this.props.listMovie;
        break;
    }
    this.props.movieAddList(movieList);
    this.setState({
      pageSize: show,
      isSearch: false,
    });
  };
  findMovie = (text) => {
    let movieFoundList = this.props.movies;
    if (text !== "") {
      movieFoundList = this.props.listMovie.filter((movie) => {
        return movie.tenPhim.toLocaleLowerCase().indexOf(text) !== -1;
      });
    } else {
      movieFoundList = this.props.movies;
    }
    this.props.movieAddList(movieFoundList);
  };

  render() {
    const {
      totalCount,
      siblingCount,
      currentPage,
      pageSize,
      match,
      location,
      movies,
    } = this.props;
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
            <div className="banner-info wow fadeScale" data-wow-sroll="true" data-wow-duration="2s">
              <h3>XEM PHIM MỌI LÚC MỌI NƠI</h3>
              <div className="bannerinfo-Slogan">
                Lựa chọn phim bên dưới - Đặt vé ngay thôi nào!!!
              </div>
            </div>
          </div>
          <div className="movie-content container">
            <MovieFilter
              history={this.props.history}
              location={this.props.location}
            />
            <div className="movie-container movieList-container">
              <>
                <Switch>
                  <Route
                    path="/movie"
                    exact="true"
                    render={(props) => (
                      <MoviePage {...props} listMovie={movies} />
                    )}
                  />
                  <Route
                    path="/movie/page:pageNumber"
                    render={(props) => (
                      <MoviePage {...props} listMovie={movies} />
                    )}
                  />
                  <Route
                    path="/movie/search"
                    name="movie"
                    render={(props) => (
                      <MoviePage
                        {...props}
                        findMovie={this.findMovie}
                        listMovie={movies}
                      />
                    )}
                  />
                </Switch>
              </>
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
  showingMovie: state.movieReducer.showingMovie,
  hotMovie: state.movieReducer.hotMovie,
  newMovie: state.movieReducer.newMovie,
  totalCount: state.pagePanigationReducer.totalCount,
  siblingCount: state.pagePanigationReducer.siblingCount,
  currentPage: state.pagePanigationReducer.currentPage,
  pageSize: state.pagePanigationReducer.pageSize,
  movies: state.movieListOptionReducer.movies,
  moviesFound: state.movieListOptionReducer.moviesFound,
  sort: state.movieListOptionReducer.sort,
  show: state.movieListOptionReducer.show,
});
const mapDispatchToProps = (dispatch) => ({
  movieDivPage: (totalMount) => {
    dispatch(actSetting(totalMount));
  },
  fetchAllMovie: () => {
    dispatch(actFetchAllMovie());
  },
  movieAddList: (movieList) => {
    dispatch(actAddMovieList(movieList));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
