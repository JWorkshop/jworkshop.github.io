import React, { Component } from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";
import Carousel from "../../components/carousel/carousel";
import WorkItem from "./workitem";
import {workList} from "../../work/worklist";

import "./work.css";

export default class Work extends Component {
  render () {
    const { className, active } = this.props;
    return (
      <Page
        ref="workPage"
        className={ClassNames(className, "work")}
        active={active}
      >
        <Carousel
          className="work_carousel"
          ref="carousel"
          active={active}
        >
          {workList.map((object, i) => {
            return (
              <WorkItem
                key={i}
                name={object.name}
                description={object.description}
                postscript={object.postscript}
                image={object.image}>
              </WorkItem>
            );
          })}
        </Carousel>
      </Page>
    );
  };
};
