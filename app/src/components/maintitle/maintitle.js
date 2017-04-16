import React, { Component } from "react";
import ClassNames from "classnames";

import "./maintitle.css";

export default class MainTitle extends Component {
  constructor (props) {
    super(props);
    this.state = { active: props.active === "true" };
  };

  setActive (active) {
    this.setState({ active: active });
  };

  render () {
    const { className } = this.props;
    const { active } = this.state;
    return (
      <div className={ClassNames(className, "main_title", { active: active })} onClick={this.handleClick}>
        <div className="firstname"><span>{this.props.firstname}</span></div>
        <div className="divider"></div>
        <div className="lastname"><span>{this.props.lastname}</span></div>
      </div>
    );
  };
};
