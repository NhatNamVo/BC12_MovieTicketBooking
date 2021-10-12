import React, { Component } from "react";
import { connect } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import "../TheaterFilter/TheaterFilter.scss";
import { actFetchTheaterFilter } from "../TheaterFilter/module/theaterFilterAction";
import { actFetchTheater } from "../module/theaterAction";
import WOW from "wowjs";
class TheaterFilter extends Component {
  state = {
    sort: false,
  };
  handleClick = (event) => {
    event.preventDefault();
    const sortBox = event.target.closest(".theater-item-sort");
    const arrowBtnSort = event.target.closest(".theater-filter-sort .fa-angle-down");
    const itemBox = event.target.closest(".dropbox-item");
    if (!!sortBox || !!arrowBtnSort) {
      this.setState({ sort: !this.state.sort});
    }
    if (itemBox) {
      const name = event.target.attributes[0].value;
      const value = parseInt(event.target.attributes[1].value);
      if (name === "sort") {
        this.props.filterSort(value);
        this.props.fetchTheater(this.props.sortVal);
        this.setState({ sort: false });
      }
     
    }
  };
  render() {
    const {  sort, sortVal} = this.props;

    return (
      <>
        <div className="book-section wow fadeInRight" data-wow-scroll="true " data-wow-duration="1s" >
          <div className="container">
            <div className="theater-filter-tool">
              <div
                className={
                  "theater-filter-item theater-filter-sort " + (this.state.sort ? "active" : "")
                }
              >
                <div className="thumb">
                <img src="./images/city.png" alt=""/>
                </div>
                
                <p>RẠP:</p>
                <span className="theater-item-sort">{sortVal}</span>
                <FaChevronDown className="fa-angle-down" />
                <div className="theater-item-dropbox">
                  <ul className="theater-dropbox-list">
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
      
      </>
    );
  }
  componentDidMount() {
    const filterBox = document.querySelector(".theater-filter-tool");
    filterBox.addEventListener("click", this.handleClick); 
    new WOW.WOW({
      live: false,
    }).init();  
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
