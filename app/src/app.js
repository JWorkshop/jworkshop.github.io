import React, { Component } from "react";
import ClassNames from "classnames";

import Background from "./components/background/background";
import Menu from "./components/menu/menu";
import Intro from "./views/intro/intro";
import About from "./views/about/about";
import Work from "./views/work/work";
import Resume from "./views/resume/resume";
import Contact from "./views/contact/contact";

import "./app.css";

const PAGES = [
  { title: "intro", object: Intro },
  { title: "about", object: About },
  { title: "work", object: Work },
  { title: "resume", object: Resume },
  { title: "contact", object: Contact }
];

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      ready: false,
      currentIndex: -1
    };
  };

  componentDidMount () {
    setTimeout(() => {
      this.setState({ loading: false });
      setTimeout(() => {
        this.setState({
          ready: true,
          currentIndex: 0
        });
      }, 2000);
    });
  };

  render () {
    const { loading, ready, currentIndex } = this.state;
    const pages = PAGES.map((page, index) => {
      return <page.object
        key={page.title}
        active={index === currentIndex}
      />;
    });

    return (
      <div className="app">
        <Background active={ready} />
        <div className={ClassNames("hexagon_wrapper", { active: ready })}>
          <div className="hexagon hexagon_1"></div>
          <div className="hexagon hexagon_2"></div>
          <div className="hexagon hexagon_3"></div>
          <div className="hexagon hexagon_4"></div>
          <div className="hexagon hexagon_5"></div>
        </div>
        <Menu
          loading={loading}
          ready={ready}
          pages={PAGES}
          setPageIndex={(index) => this.setState({ currentIndex: index })}
        />
        {loading === false && pages}
      </div>
    );
  };
};
