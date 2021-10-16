import React, { Component } from "react";
import { actChangePage } from "./Modules/action";
import { connect } from "react-redux";
class UserItem extends Component {
  componentDidMount() {
    if (!this.props.match.params.pageNumber) {
      this.props.ChangeCurrentPage(1);
    }
    else{
      this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.pageNumber !== this.props.match.params.pageNumber
    ) {
      if (!this.props.match.params.pageNumber) {
        this.props.ChangeCurrentPage(1);
      } else {
        this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
      }
    }
    if (prevProps.totalCount !== this.props.totalCount) {
      this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
    }
    if(prevProps.location.search !== this.props.location.search){
      this.props.ChangeCurrentPage(1);
    }
  }
  render() {
    const { userAccountData, firstPageIndex, lastPageIndex } = this.props;
    const datas = userAccountData.slice(firstPageIndex, lastPageIndex);
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
                <td className="align-items-center">
                  {data.maLoaiNguoiDung === "KhachHang"
                    ? "Khách hàng"
                    : "Quản trị"}
                </td>
                <td className="align-items-center">{data.hoTen}</td>
                <td className="align-items-center">{data.email}</td>
                <td className="align-items-center">{data.soDt}</td>
                <td className="align-items-center">
                  <div  className="row justify-content-center m-0">
                  <button
                    id="userUpdate"
                    className="btn btn-primary m-1"
                    data-index={firstPageIndex + idx}
                    data-toggle="modal"
                    data-target="#userModal"
                  >
                    Sửa
                  </button>
                  <button
                    type="button"
                    id="userDelete"
                    className="btn btn-danger m-1"
                    data-index={firstPageIndex + idx}
                    data-toggle="modal" data-target="#deleteNoteModal"
                  >
                    Xóa
                  </button>
                  </div>
                  
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
  totalCount: state.UserAccountReducer.totalCount,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeCurrentPage: (changePageID) => {
    dispatch(actChangePage(changePageID));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
