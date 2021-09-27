import React, { Component } from "react";
import { connect } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import "../TheaterFilter/TheaterFilter.scss";
import { actFetchTheaterFilter } from "../TheaterFilter/module/theaterFilterAction";
import { actFetchTheater } from "../module/theaterAction";
import TheaterDate from "./TheaterDate/TheaterDate";
class TheaterFilter extends Component {
  state = {
    sort: false,
    sortDate:false,
  };
  handleClick = (event) => {
    event.preventDefault();
    const sortBox = event.target.closest(".item-sort");
    const arrowBtnSort = event.target.closest(".filter-sort .fa-angle-down");
    const sortBoxDate = event.target.closest(".item-sort-date");
    const arrowBtnSortDate = event.target.closest(".filter-sort-date .fa-angle-down1");
    const itemBox = event.target.closest(".dropbox-item");
    if (!!sortBox || !!arrowBtnSort) {
      this.setState({ sort: !this.state.sort});
    }
    if (!!sortBoxDate || !!arrowBtnSortDate) {
      this.setState({ sort: !this.state.sortDate });
    }
    if (itemBox) {
      const name = event.target.attributes[0].value;
      const value = parseInt(event.target.attributes[1].value);
      if (name === "sort") {
        this.props.filterSort(value);
        this.props.fetchTheater(this.props.sortVal);
        this.setState({ sort: false });
      }
      if(name==="sortDate"){
    //     console.log(this.props.allNgayChieu);
    // this.props.fetchTheaterDate(this.props.allNgayChieu);
      }

      // this.props.history.push({ pathname: "/theater" });
    }
  };
  render() {
    const { theater, sort, sortVal ,date} = this.props;
    console.log(date);

    return (
      <div
        className="theater__banner hero-area"
        style={{ backgroundImage: "url(/images/banner-1.jpg)" }}
      >
        <div className="container">
          <div className="theater__banner__content">
            <h3 className="title">Cụm Rạp Chiếu</h3>
          </div>
        </div>
        <div className="book-section">
          <div className="container">
            <div className="filter-tool">
              <div
                className={
                  "filter-item filter-sort " + (this.state.sort ? "active" : "")
                }
              >
                <div className="thumb">
                <img src="./images/city.png" alt=""/>
                </div>
                
                <p>RẠP:</p>
                <span className="item-sort">{sortVal}</span>
                <FaChevronDown className="fa-angle-down" />
                <div className="item-dropbox">
                  <ul className="dropbox-list">
                    <li
                      name="sort"
                      value={0}
                      className={"dropbox-item " + (sort === 0 ? "active" : "")}
                    >
                      BHDStar
                    </li>
                    <li
                      name="sort"
                      value={1}
                      className={"dropbox-item " + (sort === 1 ? "active" : "")}
                    >
                      CGV
                    </li>
                    <li
                      name="sort"
                      value={2}
                      className={"dropbox-item " + (sort === 2 ? "active" : "")}
                    >
                      CineStar
                    </li>
                    <li
                      name="sort"
                      value={3}
                      className={"dropbox-item " + (sort === 3 ? "active" : "")}
                    >
                      Galaxy
                    </li>
                    <li
                      name="sort"
                      value={4}
                      className={"dropbox-item " + (sort === 4 ? "active" : "")}
                    >
                      Lotte
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const filterBox = document.querySelector(".filter-tool");
    filterBox.addEventListener("click", this.handleClick);   
  }
}
const mapStateToProps = (state) => ({
  sort: state.theaterFilterReducer.sort,
  sortVal: state.theaterFilterReducer.sortVal,
  date: state.theaterFilterReducer.date,
});
const mapDispatchToProps = (dispatch) => ({
  filterSort: (theaterType) => {
    dispatch(actFetchTheaterFilter(theaterType));
  },
  fetchTheater: (maHeThongRap) => {
    dispatch(actFetchTheater(maHeThongRap));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TheaterFilter);
