import React, { Component } from "react";
import ClassNames from "classnames";

import "./background.css";

export default class Background extends Component {
  render () {
    const { active } = this.props;
    return (
      <div className={ClassNames("background", { active: active })}>
      </div>
    );
  };
};
