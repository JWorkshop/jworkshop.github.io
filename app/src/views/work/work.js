import React, { Component } from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";
import Carousel from "../../components/carousel/carousel";
import WorkItem from "./workitem";
import {workList} from "../../work/worklist";

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
        <Carousel className="work_carousel" ref="carousel">
          {workList.map((object, i) => {
            return (
              <WorkItem key={i} name={object.name} description={object.description} postscript={object.postscript} image={object.image}>
              </WorkItem>
            );
          })}
        </Carousel>
      </Page>
    );
  };
};
