import React, { Component } from "react";
import Pagination from "components/Pagination/Pagination";
import { Switch, Route} from "react-router-dom";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { actFetchUserAccount } from "./Modules/action";
class UserAcount extends Component {
  render() {
    const url = '/admin/userAcount';
    const { totalCount, siblingCount, currentPage, pageSize } = this.props;
    return (
      <>
        <div className="row justify-content-between mx-0 my-2 container-fluid">
          <button className="btn btn-primary">
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
              name="searchUser"
              style={{ width: "400px" }}
              type="text"
              className="form-control mr-2"
              placeholder="Nhập vào tài khoản hoặc họ tên người dùng..."
            />
            <button className="btn btn-primary">Tìm</button>
          </div>
        </div>

        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tài khoản</th>
              <th scope="col">Mật Khẩu</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Email</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            
              <Switch>
              <Route
                  path="/admin/UserAcount" exact='true'
                  component={UserItem}
                />
                <Route
                  path="/admin/UserAcount/Page:pageNumber"
                  component={UserItem}
                />
              </Switch>
          </tbody>
        </table>

        <Pagination url = {url} totalCount = {totalCount} siblingCount={siblingCount} currentPage={currentPage} pageSize={pageSize} changePage={this.changePage}/>
      </>
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
});
const mapDispatchToProps = dispatch => ({
  fetchUserAccount: ()=>{
    dispatch(actFetchUserAccount());
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(UserAcount);
