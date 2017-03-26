import React, { Component } from "react";

import MainTitle from "../../components/maintitle/maintitle";

import "./intro.css";

export default class Intro extends Component {
  constructor (props) {
    super(props);
    this.state = { active: props.active === "true" };
  };

  render () {
    const { className } = this.props;
    return (
      <div className={className + " intro" + (this.state.active ? " active" : "")}>
        <div className="intro_block">
          <MainTitle className="intro_title" firstname="john" lastname="wong" active="true" />
        </div>
      </div>
    );
  };
};
