import React, { Component } from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";

import "./resume.css";

export default class Resume extends Component {
  render () {
    const { className, active } = this.props;
    return (
      <Page
        ref="resumePage"
        className={ClassNames(className, "resume")}
        active={active}
      >
        <div className="hexagon hexagon_1"></div>
        <div className="hexagon hexagon_2"></div>
        <div className="hexagon hexagon_3"></div>
      </Page>
    );
  };
};
