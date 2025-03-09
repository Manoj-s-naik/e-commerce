import React from "react";
import Profile from "./Profile";

function Header() {
  return (
    <>
      <div className=" w-screen flex justify-between items-center pt-6">
        <div className="">
          <img src="/logo.png" alt="" className="h-[5rem]" />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search your product"
          className="w-[900px] h-[3rem] text-center rounded-xl focus:outline-none ml-3 border shadow-sm"
        />
        <div className="flex gap-4 mr-[7rem]  h-[3rem]">
          <button className=" w-[4rem] border hover:shadow-md rounded-md">
            Search
          </button>
          <button className=" w-[4rem] border hover:shadow-md rounded-md flex items-center gap-2">
            <div>
              <img src="/filter.svg" alt="" className="h-8" />
            </div>
            <div>
              <p>Filter</p>
            </div>
          </button>
        </div>
        <div className="">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Header;
