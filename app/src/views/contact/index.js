import React from "react";
import ClassNames from "classnames";

import Page from "../../components/page";

import "./style.css";

export default ({ className, active }) => (
  <Page
    className={ClassNames(className, "contact")}
    active={active}
  >
  </Page>
);
