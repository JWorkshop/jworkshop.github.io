import React, { Component } from "react";
import ClassNames from "classnames";

import "./page.css";

export default class Page extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: props.active === "true",
      onActive: props.onActive
    };
  };

  setActive (active) {
    this.setState({ active: active });
    this.state.onActive(active);
  };

  render () {
    const { className, children } = this.props;
    const { active } = this.state;
    return (
      <div className={ClassNames(className, "page", { active: active })}>
        {children}
      </div>
    );
  };
};
