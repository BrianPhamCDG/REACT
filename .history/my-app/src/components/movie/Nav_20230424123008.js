import React from "react";
import { BiSearch, BiBell } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav-wrapper flex flex-row items-center w-full">
      <div className="nav-1 flex w-full items-start">
        <div className="nav-search py-3 px-5 rounded-full flex items-center gap-3 bg-[#161616] w-full max-w-[240px]">
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
        <div className="nav-user flex flex-row gap-3">
          <div className="nav-user-wrap w-[40px] h-[40px]">
            <img
              src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          <div className="name text-base text-white">Mike</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
