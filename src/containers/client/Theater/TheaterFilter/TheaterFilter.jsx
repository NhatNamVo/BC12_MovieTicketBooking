import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FaChevronDown
} from "react-icons/fa";
import { actFetchTheaterFilter } from "../TheaterFilter/module/theaterFilterAction";
 class TheaterFilter extends Component {
  state = {
    sort: false,
  };
  handleClick = (event) => {
    event.preventDefault();
    const sortBox = event.target.closest(".item-sort");
    const arrowBtnSort = event.target.closest(".filter-sort .fa-angle-down");
    const itemBox = event.target.closest(".dropbox-item");
    if (!!sortBox || !!arrowBtnSort) {
      this.setState({ sort: !this.state.sort, show: false });
    }
    if (itemBox) {
      const name = event.target.attributes[0].value;
      const value = parseInt(event.target.attributes[1].value);
      if (name === "sort") {
        this.props.filterSort(value);
        this.setState({ sort: false });
      }

      this.props.history.push({ pathname: "/movie" });
    }
  };
  render() {
    
    const { sort, sortVal } = this.props;
    console.log(this.props);
    
    return (
      <div
        className="theater__banner hero-area"
        style={{ backgroundImage: "url(/images/banner-1.jpg)" }}
      >
        <div className="container">
          <div className="theater__banner__content">
            <h3 className="title">Theaters</h3>
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
                <p>CITY</p>
                <span className="item-sort">{sortVal}</span>
                <FaChevronDown/>
                <div className="item-dropbox">
                  <ul className="dropbox-list">
                    <li
                      name="sort"
                      value={0}
                      className={"dropbox-item " + (sort === 0 ? "active" : "")}
                    >
                      BHD
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
                      value={3}
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
const mapStateToProps = state => ({
  sort: state.theaterFilterReducer.sort,
  sortVal: state.theaterFilterReducer.sortVal,
})
const mapDispatchToProps = dispatch =>({
  filterSort: (theaterType) => {
    dispatch(actFetchTheaterFilter(theaterType));
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(TheaterFilter);