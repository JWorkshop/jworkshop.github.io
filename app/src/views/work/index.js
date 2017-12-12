import React from "react";
import ClassNames from "classnames";

import Page from "../../components/page";
import Carousel from "../../components/carousel";
import WorkItem from "./workitem";
import { workList } from "../../work/worklist";

import "./style.css";

export default ({ className, active }) => (
  <Page
    className={ClassNames(className, "work")}
    active={active}
  >
    <Carousel
      className="work_carousel"
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
