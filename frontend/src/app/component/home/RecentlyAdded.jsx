import React from "react";

function RecentlyAdded() {
  return (
    <div className="w-[16rem] h-screen border shadow-2xl overflow-auto ">
        <h1 className="text-center p-4">Recently Viewed</h1>
      <ul className="flex-col flex gap-4 ">
        <li>
          <img src="/shoe.webp" alt="" className="w-full h-[18rem]"/>
        </li>
        <li>
          <img src="/watch.webp" alt="" className="w-full h-[18rem]"/>
        </li>
        <li>
          <img src="/showcase.webp" alt="" className="w-full h-[18rem]"/>
        </li>
        <li>
          <img src="watch1.webp" alt="" className="w-full h-[18rem]"/>
        </li>
        <li>
          <img src="scent.webp" alt="" className="w-full h-[18rem]"/>
        </li>
        <li>
          <img src="mobile.webp" alt="" className="w-full h-[18rem]"/>
        </li>
      </ul>
    </div>
  );
}

export default RecentlyAdded;
