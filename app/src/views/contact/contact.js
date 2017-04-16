import React, { Component } from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";

import "./contact.css";

export default class Resume extends Component {
  setActive (active) {
    this.refs.contactPage.setActive(active);
  };

  onActive (active) {

  };

  render () {
    const { className } = this.props;
    return (
      <Page ref="contactPage" className={ClassNames(className, "contact")} onActive={(active) => this.onActive(active)}>

      </Page>
    );
  };
};
