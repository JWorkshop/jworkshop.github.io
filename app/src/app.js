import React, { Component } from "react";
import createHistory from "history/createBrowserHistory";

import Background from "./components/background/background";
import Menu from "./components/menu/menu";
import Intro from "./views/intro/intro";
import About from "./views/about/about";
import Work from "./views/work/work";
import Resume from "./views/resume/resume";
import Contact from "./views/contact/contact";

import "./app.css";

const history = createHistory();

const PAGES = [
  { title: "intro", path: "/", Component: Intro },
  { title: "about", path: "/about", Component: About },
  { title: "work", path: "/work", Component: Work },
  { title: "resume", path: "/resume", Component: Resume },
  { title: "contact", path: "/contact", Component: Contact }
];

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
        this.setState({
          ready: true
        });
      }, 2000);
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
