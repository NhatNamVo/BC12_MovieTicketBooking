import React, { Component } from "react";
import Slider from "react-slick";
import MovieTimePlan from "containers/shared/TimePlan/MovieTimePlan";
import { connect } from "react-redux";
import { actChangeCurrentMovieNew } from "../module/actions";

class MovienewList extends Component {
  state = {
    slideItem: this.props.slideItem,
  }
  componentDidMount() {
    this.changeSlideMount(this.props.windowWidth);
    const movieNewList = document.querySelector(".movieNewList");
    movieNewList.addEventListener("click", this.handleEvent);
  }
  handleEvent = (event) => {
    const movieItem = event.target.closest(".movieList-container");
    const movieItemActive = event.target.closest(".movieList-container.active");
    if (!!movieItem && !movieItemActive) {
      const idx = movieItem.dataset.index;
      this.props.changeCurrentPage(idx);
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.windowWidth != this.props.windowWidth) {
      this.changeSlideMount(this.props.windowWidth);
    };
  }
  changeSlideMount = (windowWidth) => {
    let slideItem = 0;
    if(windowWidth < 576){
      slideItem = 2;
    }
    else if(windowWidth >= 576 && windowWidth < 1024){
      slideItem = 3;
    }
    else if(windowWidth >= 1024){
      slideItem = 4;
    }
    this.setState({slideItem:slideItem});
  }
  changeSlide = (event) => {
    const nextBtn = event.target.closest('.movieNewList-next');
    const prevBtn = event.target.closest('.movieNewList-prev');
    const slickNextBtn = document.querySelector('.slick-next');
    const slickPrevBtn = document.querySelector('.slick-prev');
    if(!!nextBtn){
      slickNextBtn.click();
    }
    else if(!!prevBtn){
      slickPrevBtn.click();
    }
  }
  render() {
    console.log(this.props.windowWidth);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.slideItem,
      slidesToScroll: 2,
    };
    const { newMovie, currentMovieIdx } = this.props;
    return (
      <>
        <div className="container movieNewList">
          <div className="movieNewList-prev btn-changeSlide" onClick={this.changeSlide}>
          <i class="fa fa-angle-left"></i>
          </div>
          <Slider {...settings}>
            {newMovie.map((item, idx) => {
              return (
                <div className="movieList-Item" key={idx}>
                  <div className="movieList-content">
                    <div
                      className={
                        "movieList-container " +
                        (idx == currentMovieIdx ? "active" : "")
                      }
                      data-index={idx}
                    >
                      <div className="movieList-img">
                        <img
                          src={item.hinhAnh}
                          alt={item.biDanh}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "./images/assets/images/cinemaDefault.jpg";
                          }}
                        />
                      </div>
                      <div className="movieList-text">
                        <h6>{item.tenPhim}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="movieNewList-next btn-changeSlide" onClick={this.changeSlide}>
          <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </>
    );
  }
}
export default MovienewList;
