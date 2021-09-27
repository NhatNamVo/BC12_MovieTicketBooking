import React, { Component } from "react";
import Pagination from "components/Pagination/Pagination";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "components/Loader/Loader";
import MovieAdminItem from "./MovieItem/MovieAdminItem";
import './MovieManager.scss';
class MovieManage extends Component {
  state = {
    // isAddUser: false,
    // indexUser: null,
  };
  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.location.search != this.props.location.search) {
    //   const findUser = new URLSearchParams(window.location.search).get(
    //     "search"
    //   );
    //   if (findUser === "" || this.props.location.search === "") {
    //     this.props.history.push("/admin/user-manage");
    //     this.props.fetchUserAccount();
    //   } else {
    //     this.props.findUserAccount(findUser);
    //   }
    // }
  }
  // findUser = (e) => {
  //   const findInputBox = document.querySelector("#searchUser");
  //   this.props.history.push({pathname: '/admin/user-manage',
  //     search:
  //       "?" + new URLSearchParams({ search: findInputBox.value.toString() }),
  //   });
  // };
  // addClick = () => {
  //   this.setState({
  //     isAddUser: true,
  //   });
  // };
  // userListUpdate = (event) => {
  //   const updateBtn = event.target.closest("#userUpdate");
  //   const deleteBtn = event.target.closest("#userDelete");
  //   if (!!updateBtn) {
  //     const idx = updateBtn.dataset.index;
  //     this.setState({
  //       isAddUser: false,
  //       indexUser: idx,
  //     });
  //   }
  //   if(!!deleteBtn){
  //     const idx = deleteBtn.dataset.index;
  //     this.setState({indexUser: idx,isAddUser: true});
  //   }
  // };
  // changeIdx = () => {
  //   this.setState({
  //     indexUser: null,
  //   });
  // };
  // addNewUser = (data) => {
  //   this.props.postNewUserAccount(data,this.props.accessToken);
  // };
  // updateUser = (data) => {
  //   this.props.putUserUpdate(data,this.props.accessToken);
  // }
  // deleteUser = (user) => {
  //   this.props.deleteUser(user, this.props.accessToken);
  // }
  render() {
    if (this.props.loadding) return <Loader />;
    const url = this.props.match.url;
    const { totalCount, siblingCount, currentPage, pageSize } = this.props;
    return (
      <div className="movieManager-container container">
        <div className="row justify-content-between mx-0 my-2">
          <button
            className="btn btn-primary"
            onClick={this.addClick}
            data-toggle="modal"
            data-target="#userModal"
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
            />
            <button className="btn btn-primary" onClick={this.findUser}>
              Tìm
            </button>
          </div>
        </div>

        <table className="table table-bordered">
          <thead className="thead-light useraccount-list">
            <tr>
              <th scope="col" style={{width:"5%",textAlign:"center"}}>STT</th>
              <th scope="col" style={{width:"10%",textAlign:"center"}}>Mã phim</th>
              <th scope="col" style={{width:"15%",textAlign:"center"}}>Hình ảnh</th>
              <th scope="col" style={{width:"20%",textAlign:"center"}}>Tên phim</th>
              <th scope="col" style={{width:"25%",textAlign:"center"}}>Mô tả</th>
              <th scope="col" style={{width:"25%",textAlign:"center"}}>Chức năng</th>
            </tr>
          </thead>
          <tbody onClick={this.userListUpdate}>
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
        {/* {this.props.totalCount === 0 ? (
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
        )} */}
        {/* <UserModal
          history={this.props.history}
          changeIdx={this.changeIdx}
          userAccountData={this.props.userAccountData}
          userAccount={this.props.userAccount}
          isAddUser={this.state.isAddUser}
          idx={this.state.indexUser}
          addNewUser = {this.addNewUser}
          updateUser = {this.updateUser}
          loadingModal={this.props.loadingModal}
          note = {this.props.note}
          loadingModal = {this.props.loadingModal}
        /> */}
        {/* <DeleteUserNote note={this.props.note} deleteUser={this.deleteUser} idx={this.state.indexUser} userAccount={this.props.userAccountData} loadingModal={this.props.loadingModal} changeIdx={this.changeIdx}/> */}
      </div>
    );
  }
  componentDidMount() {
    // this.props.fetchUserAccount();
  }
}
const mapStateToProps = (state) => ({
  // userAccountData: state.UserAccountReducer.userAccountData,
  // userAccount: state.authUserReducer.currentUser.taiKhoan,
  // accessToken: state.authUserReducer.currentUser.accessToken,
  // totalCount: state.UserAccountReducer.totalCount,
  // siblingCount: state.UserAccountReducer.siblingCount,
  // currentPage: state.UserAccountReducer.currentPage,
  // pageSize: state.UserAccountReducer.pageSize,
  // loadding: state.UserAccountReducer.loadding,
  // loadingModal: state.UserAccountReducer.loadingModal,
  // note: state.UserAccountReducer.note,
});
const mapDispatchToProps = (dispatch) => ({
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
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieManage);
