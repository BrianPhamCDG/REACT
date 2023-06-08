import React from "react";
import { BiSearch } from "react-icons/fa";
const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-1 inline-flex">
        <div className="nav-search">
          <BiSearch></BiSearch>
        </div>
      </div>
    </div>
  );
};

export default Nav;
