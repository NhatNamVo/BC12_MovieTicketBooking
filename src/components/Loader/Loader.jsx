import React, { Component } from "react";
import background from 'assets/image/loadding.gif';
import "./Loading.scss";
export default class Loader extends Component {
  render() {
    return (
      <div
        className="loadding-container"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    );
  }
}
