import React, { Component } from "react";
import ClassNames from "classnames";

import "./carousel.css";

export default class Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = { focusIndex: 0 };
  };

  setFocusIndex (index) {
    const { children } = this.props;
    index = Math.max(0, Math.min(children.length - 1, index));
    this.setState({ focusIndex: index });
  };

  render () {
    const { className, active, children } = this.props;
    const { focusIndex } = this.state;
    return (
      <div className={ClassNames(className, "carousel_wrapper", { active: active })}>
        <div className="carousel">
          {children.map((object, i) => {
            return <div
              key={i}
              className={ClassNames("carousel_item", { active: focusIndex === i })}
            >{object}</div>;
          })}
        </div>
        <div className="carousel_thumbnail">
          {children.map((object, i) => {
            return <div
              key={i}
              className={ClassNames("carousel_thumbnail_item", { active: focusIndex === i })}
              onClick={() => this.setFocusIndex(i)}
            ></div>;
          })}
        </div>
        <div
          className={ClassNames("left_control", { disabled: focusIndex === 0 })}
          onClick={() => this.setFocusIndex(focusIndex - 1)}
        ></div>
        <div
          className={ClassNames("right_control", { disabled: focusIndex === children.length - 1 })}
          onClick={() => this.setFocusIndex(focusIndex + 1)}></div>
      </div>
    );
  };
};
