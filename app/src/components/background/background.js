import React from "react";
import ClassNames from "classnames";

import "./background.css";

export default ({ active }) => (
  <div className={ClassNames("background", { active: active })}>
  </div>
);
