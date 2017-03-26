import React, { Component } from "react";

import LoadingScreen from "./components/loadingscreen/loadingscreen";
import TopNav from "./components/topnav/topnav";
import Background from "./components/background/background";
import Intro from "./views/intro/intro";

import "./app.css";

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <LoadingScreen active="false" ref="loadingScreen" />
        <Background />
        <Intro className="page" />
        <TopNav />
      </div>
    );
  };
};
