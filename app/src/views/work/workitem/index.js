import React from "react";
import ClassNames from "classnames";

import "./style.css";

export default ({ className, image, name, description, postscript }) => (
  <div className={ClassNames("work_item", className)}>
    <img className="work_image" src={image} alt={name}/>
    <div className="work_overlay">
      <div className="work_overlay_block">
        <div className="work_name">{name}</div>
        <div className="work_description">{description}<br/><br/>{postscript}</div>
        <div className="work_view">View</div>
      </div>
    </div>
  </div>
);
