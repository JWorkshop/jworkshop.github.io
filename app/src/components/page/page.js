import React, { Component } from "react";
import ClassNames from "classnames";

import "./page.css";

export default class Page extends Component {
  render () {
    const { className, active, children } = this.props;
    return (
      <div className={ClassNames(className, "page", { active: active })}>
        {children}
      </div>
    );
  };
};
