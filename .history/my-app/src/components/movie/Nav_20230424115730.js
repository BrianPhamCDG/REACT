import React from "react";
import { BiSearch } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-1 inline-flex">
        <div className="nav-search p-5">
          <div className="nav-icon-search w-[32px] h-[32px]">
            <BiSearch className="text-3xl text-white bg-[#181818] rounded-full p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
