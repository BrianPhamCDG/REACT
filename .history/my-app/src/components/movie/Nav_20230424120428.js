import React from "react";
import { BiSearch } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-1 inline-flex">
        <div className="nav-search p-5 flex items-center justify-center">
          <div className="nav-icon-search w-[32px] h-[32px] bg-[#181818] rounded-full flex items-center justify-center">
            <BiSearch className="text-2xl text-white" />
          </div>
          <span className="font-normal text-white">Search</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
