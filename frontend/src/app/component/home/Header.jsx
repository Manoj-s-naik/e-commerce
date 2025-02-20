import React from "react";

function Header() {
  return (
    <>
      <div className="w-[1000px]  flex justify-between items-center pt-6 gap-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search your product"
          className="w-full h-[4rem] text-center rounded-xl focus:outline-none ml-3 "
        />
        <div className="flex gap-4 mr-[7rem]  h-[3rem]">
          <button className="bg-slate-400  w-[4rem]">Search</button>
          <button className="bg-slate-400 w-[4rem]">Filter</button>
        </div>
      </div>
    </>
  );
}

export default Header;
