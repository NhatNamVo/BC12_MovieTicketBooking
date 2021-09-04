import React, { Component } from 'react';
import MovieList from './MovieList/MovieList';
import Carousel from './Carousel/Carousel';
import Filter from './Filter/Filter';
export default class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Carousel match = {this.props.match} history={this.props.history} location={this.props.location}/>
        {/* <Filter /> */}
      </div>
    );
  }
} 
