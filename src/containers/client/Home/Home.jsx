import React, { Component } from 'react';
import MovieList from './MovieList/MovieList';
import Carousel from './Carousel/Carousel';
import Filter from './Filter/Filter';
import Movieshow from './Movieshow/Movieshow';
import Moviehot from './Moviehot/Movieshow';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel match = {this.props.match} history={this.props.history} location={this.props.location}/>
        <Movieshow/>
        <Moviehot/>
      </div>
    );
  }
} 
