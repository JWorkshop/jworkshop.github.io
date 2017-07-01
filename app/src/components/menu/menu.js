import React from "react";
import ClassNames from "classnames";

import Logo from "./../logo/logo";

import "./menu.css";

export default ({ loading, ready, pages, setPageIndex }) => {
  const pageLength = pages.length;
  const pageItems = pages.map((page, index) => {
    return <div
      key={page.title}
      className="menu_item"
      onClick={() => setPageIndex(index)}
    >{page.title}</div>
  });

  return (
    <div className={ClassNames("menu", { active: loading === false, black: ready })}>
      {ready === true &&
        <div className="menu_left">
          {pageItems.filter((page, index) => index >= 1 && index < pageLength / 2)}
        </div>
      }
      <div
        className="menu_logo_wrapper"
        onClick={() => setPageIndex(0)}
      >
        <Logo
          className="menu_logo"
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
