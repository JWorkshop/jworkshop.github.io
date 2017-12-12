import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";
import { Animator, CanvasAnimator } from "client-tools";
import Background from "./components/background";
import Menu from "./components/menu";
import Intro from "./views/intro";
import About from "./views/about";
import Work from "./views/work";
import Resume from "./views/resume";
import Contact from "./views/contact";

import "./app.css";

const history = createHistory();

const PAGES = [
  { title: "intro", path: "/", Component: Intro },
  { title: "about", path: "/about", Component: About },
  { title: "work", path: "/work", Component: Work },
  { title: "resume", path: "/resume", Component: Resume },
  { title: "contact", path: "/contact", Component: Contact }
];
console.log(Animator)
export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      ready: false
    };
  };

  componentDidMount () {
    history.listen(() => {
      this.forceUpdate();
    });

    setTimeout(() => {
      this.setState({ loading: false });

      setTimeout(() => {
        this.setState({ ready: true });
      }, 1500);
    }, 1000);
  };

  render () {
    const { loading, ready } = this.state;
    const { pathname } = history.location;

    const pages = PAGES.map(({ title, path, Component }, index) => {
      return <Component key={title} active={ready && path === pathname} />;
    });

    return (
      <div className="app">
        <Background active={ready} />
        <CanvasAnimator style={{ position: "absolute", width: "100%", height: "100%" }} />
        <Menu
          loading={loading}
          ready={ready}
          pages={PAGES}
          onPageSelect={({ path }) => history.push(path)}
        />
        {loading === false && pages}
      </div>
    );
  };
};
