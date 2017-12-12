import React from "react";
import ClassNames from "classnames";

import Page from "../../components/page";

import "./style.css";

export default ({ className, active }) => (
  <Page
    className={ClassNames(className, "resume")}
    active={active}
  >
    <div className="hexagon hexagon_1"></div>
    <div className="hexagon hexagon_2"></div>
    <div className="hexagon hexagon_3"></div>
  </Page>
);
