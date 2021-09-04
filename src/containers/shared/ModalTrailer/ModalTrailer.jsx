import React, { Component } from "react";
import "./ModalTrailer.scss";
class ModalTrailer extends Component {
  // state = {
  //   popup: false,
  // };
  // filmLink = null;
  // componentDidMount() {
  //   const { carousel, match } = this.props;
  //   const trailerIdx = carousel.findIndex((item, idx) => {
  //     return item.filmInfo.maPhim == match.params.movieId;
  //   });
  //   this.filmLink = carousel[trailerIdx].filmInfo.trailer;
  //   console.log(this.filmLink);
  //   this.setPopup = setTimeout(() => {
  //     this.setState({
  //       popup: true,
  //     });
  //   }, 1000);
  //   const trailertModal = document.querySelector('.trailer-Modal');
  //   trailertModal.addEventListener('click', this.closePopup);
  // }
  // componentWillUnmount() {
  //   this.setState({ popup: false });
  //   clearTimeout(this.setPopup);
  //   clearTimeout(this.closePopup);
  // }
  // closePopup =(event) => {
  //   const iframeComponent = event.target.closest('iframe');
  //   const closeBtn = event.target.closest('.fa-times');
  //   if(closeBtn||!iframeComponent){
  //       this.setState({ popup: false });
  //       this.closePopup = setTimeout(() =>{
  //           this.props.history.goBack();
  //       },500)
  //   }
  // }
  render() {
    return (
      <div className="trailer-Modal">
          <i class="fa fa-times"></i>
        {/* <div
          className={"trailer-content " + (this.state.popup ? "active" : "")}
        > */}
          {/* <iframe
            width="100%"
            height={containerHeight}
            src={this.filmLink + "?autoplay=1"}
            frameborder="0"
            allow='autoplay'
            allowfullscreen
          ></iframe> */}
          
        {/* </div> */}
      </div>
    );
  }
}

export default ModalTrailer;
