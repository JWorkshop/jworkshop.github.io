import React from "react";
import ClassNames from "classnames";

import "./page.css";

export default ({ className, active, children }) => (
  <div className={ClassNames(className, "page", { active: active })}>
    {children}
  </div>
);
