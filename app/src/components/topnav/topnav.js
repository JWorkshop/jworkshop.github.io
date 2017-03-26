import React, { Component } from "react";

import Logo from "./../logo/logo";

import "./topnav.css";

export default class TopNav extends Component {
  render () {
    return (
      <div className="topnav">
        <div className="topnav_left">
          <div className="topnav_item">about</div>
          <div className="topnav_item">work</div>
        </div>
        <Logo className="topnav_logo" active="true" />
        <div className="topnav_right">
          <div className="topnav_item">drawings</div>
          <div className="topnav_item">contact</div>
        </div>
      </div>
    );
  };
};
