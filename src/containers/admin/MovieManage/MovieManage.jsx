import React, { Component } from "react";
import Pagination from "components/Pagination/Pagination";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "components/Loader/Loader";
import MovieAdminItem from "./MovieItem/MovieAdminItem";
import {
  actFetchAllMovie,
  actAddNewMovie,
  actDeleteMovie,
  actUpdateMovie,
} from "containers/client/Home/module/actions";
import { actSearchMovie, actSettingTotalCount } from "./Modules/action";
import moment from "moment";
import "./MovieManager.scss";
import MovieManageModal from "./MovieManagerModal/MovieManageModal";
import DeleteUserNote from "../../shared/DeleteUserNote";
class MovieManage extends Component {
  state = {
    isAddMovie: false,
    movieCode: null,
  };
  componentDidMount() {
    if (this.props.movieList.length === 0) {
      this.props.fetchAllMovie();
    }
    else{
      this.props.changeTotalCount(this.props.location.search);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.movieList.length != this.props.movieList.length) {
      this.props.changeTotalCount(this.props.location.search);
    }
    if (prevProps.location.search != this.props.location.search) {
      const findUser = new URLSearchParams(window.location.search).get(
        "search"
      );
      if (findUser === "" || this.props.location.search === "") {
        this.props.history.push("/admin/movie-manage");
        this.props.changeTotalCount(this.props.location.search);
      } else {
        const foundMovie = this.props.movieList.filter((movie) => {
          return movie.tenPhim.toLocaleLowerCase().indexOf(findUser) !== -1;
        });
        this.props.searchMovie(foundMovie);
      }
    }
  }
  searchMovie = (e) => {
    const movieTextFind = e.target.value;
    if (movieTextFind === "") {
      this.wait = setTimeout(() => {
        this.props.history.push("/admin/movie-manage");
      }, 300);
    }
  };

