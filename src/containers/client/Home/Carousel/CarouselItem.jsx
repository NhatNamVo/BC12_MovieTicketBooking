import React, { Component } from "react";
import RenderCarouselImg from "./renderCarouselImg";
import { Route, Link, Switch } from "react-router-dom";
class CarouselItem extends Component {
  state = {
    renderImg: [],
  };
  componentDidMount() {
    const containerWidth = this.props.windowWidth;
    const containerHeight = this.props.containerHeight;
    this.diviveImg(containerWidth, containerHeight);
  }
  componentWillReceiveProps(prevProps) {
    const containerWidth = prevProps.windowWidth;
    const containerHeight = prevProps.containerHeight;
    this.diviveImg(containerWidth, containerHeight);
  }
  diviveImg = (containerWidth, containerHeight) => {
    let containerAppenchild = [];
    const divX = 11;
    const divY = 1;
    const middleX = Math.floor(divX / 2);
    const middleY = Math.floor(divY / 2);
    const imgHref = this.props.imgHref;
    const delay = 0.1;
    for (let i = 0; i < divX; i++) {
      for (let j = 0; j < divY; j++) {
        const width = ((containerWidth / divX) * 100) / containerWidth + "%";
        const height = containerHeight / divY + "px";
        const top =
          ((containerHeight / divY) * j * 100) / containerHeight + "%";
        const left = ((containerWidth / divX) * i * 100) / containerWidth + "%";
        const bgPosX = -((containerWidth / divX) * i) + "px";
        const bgPosY = -((containerHeight / divY) * j) + "px";
        const timeDelay =
          Math.abs(i - middleX) * delay + Math.abs(j - middleY) * delay;
        const divComponent = {
          width: width,
          height: height,
          top: top,
          left: left,
          bgPosX: bgPosX,
          bgPosY: bgPosY,
          timeDelay: timeDelay,
          containerWidth: containerWidth,
          containerHeight: containerHeight,
          imgHref: imgHref,
        };
        containerAppenchild.push(divComponent);
      }
    }
    this.setState({
      renderImg: containerAppenchild,
    });
  };
  render() {
    const { dataIndex, active, match, history, filmInfo } = this.props;
    const { renderImg } = this.state;
    return (
      <>
        <div
          data-index={dataIndex}
          className={"container-fluid carousel p-0 " + active}
          name={dataIndex}
          style={{ width: "100%", margin: "auto", display: "flex" }}
        >
          {renderImg.map((divComp, idx) => {
            const {
              width,
              height,
              top,
              left,
              bgPosX,
              bgPosY,
              containerWidth,
              containerHeight,
              timeDelay,
            } = divComp;
            return (
              <RenderCarouselImg
                width={width}
                height={height}
                top={top}
                left={left}
                bgPosX={bgPosX}
                bgPosY={bgPosY}
                timeDelay={timeDelay}
                containerWidth={containerWidth}
                containerHeight={containerHeight}
                filmInfo={this.props.filmInfo}
                match={match}
                history={history}
              />
            );
          })}
        </div>
        
      </>
    );
  }
}

export default CarouselItem;
