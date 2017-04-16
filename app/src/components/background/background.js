import React, { Component } from "react";
import ClassNames from "classnames";

import "./background.css";

export default class Background extends Component {
  constructor (props) {
    super(props);
    this.state = { active: props.active === "true" };
  };

  setActive (active) {
    this.setState({ active: active });
  };

  render () {
    const { active } = this.state;
    return (
      <div className={ClassNames("background", { active: active })}>
      </div>
    );
  };
};
