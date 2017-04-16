import React, { Component } from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";
import Carousel from "../../components/carousel/carousel";

import "./work.css";

export default class Work extends Component {
  setActive (active) {
    this.refs.workPage.setActive(active);
    this.refs.carousel.setActive(active);
  };

  onActive (active) {

  };

  render () {
    const { className } = this.props;
    return (
      <Page ref="workPage" className={ClassNames(className, "work")} onActive={(active) => this.onActive(active)}>
        <div className="hexagon hexagon_1"></div>
        <div className="hexagon hexagon_2"></div>
        <div className="hexagon hexagon_3"></div>
        <Carousel ref="carousel">
          <div></div>
          <div></div>
          <div></div>
        </Carousel>
      </Page>
    );
  };
};
