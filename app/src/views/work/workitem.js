import React, { Component } from "react";

import "./workitem.css";

export default class WorkItem extends Component {
  render () {
    const { name, description, postscript, image } = this.props;
    return (
      <div className="work_item">
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
  };
};
