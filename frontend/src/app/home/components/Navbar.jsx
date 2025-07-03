"use client";
import React from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  { src: "/home.jpg", label: "Home", path: "/" },
  { src: "/new-arrival.jpg", label: "New Arrival", path: "/new-arrival" },
  { src: "/wishlist-icon.jpg", label: "Wishlist", path: "/wishlist" },
  { src: "/cart.webp", label: "Cart", path: "/cart" },
  { src: "/customer.jpg", label: "Customer Support", path: "/customersupport" },
];

function Navbar() {
  const router = useRouter();

  const handleNavClick = (path) => {
    console.log(`Navigating to: ${path}`);
    router.push(path);
  };

  return (
    <div className="w-[10rem] h-[634px] bg-white shadow-md">
      <nav>
        <ul className="flex flex-col gap-4 pt-4">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <button
                className="flex flex-col items-center w-full p-2 rounded-lg hover:bg-gray-200"
                onClick={() => handleNavClick(item.path)}
              >
                <img src={item.src} alt={item.label} className="w-[2rem] h-[2rem]" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
