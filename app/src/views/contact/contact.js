import React, { Component } from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";

import "./contact.css";

export default class Resume extends Component {
  render () {
    const { className, active } = this.props;
    return (
      <Page
        ref="contactPage"
        className={ClassNames(className, "contact")}
        active={active}
      >
      </Page>
    );
  };
};
