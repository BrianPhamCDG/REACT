import React from "react";
import { BiSearch } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-1 inline-flex">
        <div className="nav-search p-5">
          <div className="nav-icon-search w-[32px] h-[32px] bg-[#181818] rounded-full flex items-center">
            <BiSearch className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
