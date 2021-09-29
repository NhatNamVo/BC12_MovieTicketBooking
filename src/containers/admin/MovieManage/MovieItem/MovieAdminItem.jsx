
import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from 'components/Loader/Loader';
import { actChangePage } from "../Modules/action";


class MovieAdminItem extends Component {
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
      prevProps.match.params.pageNumber != this.props.match.params.pageNumber
    ) {
      if (!this.props.match.params.pageNumber) {
        this.props.ChangeCurrentPage(1);
      } else {
        this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
      }
    }
    // if (prevProps.totalCount != this.props.totalCount) {
    //   if (!this.props.match.params.pageNumber) {
    //     this.props.ChangeCurrentPage(1);
    //   } else {
    //     this.props.ChangeCurrentPage(this.props.match.params.pageNumber);
    //   }
    // }
    if(prevProps.location.search != this.props.location.search){
      this.props.ChangeCurrentPage(1);
    }
  }
  render() {
    if(!!this.props.loading) return <Loader />;
    const { movieDatas, firstPageIndex, lastPageIndex, foundMovie } = this.props;
    let datas;
    if(this.props.location.search == ''){
      datas = movieDatas.slice(firstPageIndex, lastPageIndex);
    }
    else{
      datas = foundMovie.slice(firstPageIndex, lastPageIndex);
    }
    return (
      <>
        {datas.map((data, idx) => {
          return (
            <tr key={idx}>
              <td>{firstPageIndex + idx + 1}</td>
              <td>{data.maPhim}</td>
              <td>
                <img src={data.hinhAnh} alt="" width="80%"/>
              </td>
              <td>{data.tenPhim}</td>
              <td>{data.moTa.length>50?data.moTa.substr(0,50)+'...':data.moTa}</td>
              <td className="movieManage-feature">
                <button
                  id="movieUpdate"
                  className="btn btn-primary m-1"
                  data-movieCode={data.maPhim}
                  data-toggle="modal"
                  data-target="#movieAdminModal"
                >
                  Sửa
                </button>
                <button
                  type="button"
                  id="movieDelete"
                  className="btn btn-danger m-1"
                  data-movieCode={data.maPhim}
                  data-toggle="modal"
                  data-target="#deleteNoteModal"
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
  firstPageIndex: state.MovieAdminManager.firstPageIndex,
  lastPageIndex: state.MovieAdminManager.lastPageIndex,
  totalCount: state.MovieAdminManager.totalCount,
  movieDatas: state.movieReducer.listMovie,
  foundMovie: state.MovieAdminManager.foundMovie,
  loading: state.movieReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  ChangeCurrentPage: (currentPage) => {
    dispatch(actChangePage(currentPage))
  }
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
