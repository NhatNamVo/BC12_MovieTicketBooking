import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import Movieshow from './Movieshow/Movieshow';
import Moviehot from './Moviehot/Movieshot';
import Movienew from './Movienew/Movienew';
import {connect} from 'react-redux';
import {actFetchAllMovie} from './module/actions';
import Loader from 'components/Loader/Loader';
class Home extends Component {
  render() {
    const {match, history, location, loading} = this.props;
    if(loading) return <Loader/>
    return (
      <div>
        <Carousel match = {match} history={history} location={location}/>
        <Movieshow match = {match} history={history} location={location}/>
        <Moviehot match = {match} history={history} location={location}/>
        <Movienew match = {match} history={history} location={location}/>
      </div>
    );
  }
  componentDidMount(){
    this.props.fetchAllMovie();
  }
}
const mapStateToProps = state => ({
  loading: state.movieReducer.loading,
});
const mapDispatchToProps = dispatch => ({
  fetchAllMovie: () => {
    dispatch(actFetchAllMovie());
  },
  fetchMovieBanner: () => {
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Home);
