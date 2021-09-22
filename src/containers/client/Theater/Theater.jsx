import React, { Component } from "react";
import "containers/client/Theater/Theater.scss";
import Loader from "components/Loader/Loader";
import { actFetchTheater } from "./module/theaterAction";
import { connect } from "react-redux";
import TheaterFilter from "./TheaterFilter/TheaterFilter";

class Theater extends Component {
  render() {
    const { theater, loading } = this.props;
    if (loading) return <Loader />;
    return( 
    <div>
      <TheaterFilter/>
    </div>
    )
  }
  componentDidMount() {
    this.props.fetchTheater();
  }
}
const mapStateToProps = (state) => ({
  theater: state.theaterReducer.theater,
  loading: state.theaterReducer.loading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchTheater: () => {
    dispatch(actFetchTheater());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Theater);
//làm lại dropdown
