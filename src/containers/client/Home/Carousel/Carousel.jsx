import React, { Component } from "react";
import CarouselItem from "./CarouselItem";

import "./Carousel.scss";
export default class Carousel extends Component {
  state = {
    carousel: [
      {
        dataIndex: 1,
        status: "active",
        imgSrc:
          "https://dep.com.vn/wp-content/uploads/2021/02/mua-he-cua-luca.jpg",
        filmInfo: {
          "maPhim": 1535,
          "tenPhim": "Avengers: Infinity War ",
          "biDanh": "avengers-infinity-war",
          "trailer": "https://www.youtube.com/embed/DKqu9qc-5f4",
          "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/avengers-infinity-war.jpg",
          "moTa": "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
          "maNhom": "GP12",
          "ngayKhoiChieu": "2019-07-29T00:00:00",
          "danhGia": 5,
          "hot": false,
          "dangChieu": true,
          "sapChieu": false
        },
      },
      {
        dataIndex: 2,
        status: "",
        imgSrc:
          "https://dep.com.vn/wp-content/uploads/2021/08/Dep262_World-War-Z-1.jpg",
        filmInfo: {
          maPhim: 1415,
          tenPhim: "Jurassic World",
          biDanh: "jurassic-world",
          trailer: "https://www.youtube.com/embed/RFinNxS5KN4",
          hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/jurassicworld.jpg",
          moTa: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
          maNhom: "GP12",
          ngayKhoiChieu: "2019-07-29T00:00:00",
          danhGia: 5,
          hot: false,
          dangChieu: true,
          sapChieu: false,
        },
      },
      {
        dataIndex: 3,
        status: "",
        imgSrc:
          "https://img58.pixhost.to/images/23/220806822_the_tomorrow_war_banner_image.jpg",
        filmInfo: {
          maPhim: 1430,
          tenPhim: "Fantastic Four",
          biDanh: "fantastic-four",
          trailer: "https://www.youtube.com/embed/AAgnQdiZFsQ",
          hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/fantasticfour.jpg",
          moTa: "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
          maNhom: "GP12",
          ngayKhoiChieu: "2019-07-29T00:00:00",
          danhGia: 5,
          hot: true,
          dangChieu: false,
          sapChieu: true,
        },
      },
    ],
    autoPlay: false,
    windowWidth: window.innerWidth,
    containerHeight: 0,
  };
  apiChangeCarousel = (event) => {
    const nextBtn = event.target.closest(".arrow-next");
    const prevBtn = event.target.closest(".arrow-prev");
    if (nextBtn) {
      this.changeCarousel("next");
    }
    if (prevBtn) {
      this.changeCarousel("prev");
    }
  };
  componentDidMount() {
    if (this.state.autoPlay === true) {
      this.carousel = setInterval(() => {
        this.changeCarousel("next");
      }, 10000);
    }
    else{
      clearInterval(this.carousel);
    }
    const container = document.querySelector(".Carousel-content");
    const containerHeight = container.clientHeight;
    this.setState({
      containerHeight: containerHeight,
    });
    window.addEventListener("resize", this.changeWindowWidth);
    const playTrailer = document.querySelector('.btn-trailer');
    playTrailer.addEventListener('click',this.changeAutoPlay);
  }
  changeAutoPlay =(event) =>{
    clearInterval(this.carousel);
    this.setState({autoPlay: false});
    console.log(event, this.state.autoPlay);
  }
  changeWindowWidth = () => {
    const container = document.querySelector(".Carousel-content");
    const containerHeight = container.clientHeight;
    this.setState({
      windowWidth: window.innerWidth,
      containerHeight: containerHeight,
    });
  };
  changeCarousel = (type) => {
    const { carousel } = this.state;
    const itemId = carousel.findIndex((item, idx) => {
      return item.status === "active";
    });
    if (type === "next") {
      carousel[itemId].status = "";
      if (itemId < carousel.length - 1) {
        carousel[itemId + 1].status = "active";
      } else {
        carousel[0].status = "active";
      }
    }
    if (type === "prev") {
      carousel[itemId].status = "";
      if (itemId > 0) {
        carousel[itemId - 1].status = "active";
      } else {
        carousel[carousel.length - 1].status = "active";
      }
    }
    this.setState({
      carousel: carousel,
    });
  };
  render() {
    const { carousel, windowWidth, containerHeight } = this.state;
    const {match, history} = this.props;
    return (
      <div className="Carousel-container">
        <div className="apiBtn arrow-prev" onClick={this.apiChangeCarousel}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="Carousel-content">
          {carousel.map((item, idx) => {
            return (
              <CarouselItem
                key={idx}
                dataIndex={item.dataIndex}
                active={item.status}
                imgHref={item.imgSrc}
                windowWidth={windowWidth}
                containerHeight={containerHeight}
                filmInfo={item.filmInfo}
                match = {match}
                history = {history}
              />
            );
          })}
        </div>
        <div className="apiBtn arrow-next" onClick={this.apiChangeCarousel}>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    );
  }
}
