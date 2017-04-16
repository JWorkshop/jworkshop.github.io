import React, { Component } from "react";

import Background from "./components/background/background";
import Menu from "./components/menu/menu";
import Intro from "./views/intro/intro";
import About from "./views/about/about";
import Work from "./views/work/work";
import Resume from "./views/resume/resume";
import Contact from "./views/contact/contact";

import "./app.css";

export default class App extends Component {
  constructor (props) {
    super(props);
    this.pageRefs = [
      "intro",
      "about",
      "work",
      "resume",
      "contact"
    ];
  };

  componentDidMount () {
    setTimeout(() => {
      this.refs.menu.setLoading(false);
      setTimeout(() => {
        this.refs.intro.setActive(true);
        this.refs.menu.setBlack(true);
        this.refs.background.setActive(true);
      }, 2000);
    });
  };

  openPage (ref) {
    var refs = this.refs;
    this.pageRefs.map((pageRef) => { return refs[pageRef].setActive(false); });
    this.refs[ref].setActive(true);
  };

  render () {
    return (
      <div className="app">
        <Background ref="background" />
        <Menu ref="menu" black="true" openPage={(ref) => this.openPage(ref)} />
        <Intro ref="intro" />
        <About ref="about" />
        <Work ref="work" />
        <Resume ref="resume" />
        <Contact ref="contact" />
      </div>
    );
  };
};
