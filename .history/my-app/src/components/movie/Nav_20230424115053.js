import React from "react";
import { BiSearch } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-1 inline-flex">
        <div className="nav-search">
          <BiSearch className="text-2xl p-5" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
