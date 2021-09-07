import { actGetTrailerMovie } from "containers/client/Home/module/actions";
import React, { Component } from "react";
import "./ModalTrailer.scss";
import { connect } from "react-redux";
class ModalTrailer extends Component {
  state = {
    popup: false,
  };
  componentDidMount() {
    this.displayPopup = setTimeout(() => this.setState({ popup: true }), 500);
    const movieId = this.props.match.params.movieId;
    this.props.GetTrailer(movieId);
    const trailerForm = document.querySelector(".trailer-Modal");
    trailerForm.addEventListener("click", this.closePopup);
  }
  componentWillUnmount() {
    clearTimeout(this.displayPopup);
  }
  closePopup=(e)=>{
    const iframe = e.target.closest(".trailer-content ifrane");
    const closeBtn = e.target.closest(".fa-times");
    if (!!closeBtn || !iframe) {
      this.setState({ popup: false });
      this.displayPopup = setTimeout(() => this.props.history.goBack(), 500);
    }
  }
  render() {
    const { trailer } = this.props;
    return (
      <div className="trailer-Modal">
        <i class="fa fa-times"></i>
        <div
          className={"trailer-content " + (this.state.popup ? "active" : "")}
        >
          <iframe
            width={window.innerWidth * 0.6}
            height={window.innerHeight * 0.6}
            frameborder="0"
            src={trailer + "?autoplay=1"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  trailer: state.movieReducer.currentTrailerMovie,
});
const mapDispatchToProps = (dispatch) => ({
  GetTrailer: (movieId) => {
    dispatch(actGetTrailerMovie(movieId));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalTrailer);
