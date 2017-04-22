import React, { Component } from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";
import MainTitle from "../../components/maintitle/maintitle";

import "./intro.css";

export default class Intro extends Component {
  render () {
    const { className, active } = this.props;
    return (
      <Page
        ref="introPage"
        className={ClassNames(className, "intro")}
        active={active}
      >
        <div className="intro_block">
          <MainTitle
            ref="title"
            className="intro_title"
            firstname="John"
            lastname="Wong"
            active={active}
          />
          <div className="intro_subtitle intro_subtitle_1">Full-Stack Developer</div>
          <div className="intro_subtitle intro_subtitle_2">Digital Artist</div>
        </div>
      </Page>
    );
  };
};
