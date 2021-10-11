import React, { Component } from "react";
import theaterBanner from "assets/image/theater_banner/theaterBanner.jpg";
import './pageNotFound.scss';
export default class PageNotFound extends Component {
  render() {
    return (
      <div className="pageNotFound-container" style={{
        backgroundImage: `url(${theaterBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="container">
        <h1>404</h1>
          <h4>Lỗi không tìm thấy trang</h4>
          <button onClick={()=>window.location.replace('/')}>Quay lại trang chủ</button>
        </div>
      </div>
    );
  }
}
