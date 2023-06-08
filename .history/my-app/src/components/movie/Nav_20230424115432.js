import React from "react";
import { BiSearch } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-1 inline-flex">
        <div className="nav-search ">
          <div className="nav-icon-search p-3">
            <BiSearch className="text-2xl text-white bg-[#181818] rounded-full p-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
