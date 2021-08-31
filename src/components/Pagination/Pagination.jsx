import React, { Component } from "react";
import { CreatePagination } from "./usePagination";
import "./Pagination.scss";
import { Link } from "react-router-dom";
export default class Pagination extends Component {
  state = {
    paginationRange: null,
  };
  componentDidMount() {
    const { totalCount, siblingCount, currentPage, pageSize } = this.props;
    this.usePagination(totalCount, pageSize, siblingCount, currentPage);
  }
  componentWillReceiveProps(prevProps, nextProps) {
    const { totalCount, siblingCount, currentPage, pageSize } = prevProps;
    this.usePagination(totalCount, pageSize, siblingCount, currentPage);
  }
  usePagination = (totalCount, pageSize, siblingCount, currentPage) => {
    const paginationRange = CreatePagination(
      totalCount,
      pageSize,
      siblingCount,
      currentPage
    );
    this.setState({
      paginationRange: paginationRange,
    });
  };
  changePage = (type) => {
    const { totalCount, currentPage ,pageSize } = this.props;
    const pageNumberBtn = document.querySelector("a li.selected");
    const linkPageBtn = pageNumberBtn.parentElement;
    const nextPageBtn = linkPageBtn.nextSibling;
    const prevPageBtn = linkPageBtn.previousSibling;
    if(type==='increase' && currentPage < (totalCount/pageSize)){
      nextPageBtn.click();
    }
    if(type==='decrease' && currentPage > 1){
      prevPageBtn.click();
    }
  };
  render() {
    const { currentPage } = this.props;
    const { paginationRange } = this.state;
    const url = this.props.url;
    if (currentPage === 0 && paginationRange.length < 2) {
      return "<1>";
    }
    return (
      paginationRange && (
        <ul className="pagination-container m-auto justify-content-center">
          <li
            className="pagination-item pagination-left"
            onClick={() => this.changePage("decrease")}
          >
            <div className="arrow left" />
          </li>
          {paginationRange.map((pageNumber, idx) => {
            if (pageNumber === "...") {
              return <li className="pagination-item dots">&#8230;</li>;
            }
            return (
              <Link
                to={url + "/Page" + pageNumber}
                data-pageNumber={pageNumber}
                data-pageNumber={pageNumber}
              >
                <li
                  className={
                    "pagination-item " +
                    (pageNumber === currentPage ? "selected" : "")
                  }
                  key={idx}
                >
                  {pageNumber}
                </li>
              </Link>
            );
          })}
          <li
            className="pagination-item pagination-right"
            onClick={() => this.changePage("increase")}
          >
            <div className="arrow right" />
          </li>
        </ul>
      )
    );
  }
}