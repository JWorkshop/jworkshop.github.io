import React, { Component } from "react";

import LoadingScreen from "./components/loadingscreen/loadingscreen";
import MainTitle from "./components/maintitle/maintitle";
import Signature from "./components/signature/signature";

import "./app.css";

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <LoadingScreen active="false" />
        <MainTitle active="false" firstname="john" lastname="wong" />
        <Signature />
      </div>
    );
  };
};
