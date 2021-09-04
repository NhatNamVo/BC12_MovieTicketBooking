import withMovieLayout from 'hocs/withMovieLayout';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieItem extends Component {
  render() {
    const { tenPhim, hinhAnh, maPhim } = this.props.data;

    return (
      <div className="col-3" style={{ marginBottom: '30px' }}>
        <div className="card">
          <img className="card-img-top" src={hinhAnh} alt='' />
          <div className="card-body">
            <h4 className="card-title">{tenPhim}</h4>
            <Link to={`/movie-detail/${maPhim}`} className="btn btn-success">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withMovieLayout(MovieItem);
