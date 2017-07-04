import React from "react";
import ClassNames from "classnames";

import Page from "../../components/page/page";

import Photo from "./photo.png";

import "./about.css";

export default ({ className, active }) => (
  <Page
    className={ClassNames(className, "about")}
    active={active}
  >
    <div className="about_block">
      <div className="photo" style={{ backgroundImage: `url(${Photo})` }}></div>
      <div className="about_title">Hello There,</div>
      <div className="about_passage">
        <span className="about_headline">I am a Full-Stack Developer and Digital Artist from Hong Kong, currently working in London.</span>
        <p className="about_content">
          I build websites, user interfaces and infographics.<br/>
          Digital artworks, designs and animations are my passion, and I enjoy creating digital artwork in my spare time.
          Of course, being a developer geek, learning new technologies and creating innovative solutions are my thing as well.
          So if you have any fascinating projects or opportunities, I would love to discuss it with you!
        </p>
      </div>
    </div>
  </Page>
);
