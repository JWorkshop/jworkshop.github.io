import React, { Component } from "react";
import ClassNames from "classnames";

import Logo from "./../logo/logo";

import "./menu.css";

export default class Menu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: props.active === "true",
      black: props.black === "true",
      openPage: props.openPage
    };
  };

  setLoading (loading) {
    this.refs.menuLogo.setLoading(loading);
    this.setState({ active: loading === false });
  };

  setBlack (black) {
    this.refs.menuLogo.setBlack(black);
    this.setState({ black: black });
  };

  render () {
    const { active, black } = this.state;
    return (
      <div className={ClassNames("menu", { active: active, black: black })}>
        <div className="menu_left">
          <div className="menu_item item_1" onClick={() => { this.state.openPage("about") }}>about</div>
          <div className="menu_item item_2" onClick={() => { this.state.openPage("work") }}>work</div>
        </div>
        <div className="menu_logo_wrapper" onClick={() => { this.state.openPage("intro") }}>
          <Logo ref="menuLogo" loading="true" black={black} className="menu_logo" />
        </div>
        <div className="menu_right">
          <div className="menu_item item_3" onClick={() => { this.state.openPage("resume") }}>resume</div>
          <div className="menu_item item_4" onClick={() => { this.state.openPage("contact") }}>contact</div>
        </div>
      </div>
    );
  };
};
