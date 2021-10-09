import React, { Component } from "react";
import "./style.scss"
import "./util"
import "./main"
export default class BackToTop extends Component {
  render() {
    return (
      <div>
        <a href="#" class="arrow-top  cd-top text-replace js-cd-top">
          <i class="fa fa-arrow-up " id="top"></i>
        </a>
      </div>
    );
  }
}
