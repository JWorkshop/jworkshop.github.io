import React from "react";
import ClassNames from "classnames";

import "./style.css";

export default ({ className, active, firstName, lastName }) => (
  <div className={ClassNames(className, "main_title", { active: active })}>
    <div className="firstname"><span>{firstName}</span></div>
    <div className="divider"></div>
    <div className="lastname"><span>{lastName}</span></div>
  </div>
);
