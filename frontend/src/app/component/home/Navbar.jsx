import React from "react";

function Navbar() {
  return (
    <div className="w-[10rem] h-[full] bg-red-600">
      <nav>
        <div>
          <img src="/logo.png" alt="" className="rounded-full" />
        </div>
        <ul className="flex-col flex  gap-9">
          <div className="flex  items-center justify-center">
            {/* <li>Home</li> */}
            <img src="/home.jpg" alt="" className="w-[2rem]" />
          </div>
          <div className="flex items-center justify-center">
            {/* <li>New Arrivals</li> */}
            <img src="/new-arrival.jpg" alt="" className="w-[2rem]" />
          </div>
          <div className="flex items-center justify-center">
            {/* <li>Wishlist</li> */}
            <img src="/wishlist-icon.jpg" alt="" className="w-[2rem]" />
          </div>
          <div className="flex items-center justify-center">
            {/* <li>Cart</li> */}
            <img src="/cart.webp" alt="" className="w-[2rem]" />
          </div>
          <div className="flex items-center justify-center">
            {/* <li>Customer Service</li> */}
            <img src="/customer.jpg" alt="" className="w-[2rem]" />
          </div>

          {/* <li>Best Sellers</li>
          <li>Sale</li>
          <li>Brands</li>
          <li>Cart</li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
