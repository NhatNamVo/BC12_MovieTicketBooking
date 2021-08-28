import React, { Component } from 'react';
import MovieList from './MovieList/MovieList';
import Banner from './Banner/Banner';
import Filter from './Filter/Filter';
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <Banner /> */}
        {/* <Filter /> */}
        <MovieList />
      </div>
    );
  }
} 
