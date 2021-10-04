import React, { Component } from "react";
import { Link } from "react-router-dom";
import { actFilterMovieType, actFilterMovieMountShow } from "../module/action";
import { connect } from "react-redux";
class MovieFilter extends Component {
  state = {
    sort: false,
    show: false,
    findMovie: "",
    isChangeSize: false,
    isfilterShow: false,
  };
  componentDidMount() {
    const filterBox = document.querySelector(".filter-tool");
    const findMovieBox = document.querySelector("input.findMovie");
    findMovieBox.addEventListener("input", this.findInputMovie);
    filterBox.addEventListener("click", this.handleClick);
    findMovieBox.addEventListener('focus',this.changeInputWidth);
    findMovieBox.addEventListener('focusout',this.changeInputWidth);
  }
  changeInputWidth = (e) => {
    const windowWidth = window.innerWidth;
    const findMovieBox = document.querySelector("input.findMovie");
    if(e.type === 'focus'){
      if(windowWidth< 768) {
        this.setState({isChangeSize:true,isfilterShow: true});
      }
      else{
        this.setState({isChangeSize:false});
        this.wait = setTimeout(() => {
          this.setState({isfilterShow: false})
        },280);
      };
    }
    else{
      this.setState({isChangeSize:false});
      this.wait = setTimeout(() => {
        this.setState({isfilterShow: false})
      },280);
    };
  };
  findInputMovie = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    if (value === "") {
      this.wait = setTimeout(() => {
        this.props.history.push('/movie');
      }, 500);
    };
    this.setState({
      [name]: value,
    });
  };
  offPopup = () => {
    this.setState({ sort: false, show: false });
  }
  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const sortBox = event.target.closest(".item-sort");
    const showBox = event.target.closest(".item-show");
    const arrowBtnSort = event.target.closest(".filter-sort .fa-angle-down");
    const arrowBtnShow = event.target.closest(".filter-show .fa-angle-down");
    const itemBox = event.target.closest(".dropbox-item");
    const findMovieBtn = event.target.closest("i.fa-search");
    if (!!sortBox || !!arrowBtnSort) {
      this.setState({ sort: !this.state.sort, show: false });
    }
    if (!!showBox || !!arrowBtnShow) {
      this.setState({ sort: false, show: !this.state.show });
    }
    if(!sortBox && !arrowBtnSort){
      this.setState({ sort: false});
    }
    if(!showBox && !arrowBtnShow){
      this.setState({ show: false});
    }
    if (itemBox) {
      const name = event.target.attributes[0].value;
      const value = parseInt(event.target.attributes[1].value);
      if (name == "sort") {
        this.props.filterSort(value);
        this.setState({ sort: false });
      }
      if (name === "show") {
        this.props.filterShow(value);
        this.setState({ show: false });
      }
      this.props.history.push({ pathname: "/movie" });
    }
    if (findMovieBtn) {
      if(!this.state.findMovie){
        this.props.history.push({ pathname: "/movie" });
      }
      else{
        this.props.history.push({
          pathname: "/movie/search",
          search:
            "?" +
            new URLSearchParams({
              movie: this.state.findMovie.toLocaleLowerCase(),
            }).toString(),
        });
      }
    }
  };
  searchMovie = (e) => {
    e.preventDefault();
    document.querySelector("i.fa-search").click();
  };
  render() {
    const { sort, show, sortVal } = this.props;
    return (
      <>
        <div className="Movie-filter" onClick={this.offPopup}>
          <h4>LỌC THÔNG TIN PHIM</h4>
          <div className="filter-tool">
            <div
              className={
                "filter-item filter-sort " + (this.state.sort ? "active" : "")
              }
            >
              <p>Lọc:</p>
              <span className="item-sort">{sortVal}</span>
              <i class="fa fa-angle-down"></i>
              <div className="item-dropbox">
                <ul className="dropbox-list">
                  <li
                    name="sort"
                    value={0}
                    className={"dropbox-item " + (sort === 0 ? "active" : "")}
                  >
                    Tất cả
                  </li>
                  <li
                    name="sort"
                    value={1}
                    className={"dropbox-item " + (sort === 1? "active" : "")}
                  >
                    Phim hot
                  </li>
                  <li
                    name="sort"
                    value={2}
                    className={"dropbox-item " + (sort === 2? "active" : "")}
                  >
                    Phim mới nhất
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={
                "filter-item filter-show " + (this.state.show ? "active" : "") + (this.state.isfilterShow?"displayShow":"")
              }
            >
              <p>Hiển thị:</p>
              <span className="item-show">{show}</span>
              <i class="fa fa-angle-down"></i>
              <div className="item-dropbox">
                <ul className="dropbox-list">
                  <li
                    name="show"
                    value={12}
                    className={"dropbox-item " + (show === 12 ? "active" : "")}
                  >
                    12
                  </li>
                  <li
                    name="show"
                    value={16}
                    className={"dropbox-item " + (show === 16 ? "active" : "")}
                  >
                    16
                  </li>
                  <li
                    name="show"
                    value={20}
                    className={"dropbox-item " + (show === 20 ? "active" : "")}
                  >
                    20
                  </li>
                  <li
                    name="show"
                    value={24}
                    className={"dropbox-item " + (show === 24 ? "active" : "")}
                  >
                    24
                  </li>
                </ul>
              </div>
            </div>
            <div className="filter-item">
              <div className="find-item">
                <form action="" method="Post" onSubmit={this.searchMovie}>
                  <input
                    type="text"
                    name="findMovie"
                    className={"findMovie " + (this.state.isChangeSize?"changeSize changePosition":"")}
                    value={this.state.findMovie}
                    placeholder="Nhập tên phim"
                  />
                  <i class="fa fa-search"></i>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  sort: state.movieListOptionReducer.sort,
  sortVal: state.movieListOptionReducer.sortVal,
  show: state.movieListOptionReducer.show,
});
const mapDispatchToProps = (dispatch) => ({
  filterSort: (movieType) => {
    dispatch(actFilterMovieType(movieType));
  },
  filterShow: (movieShow) => {
    dispatch(actFilterMovieMountShow(movieShow));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MovieFilter);
