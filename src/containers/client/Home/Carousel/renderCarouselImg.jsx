
import React, { Component } from "react";

class RenderCarouselImg extends Component {
  render() {
    const {
      width,
      height,
      top,
      left,
      bgPosX,
      bgPosY,
      imgHref,
      containerWidth,
      containerHeight,
      timeDelay,
      filmInfo,
      match,
      history,
    } = this.props;
    return (
      <>
        <div
          style={{
            width: width,
            height: height,
            top: top,
            left: left,
            backgroundImage: `url(${imgHref})`,
            backgroundPosition: bgPosX + " " + bgPosY,
            backgroundRepeat: "no-repeat",
            backgroundSize: containerWidth + "px " + containerHeight + "px",
            transitionDelay: timeDelay + "s",
          }}
        ></div>
      </>
    );
  }
}

export default RenderCarouselImg;
