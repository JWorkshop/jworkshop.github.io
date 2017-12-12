import React from "react";
import ClassNames from "classnames";

import Logo from "../logo";

import "./style.css";

export default ({ loading, ready, pages, onPageSelect }) => {
  const pageLength = pages.length;
  const pageItems = pages.map((page, index) => {
    return <div
      key={page.title}
      className="menu_item"
      onClick={() => onPageSelect(page)}
    >{page.title}</div>
  });

  return (
    <div className={ClassNames("menu", { loaded: loading === false, active: ready })}>
      {ready === true &&
        <div className="menu_left">
          {pageItems.filter((page, index) => index >= 1 && index < pageLength / 2)}
        </div>
      }
      <div
        className="menu_logo_wrapper"
        onClick={() => onPageSelect(pages[0])}
      >
        <Logo
          className={ClassNames("menu_logo", { logo_ready: ready })}
          loading={loading}
          ready={ready}
         />
      </div>
      {ready === true &&
        <div className="menu_right">
          {pageItems.filter((page, index) => index >= pageLength / 2 && index < pageLength)}
        </div>
      }
    </div>
  );
};
