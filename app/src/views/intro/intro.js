import React from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";
import MainTitle from "../../components/maintitle/maintitle";

import "./intro.css";

export default ({ className, active }) => (
  <Page
    className={ClassNames(className, "intro")}
    active={active}
  >
    <div className="intro_block">
      <MainTitle
        className="intro_title"
        firstName="John"
        lastName="Wong"
        active={active}
      />
      <div className="intro_subtitle intro_subtitle_1">Full-Stack Developer</div>
      <div className="intro_subtitle intro_subtitle_2">Digital Artist</div>
    </div>
  </Page>
);
