import React from "react";
import { BiSearch, BiBell } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav-wrapper flex flex-row items-center w-full">
      <div className="nav-1 flex w-full">
        <div className="nav-search py-3 px-5 rounded-full flex items-center justify-center gap-3 bg-[#0D0D0D]">
          <div className="nav-icon-search w-[32px] h-[32px] bg-[#181818] rounded-full flex items-center justify-center">
            <BiSearch className="text-2xl text-white" />
          </div>
          <span className="font-normal text-white">Search</span>
        </div>
      </div>

      <div className="nav-2 left-auto flex flex-row gap-5">
        <div className="nav-icon-search  rounded-full flex items-center justify-center">
          <BiBell className="text-2xl text-white"></BiBell>
        </div>
        <div className="nav-user ">
          <img
            src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="w-[32px] h-[32px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
