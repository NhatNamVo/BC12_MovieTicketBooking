import React, { Component } from "react";
import {
  logoTheaterList,
  theaterNameList,
} from "containers/shared/logoTheater/logoTheater";
import "./TheaterInfo.scss";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaGooglePlusG,
  FaRegPlayCircle,
  FaShoppingCart,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
class TheaterInfo extends Component {
  state = {
    currentTheater: "bhd",
  };
  componentDidMount() {
    this.defineTheater();
  }
  defineTheater = () => {
    const { tenCumRap } = this.props.movieDetail;
    let theaterName = "";
    for (let i = 0; i < theaterNameList.length; i++) {
      if (
        tenCumRap
          .toLocaleLowerCase()
          .indexOf(theaterNameList[i].toLocaleLowerCase()) !== -1
      ) {
        theaterName = theaterNameList[i];
        break;
      }
    }
    switch (theaterName) {
      case "MegaGS":
        this.setState({ currentTheater: logoTheaterList.mega });
        break;
      case "CGV":
        this.setState({ currentTheater: logoTheaterList.cgv });
        break;
      case "Lotte":
        this.setState({ currentTheater: logoTheaterList.lotte });
        break;
      case "GLX":
        this.setState({ currentTheater: logoTheaterList.galaxy });
        break;
      case "BHD":
        this.setState({ currentTheater: logoTheaterList.bhd });
        break;
      case "CNS":
        this.setState({ currentTheater: logoTheaterList.cineStar });
        break;
    }
  };
  render() {
    const { movieDetail } = this.props;
    return (
      <div className="theaterinfo-content">
        <div className="theater-title">
          <img src={this.state.currentTheater} width="50px" alt="" />
          <h6 className="theater-name">{movieDetail.tenCumRap}</h6>
        </div>
        <div className="theater-infoItem">
          <div className="theater-item">
            <div className="theater-number theater-itemContent">
              <i class="fa fa-film"></i>
              {movieDetail.tenRap}
            </div>
          </div>
          <div className="theater-item">
            <div className="theater-address theater-itemContent">
              <i class="fa fa-building"></i>
              {movieDetail.diaChi}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default TheaterInfo;
