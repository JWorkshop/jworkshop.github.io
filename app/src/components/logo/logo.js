import React, { Component } from "react";

import "./logo.css";

export default class Logo extends Component {
  render () {
    const { ...props } = this.props;
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <g className="logo_group">
          <path className="logo_loading_frame" d="M40 200 L200 40 L360 200" />
          <path className="logo_loading_frame" d="M360 200 L200 360 40 200" />
          <path className="logo_frame" d="M40 200 L200 40 L360 200" />
          <path className="logo_frame" d="M360 200 L200 360 40 200" />
          <path className="logo_path" d="M80 220 L100 220 L140 180 L180 220 L220 180 L260 220 L300 180 L320 180" />
          <circle className="logo_dot" cx="110" cy="182" r="4" />
          <circle className="logo_dot" cx="290" cy="218" r="4" />
        </g>
      </svg>
    );
  };
};
