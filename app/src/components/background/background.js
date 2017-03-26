import React, { Component } from "react";

import "./background.css";

export default class Background extends Component {
  constructor (props) {
    super(props);
    this.state = { active: props.active === "true" };
  };

  render () {
    return (
      <div className={"background" + (this.state.active ? " active" : "")}>
      </div>
    );
  };
};
