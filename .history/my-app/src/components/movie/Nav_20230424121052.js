import React from "react";
import { BiSearch, BiBell } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav-wrapper flex flex-row items-center w-screen">
      <div className="nav-1 inline-flex">
        <div className="nav-search py-3 px-5 rounded-full flex items-center justify-center gap-3 bg-[#0D0D0D]">
          <div className="nav-icon-search w-[32px] h-[32px] bg-[#181818] rounded-full flex items-center justify-center">
            <BiSearch className="text-2xl text-white" />
          </div>
          <span className="font-normal text-white">Search</span>
        </div>
      </div>

      <div className="nav-2 left-auto">
        <BiBell className="text-2xl text-white"></BiBell>
      </div>
    </div>
  );
};

export default Nav;
