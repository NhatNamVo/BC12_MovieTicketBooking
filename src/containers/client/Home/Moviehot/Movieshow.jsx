import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import renderMovie from '../MovieItem/RenderMovieList';
class Moviehot extends Component {
  state = {
    movieList: [
      {
        maPhim: 1550,
        tenPhim: "Avengers: Infinity War ",
        biDanh: "avengers-infinity-war",
        trailer: "https://www.youtube.com/embed/DKqu9qc-5f4",
        hinhAnh:
          "http://movieapi.cyberlearn.vn/hinhanh/avengers-infinity-war.jpg",
        moTa: "Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ. ",
        maNhom: "GP12",
        ngayKhoiChieu: "2019-07-29T00:00:00",
        danhGia: 5,
        hot: true,
        dangChieu: false,
        sapChieu: true,
      },
      {
        maPhim: 5163,
        tenPhim: "Thợ Săn Quái Vật ",
        biDanh: "tho-san-quai-vat",
        trailer: "https://www.youtube.com/embed/puQyZsaTtqY",
        hinhAnh:
          "http://movieapi.cyberlearn.vn/hinhanh/tho-san-quai-vat-monster-hunter_gp01.png",
        moTa: "Monster Hunter được chuyển thể từ series game nổi tiếng cùng tên của Capcom. Trong phim, đội trưởng Artemis của nữ diễn viên Milla Jovovich (Resident Evil) và đồng đội đã vô tình bước qua một cánh cửa bí ẩn dẫn tới thế giới khác. Tại đây, họ phải chiến đấu với nhiều loài quái vật khổng lồ trong hành trình trở về thế giới. Đồng hành với họ trong trận chiến là nhân vật “Thợ săn” của nam diễn viên Tony Jaa (Ong Bak). Monster Hunter hứa hẹn sẽ là bom tấn hành động với những màn săn quái vật khổng lồ hoành tráng nhất năm 2020.",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-08-29T10:46:41.997",
        danhGia: 10,
        hot: true,
        dangChieu: false,
        sapChieu: true,
      },
      {
        maPhim: 5200,
        tenPhim: "Võ Sinh Đại Chiến",
        biDanh: "vo-sinh-dai-chien",
        trailer: "https://www.youtube.com/embed/mrNqbx4vUvA",
        hinhAnh:
          "http://movieapi.cyberlearn.vn/hinhanh/vo-sinh-dai-chien_gp01.png",
        moTa: "Phim kể về “sự nghiệp” giải ngố của anh chàng Khoa từ Bình Định vào Sài Gòn nhập học. Thích võ thuật từ nhỏ, chân ướt chân ráo vào câu lạc bộ võ Ta của trường và phải lòng ngay “tiểu thư” danh giá của bao chàng theo đuổi.",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-01-01T00:00:00",
        danhGia: 10,
        hot: false,
        dangChieu: true,
        sapChieu: false,
      },
      {
        maPhim: 7938,
        tenPhim: "Hồn ma cô đơn",
        biDanh: "hon-ma-co-don",
        trailer: "maa",
        hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/hon-ma-co-don_gp01.jpg",
        moTa: "phim hành động hấp dẫn lôi cuốn và thu hút được rất nhiều người xem khán giả thiếu nhi",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-08-20T00:00:00",
        danhGia: 10,
        hot: true,
        dangChieu: true,
        sapChieu: true,
      },
      {
        maPhim: 8028,
        tenPhim: "Silient HIll ",
        biDanh: "silient-hill",
        trailer: "https://youtu.be/1mfnhu8sO5k",
        hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/silient-hill_gp01.jpg",
        moTa: "Silient HIll 123",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-08-20T00:00:00",
        danhGia: 10,
        hot: true,
        dangChieu: true,
        sapChieu: true,
      },
      {
        maPhim: 8070,
        tenPhim: "Suicide Squad 22",
        biDanh: "suicide-squad-22",
        trailer: "https://www.youtube.com/watch?v=JuDLepNa7hw",
        hinhAnh:
          "http://movieapi.cyberlearn.vn/hinhanh/suicide-squad-22_gp01.jpg",
        moTa: "Suicide Squad 2",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-08-23T00:00:00",
        danhGia: 10,
        hot: true,
        dangChieu: true,
        sapChieu: true,
      },
      {
        maPhim: 7861,
        tenPhim: "Minion 3",
        biDanh: "minion-3",
        trailer: "https://youtu.be/v20G-Z1kKD8",
        hinhAnh: "http://movieapi.cyberlearn.vn/hinhanh/minion_gp01.jpg",
        moTa: "The Dialog variant is displayed in the center of the page, useful for mobile or small interfaces.",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-08-03T12:17:14.843",
        danhGia: 10,
        hot: null,
        dangChieu: null,
        sapChieu: null,
      },
      {
        maPhim: 7334,
        tenPhim: "Black Widow phần 3",
        biDanh: "black-widow-phan-3",
        trailer: "https://www.youtube.com/watch?v=Fp9pNPdNwjI&t=9s",
        hinhAnh:
          "http://movieapi.cyberlearn.vn/hinhanh/black-widow-phan-3_gp01.jpg",
        moTa: "Điểm bất ngờ chỉ đến khi cú twist giữa phim xuất hiện khiến cho câu chuyện đột nhiên trở nên thú vị, gây thích thú cho khán giả. Đến đây, phim sẽ khá tương đồng với mạch phim của Spider-Man: Homecoming, nhưng khá khó hiểu Sony lại chọn một cách kết phim khá tầm thường so với phần còn lại đầy “ bốc lửa ”của bộ phim. Cách kết phá đi tính cao trào giống như Captain Marvel vô tình tạo một sự hụt hẫng trong cảm xúc của người xem và không rõ đây có phải là ý đồ của Sony nhằm tạo ra những điểm gợn, sự tò mò cho khán giả hay không",
        maNhom: "GP01",
        ngayKhoiChieu: "2021-07-30T00:00:00",
        danhGia: 20,
        hot: false,
        dangChieu: true,
        sapChieu: false,
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <h3>Phim đang hot</h3>
        <div className="row">
          {renderMovie(MovieItem, this.state.movieList)}
        </div>
      </div>
    );
  }
}

export default Moviehot;
