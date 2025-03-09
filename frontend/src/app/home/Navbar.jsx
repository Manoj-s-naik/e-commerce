import React from "react";

function Navbar() {
  return (
    <div className="w-[10rem] h-[634px]  ">
      <nav>
        <ul className="flex-col flex  gap-[3rem] pt-[2rem] ">
          <div className="flex  items-center justify-center relative group">
            <img src="/home.jpg" alt="" className="w-[2rem]" />
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 ml-[3rem] rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Home
            </div>
          </div>
          <div className="flex items-center justify-center  relative group">
            <img src="/new-arrival.jpg" alt="" className="w-[2rem]" />
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 ml-[3rem] rounded opacity-0 group-hover:opacity-100 transition-opacity">
              New Arrival
            </div>
          </div>
          <div className="flex items-center justify-center relative group">
            <img src="/wishlist-icon.jpg" alt="" className="w-[2rem]" />
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 ml-[3rem] rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Wishlist
            </div>
          </div>
          <div className="flex items-center justify-center  relative group">
            <img src="/cart.webp" alt="" className="w-[2rem]" />
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 ml-[3rem] rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Cart
            </div>
          </div>
          <div className="flex items-center justify-center  relative group">
            <img src="/customer.jpg" alt="" className="w-[2rem]" />
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-sm px-3 py-1 ml-[4rem] rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Customer Support
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
