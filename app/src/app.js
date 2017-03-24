import React, { Component } from "react";

import LoadingScreen from "./components/loadingscreen/loadingscreen";

import "./app.css";

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <LoadingScreen active="true" />
        <div className="coming_soon">Coming Soon...</div>
      </div>
    );
  };
};
