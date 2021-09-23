import React, { Component } from "react";
import Pagination from "components/Pagination/Pagination";
import { Switch, Route} from "react-router-dom";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { actFetchUserAccount, actFindUserAccount } from "./Modules/action";
import Loader from "components/Loader/Loader";
import UserModal from "./UserModal/UserModal";
class UserAcount extends Component {
  state = {
    isAddUser: false,
    isUpdateUser: false,
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.search != this.props.location.search){
      const findUser = (new URLSearchParams(window.location.search).get('search'))
      if(findUser === ''|| this.props.location.search ===''){
        this.props.fetchUserAccount();
        this.props.history.push('/admin/user-manage');
      }
      else{
        this.props.findUserAccount(findUser);
      }
    }
  }
  findUser = (e) => {
    const findInputBox = document.querySelector('#searchUser');
    this.props.history.push({search: "?" + new URLSearchParams({search:findInputBox.value.toString()})});
  };
  addClick = () =>{
    this.setState({
      isAddUser: true,
    });
  };
  render() {
    if(this.props.loadding) return <Loader/>
    const url = this.props.match.url;
    const { totalCount, siblingCount, currentPage, pageSize } = this.props;
    return (
      <div className="userAccount-container container">
        <div className="row justify-content-between mx-0 my-2">
          <button className="btn btn-primary" onClick={this.addClick} data-toggle="modal" data-target="#userModal">
            <div className="row justify-content-between align-items-center px-3">
              <p className="font-weight-bold mb-0 mr-2">Thêm</p>
              <i class="fa fa-user-plus"></i>
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
              placeholder="Nhập vào tài khoản hoặc họ tên người dùng..."
            />
            <button className="btn btn-primary" onClick={this.findUser}>Tìm</button>
          </div>
        </div>

        <table className="table table-bordered">
          <thead className="thead-light useraccount-list">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tài khoản</th>
              <th scope="col">Loại người dùng</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Email</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            
              <Switch>
              <Route
                  path="/admin/user-manage" exact='true'
                  component={UserItem}
                />
                <Route
                  path="/admin/user-manage/Page:pageNumber"
                  component={UserItem}
                />
              </Switch>
          </tbody>
        </table>
        {(this.props.totalCount === 0)?"":<Pagination search={this.props.location.search} url = {url} totalCount = {totalCount} siblingCount={siblingCount} currentPage={currentPage} pageSize={pageSize} changePage={this.changePage}/>}
        <UserModal isAddUser = {this.state.isAddUser}/>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchUserAccount();
  }
}
const mapStateToProps = (state) => ({
  totalCount: state.UserAccountReducer.totalCount,
  siblingCount: state.UserAccountReducer.siblingCount,
  currentPage: state.UserAccountReducer.currentPage,
  pageSize: state.UserAccountReducer.pageSize,
  loadding: state.UserAccountReducer.loadding,
});
const mapDispatchToProps = dispatch => ({
  fetchUserAccount: ()=>{
    dispatch(actFetchUserAccount());
  },
  findUserAccount: (user)=>{
    dispatch(actFindUserAccount(user));
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(UserAcount);
