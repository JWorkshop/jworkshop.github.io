import React, { Component } from "react";

import Logo from "./../logo/logo";

import "./loadingscreen.css";

export default class LoadingScreen extends Component {
  constructor (props) {
    super(props);
    this.state = { active: props.active === "true" };
  };

  setComplete () {
    this.setState({ active: false });
    this.refs.loadingLogo.activate();
  };

  render () {
    return (
      <div className={"loading_screen" + (this.state.active ? " active" : "")}>
        <Logo className="loading_logo" ref="loadingLogo" />
      </div>
    );
  };
};
