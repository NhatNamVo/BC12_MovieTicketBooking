import React, { Component } from "react";
import { CreatePagination } from "./usePagination";
import "./Pagination.scss";
class Pagination extends Component {
  state = {
    paginationRange: null,
  };
  componentDidMount() {
    const { totalCount, siblingCount, currentPage, pageSize } = this.props;
    const paginationRange = this.usePagination(
      totalCount,
      pageSize,
      siblingCount,
      currentPage
    );
    this.setState({
      paginationRange: paginationRange,
    });
  }
  usePagination = (totalCount, pageSize, siblingCount, currentPage) => {
    return CreatePagination(totalCount, pageSize, siblingCount, currentPage);
  };
  render() {
    const { currentPage } = this.props;
    const { paginationRange } = this.state;
    console.log(paginationRange);
    if (currentPage === 0 && paginationRange.length < 2) {
      return "<1>";
    }
    return (
      paginationRange && (
        <ul className="pagination-container m-auto justify-content-center">
          <li className="pagination-item pagination-bar">
            <div className="arrow left" />
          </li>
          {paginationRange.map((pageNumber, idx) => {
            if (pageNumber === '...') {
                return <li className="pagination-item dots">&#8230;</li>;
            }
            return <li className={'pagination-item ' +
                ((pageNumber === currentPage)?'selected':'')} key={idx}>{pageNumber}</li>;
          })}
          <li
            className="pagination-item"
          >
            <div className="arrow right" />
          </li>
        </ul>
      )
    );
  }
}

export default Pagination;
