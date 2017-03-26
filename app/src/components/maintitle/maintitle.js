import React, { Component } from "react";

import "./maintitle.css";

export default class MainTitle extends Component {
  constructor (props) {
    super(props);
    this.state = { active: props.active === "true" };
  };

  show () {
    this.setState({ active: true });
  };

  hide () {
    this.setState({ active: false });
  };

  render () {
    const { className } = this.props;
    return (
      <div className={className + " main_title" + (this.state.active ? " active" : "")} onClick={this.handleClick}>
        <div className="firstname"><span>{this.props.firstname}</span></div>
        <div className="divider"></div>
        <div className="lastname"><span>{this.props.lastname}</span></div>
      </div>
    );
  };
};
