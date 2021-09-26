import React, { Component } from "react";
import { FaChevronDown } from "react-icons/fa";
import { connect } from "react-redux";
import { actFetchTheaterDate } from "../module/theaterFilterAction";

class TheaterDate extends Component {
  render() {
    const { lichChieu, key, date ,allNgayChieu} = this.props;
    return (
      <div>
        <li
          name="sort"
          value={0}
            className={"dropbox-item " + ( key=== date ? "active" : "")}
        >
          {date}
        </li>
      </div>
    );
    
  }
 
  
}
const mapStateToProps = (state) => ({
  date: state.theaterFilterReducer.date,
});
const mapDispatchToProps = (dispatch) => ({
  fetchTheaterDate: (allNgayChieu) => {
    dispatch(actFetchTheaterDate(allNgayChieu));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TheaterDate);