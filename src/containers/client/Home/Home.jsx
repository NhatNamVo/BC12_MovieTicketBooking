import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import Moviehot from './Moviehot/Movieshot';
import Movienew from './Movienew/Movienew';
import {connect} from 'react-redux';
import {actFetchAllMovie} from './module/actions';
import Loader from 'components/Loader/Loader';
import "./Home.scss"
class Home extends Component {
  render() {
    const {match, history, location, loading} = this.props;
    if(loading) return <Loader/>
    return (
      <div>
        <Carousel match = {match} history={history} location={location}/>
        <Moviehot match = {match} history={history} location={location}/>
        <Movienew match = {match} history={history} location={location}/>
        {/* <BackToTop/> */}
      </div>
    );
  }
  componentDidMount(){
    if(this.props.listMovie.length === 0) {
      this.props.fetchAllMovie();
    } 
  }
}
const mapStateToProps = state => ({
  loading: state.movieReducer.loading,
  listMovie: state.movieReducer.listMovie,
});
const mapDispatchToProps = dispatch => ({
  fetchAllMovie: () => {
    dispatch(actFetchAllMovie());
  },
  fetchMovieBanner: () => {
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);
