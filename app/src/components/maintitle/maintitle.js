import React, { Component } from "react";
import ClassNames from "classnames";

import "./maintitle.css";

export default class MainTitle extends Component {
  render () {
    const { className, active } = this.props;
    return (
      <div className={ClassNames(className, "main_title", { active: active })} onClick={this.handleClick}>
        <div className="firstname"><span>{this.props.firstname}</span></div>
        <div className="divider"></div>
        <div className="lastname"><span>{this.props.lastname}</span></div>
      </div>
    );
  };
};