  findUser = (e) => {
    const findInputBox = document.querySelector("#searchUser");
    this.props.history.push({
      pathname: "/admin/movie-manage",
      search:
        "?" + new URLSearchParams({ search: findInputBox.value.toString() }),
    });
  };
  addClick = () => {
    this.setState({
      isAddMovie: true,
    });
  };
  movieListUpdate = (event) => {
    const updateBtn = event.target.closest("#movieUpdate");
    const deleteBtn = event.target.closest("#movieDelete");
    if (!!updateBtn) {
      const movieCode = updateBtn.dataset.moviecode;
      this.setState({
        isAddMovie: false,
        movieCode: movieCode,
      });
    }
    if (!!deleteBtn) {
      const movieCode = deleteBtn.dataset.moviecode;
      this.setState({ movieCode: movieCode, isAddMovie: true });
    }
  };
  changeMovieCode = () => {
    this.setState({
      movieCode: null,
    });
  };
  addNewMovie = (data) => {
    let formData = new FormData();
    for (let key in data) {
      if( key === 'ngayKhoiChieu'){
        const date = moment(new Date(data[key]).toDateString()).format('DD/MM/YYYY');
        formData.append(key,date);
        continue;
      }
      else if(key === 'danhGia'){
        formData.append(key,parseInt(data[key]));
        continue;
      }
      if (key !== "hinhAnh") {
        formData.append(key, data[key]);
      } else {
        formData.append("File", data.hinhAnh, data.hinhAnh.name);
      }
      console.log(formData.get('danhGia'));
    }
    this.props.addNewMovie(formData);
  };
  updateMovie = (data) => {
    let formData = new FormData();
    for (let key in data) {
      if( key === 'ngayKhoiChieu'){
        const date = moment(new Date(data[key]).toDateString()).format('DD/MM/YYYY');
        formData.append(key,date);
        continue;
      }
      else if(key === 'danhGia'){
        formData.append(key,parseInt(data[key]));
        continue;
      }
      if (key !== "hinhAnh") {
        formData.append(key, data[key]);
      } else {
        if(data.hinhAnh !== null){
          formData.append("File", data.hinhAnh, data.hinhAnh.name);
        }
      }
      console.log(formData.get('danhGia'));
    }
    this.props.updateMovie(formData,this.props.accessToken);
  }
  deleteMovie = (movieCode) => {
    this.props.deleteMovie(parseInt(movieCode), this.props.accessToken);
  }
  render() {
    // if (this.props.loadding) return <Loader />;
    const url = this.props.match.url;
    const { totalCount, siblingCount, currentPage, pageSize } = this.props;
    return (
      <div className="movieManager-container container">
        <div className="row justify-content-between mx-0 my-2">
          <button
            className="btn btn-primary"
            onClick={this.addClick}
            data-toggle="modal"
            data-target="#movieAdminModal"
          >
            <div className="row justify-content-between align-items-center px-3">
              <p className="font-weight-bold mb-0 mr-2">Thêm Phim</p>
              <i class="fa fa-plus"></i>
            </div>
          </button>
          <div
            className="searchItem row text-right m-0"
            style={{ width: "auto" }}
          >
            <input
              style={{ width: "400px" }}
              type="text"
              id="searchUser"
              className="form-control mr-2"
              placeholder="Nhập tên phim..."
              onChange={this.searchMovie}
            />
            <button className="btn btn-primary" onClick={this.findUser}>
              Tìm
            </button>
          </div>
        </div>

        <table className="table table-bordered">
          <thead className="thead-light useraccount-list">
            <tr>
              <th scope="col" style={{ width: "5%", textAlign: "center" }}>
                STT
              </th>
              <th scope="col" style={{ width: "10%", textAlign: "center" }}>
                Mã phim
              </th>
              <th scope="col" style={{ width: "15%", textAlign: "center" }}>
                Hình ảnh
              </th>
              <th scope="col" style={{ width: "20%", textAlign: "center" }}>
                Tên phim
              </th>
              <th scope="col" style={{ width: "25%", textAlign: "center" }}>
                Mô tả
              </th>
              <th scope="col" style={{ width: "25%", textAlign: "center" }}>
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody onClick={this.movieListUpdate}>
            <Switch>
              <Route
                path="/admin/movie-manage"
                exact="true"
                component={MovieAdminItem}
              />
              <Route
                path="/admin/movie-manage/Page:pageNumber"
                component={MovieAdminItem}
              />
            </Switch>
          </tbody>
        </table>
        {this.props.totalCount === 0 ? (
          ""
        ) : (
          <Pagination
            search={this.props.location.search}
            url={url}
            totalCount={totalCount}
            siblingCount={siblingCount}
            currentPage={currentPage}
            pageSize={pageSize}
            changePage={this.changePage}
          />
        )}
        <MovieManageModal
          isAddMovie={this.state.isAddMovie}
          addNewMovie={this.addNewMovie}
          updateMovie = {this.updateMovie}
          movieCode = {this.state.movieCode}
          changeMovieCode = {this.changeMovieCode}
          movieList = {this.props.movieList}
          loadingModal={this.props.loadingModal}
          note = {this.props.note}
          loadingModal = {this.props.loadingModal}
        />
        {this.state.movieCode?
        <DeleteUserNote
          note={this.props.note}
          delete={this.deleteMovie}
          movieCode={this.state.movieCode}
          // idx ={1}
          movieList={this.props.movieList}
          loadingModal={this.props.loadingModal}
          changeIdx={this.changeMovieCode}
        />:""}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  movieList: state.movieReducer.listMovie,
  accessToken: state.authUserReducer.currentUser.accessToken,
  totalCount: state.MovieAdminManager.totalCount,
  siblingCount: state.MovieAdminManager.siblingCount,
  currentPage: state.MovieAdminManager.currentPage,
  pageSize: state.MovieAdminManager.pageSize,
  // loadding: state.UserAccountReducer.loadding,
  loadingModal: state.movieReducer.loadingModal,
  note: state.movieReducer.note,
});
// const mapDispatchToProps = (dispatch) => ({
// fetchUserAccount: () => {
//   dispatch(actFetchUserAccount());
// },
// findUserAccount: (user) => {
//   dispatch(actFindUserAccount(user));
// },
// postNewUserAccount: (newUser, token) => {
//   dispatch(actAddNewUserAccount(newUser, token));
// },
// putUserUpdate: (user,token) =>{
//   dispatch(actUpdateUser(user,token));
// },
// deleteUser: (user,token) => {
//   dispatch(actDeleteUser(user,token));
// }
// });
const mapDispatchToProps = (dispatch) => ({
  // ChangeCurrentPage: (changePageID) => {
  //   dispatch(actChangePage(changePageID));
  // },
  fetchAllMovie: () => {
    dispatch(actFetchAllMovie());
  },
  changeTotalCount: (search) => {
    dispatch(actSettingTotalCount(search));
  },
  searchMovie: (movie) => {
    dispatch(actSearchMovie(movie));
  },
  addNewMovie: (newMovie) => {
    dispatch(actAddNewMovie(newMovie));
  },
  deleteMovie: (movieCode, token) => {
    dispatch(actDeleteMovie(movieCode, token));
  },
  updateMovie: (movieData, token) => {
    dispatch(actUpdateMovie(movieData, token));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieManage);
