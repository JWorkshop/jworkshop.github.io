import React, { Component } from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";

import "./resume.css";

export default class Resume extends Component {
  setActive (active) {
    this.refs.resumePage.setActive(active);
  };

  onActive (active) {

  };

  render () {
    const { className } = this.props;
    return (
      <Page ref="resumePage" className={ClassNames(className, "resume")} onActive={(active) => this.onActive(active)}>
        <div className="hexagon hexagon_1"></div>
        <div className="hexagon hexagon_2"></div>
        <div className="hexagon hexagon_3"></div>
      </Page>
    );
  };
};
