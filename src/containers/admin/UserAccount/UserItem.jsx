import React, { Component } from "react";
import { actChangePage } from "./Modules/action";
import { connect } from "react-redux";
class UserItem extends Component {
  componentDidMount() {
    if (!this.props.match.params.pageNumber) {
      this.props.ChangeCurrentPage(1);
    }
  }
  componentDidUpdate() {
    if (!this.props.match.params.pageNumber) {
      this.props.ChangeCurrentPage(1);
    } else {
      this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
    }
  }
  render() {
    const { userAccountData, firstPageIndex, lastPageIndex } = this.props;
    const datas = userAccountData.slice(firstPageIndex, lastPageIndex);
    console.log(userAccountData, datas, firstPageIndex, lastPageIndex);
    return (
      userAccountData && (
        <>
          {datas.map((data, idx) => {
            return (
              <tr key={idx}>
                <td className="align-items-center">
                  {firstPageIndex + idx + 1}
                </td>
                <td className="align-items-center">{data.taiKhoan}</td>
                <td className="align-items-center">{data.matKhau}</td>
                <td className="align-items-center">{data.hoTen}</td>
                <td className="align-items-center">{data.email}</td>
                <td className="align-items-center">{data.soDt}</td>
                <td className="row justify-content-center m-0">
                  <button className="btn btn-primary m-1">Sửa</button>
                  <button className="btn btn-danger m-1">Xóa</button>
                </td>
              </tr>
            );
          })}
        </>
      )
    );
  }
}
const mapStateToProps = (state) => ({
  userAccountData: state.UserAccountReducer.userAccountData,
  firstPageIndex: state.UserAccountReducer.firstPageIndex,
  lastPageIndex: state.UserAccountReducer.lastPageIndex,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeCurrentPage: (changePageID) => {
    dispatch(actChangePage(changePageID));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
