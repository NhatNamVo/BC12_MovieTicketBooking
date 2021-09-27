import { actFetchAllMovie } from "containers/client/Home/module/actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from 'components/Loader/Loader';

class MovieAdminItem extends Component {
  componentDidMount() {
    if (this.props.movieList.length === 0) {
      this.props.fetchAllMovie();
    }
  }
  render() {
    if(!!this.props.loading) return <Loader />;
    const { movieList, firstPageIndex, lastPageIndex } = this.props;
    const datas = movieList.slice(0, 10);
    return (
      <>
        {datas.map((data, idx) => {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{data.maPhim}</td>
              <td>
                <img src={data.hinhAnh} alt="" width="80%"/>
              </td>
              <td>{data.tenPhim}</td>
              <td>{data.moTa.length>50?data.moTa.substr(0,50)+'...':data.moTa}</td>
              <td className="movieManage-feature">
                <button
                  id="userUpdate"
                  className="btn btn-primary m-1"
                  data-index={firstPageIndex + idx}
                  data-toggle="modal"
                  data-target="#"
                >
                  Sửa
                </button>
                <button
                  type="button"
                  id="userDelete"
                  className="btn btn-danger m-1"
                  data-index={firstPageIndex + idx}
                  data-toggle="modal"
                  data-target="#"
                >
                  Xóa
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  // userAccountData: state.UserAccountReducer.userAccountData,
  // firstPageIndex: state.UserAccountReducer.firstPageIndex,
  // lastPageIndex: state.UserAccountReducer.lastPageIndex,
  // totalCount: state.UserAccountReducer.totalCount,
  movieList: state.movieReducer.listMovie,
  loading: state.movieReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  // ChangeCurrentPage: (changePageID) => {
  //   dispatch(actChangePage(changePageID));
  // },
  fetchAllMovie: () => {
    dispatch(actFetchAllMovie());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieAdminItem);

//   componentDidMount() {
//     if (!this.props.match.params.pageNumber) {
//       this.props.ChangeCurrentPage(1);
//     }
//     else{
//       this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevProps.match.params.pageNumber != this.props.match.params.pageNumber
//     ) {
//       if (!this.props.match.params.pageNumber) {
//         this.props.ChangeCurrentPage(1);
//       } else {
//         this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
//       }
//     }
//     if (prevProps.totalCount != this.props.totalCount) {
//       this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
//     }
//     if(prevProps.location.search != this.props.location.search){
//       this.props.ChangeCurrentPage(1);
//     }
//   }
