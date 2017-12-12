import React from "react";
import ClassNames from "classnames";

import Page from "../../components/page";

import Photo from "./photo.png";

import "./style.css";

export default ({ className, active }) => (
  <Page
    className={ClassNames(className, "about")}
    active={active}
  >
    <div className="about_block">
      <div className="about_photo" style={{ backgroundImage: `url(${Photo})` }}></div>
      <div className="about_passage">
        <span className="about_headline">
          I am a Full-Stack Developer and UI/UX Designer from Hong Kong, currently working in London.
        </span>
        <p className="about_content">
          I build websites and design user interfaces.<br/>
          My passion are digital artworks, designs and animations, and I enjoy creating them in my spare time.
        </p>
      </div>
    </div>
  </Page>
);
