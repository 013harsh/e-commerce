import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="grid items-center w-screen grid-cols-3 px-10 py-5 text-sm font-bold text-white bg-black">
      <div className="flex justify-start">
        <NavLink
          to="/"
          className="italic transition-colors hover:text-red-700 underline-offset-4"
        >
          <span className="text-2xl font-bold text-blue-300 underline"> H</span>{" "}
          🅰️ ®️ <i class="fa-solid fa-s"></i>{" "}
          <span className="text-2xl font-bold text-blue-300 underline ">
            {" "}
            H
          </span>
        </NavLink>
      </div>

      <div className="flex items-center justify-start gap-2 bg-gray-500 w-[240px] rounded-[15px]">
        <input
          type="text"
          placeholder="Search"
          className="w-[200px] px-3 h-[25px] rounded-[15px]  text-black outline-none"
        ></input>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="flex justify-end gap-x-6">
        <NavLink
          to="/categories"
          className="transition-colors hover:text-red-700 hover:underline underline-offset-4"
        >
          Categories
        </NavLink>
        <NavLink
          to="/cart"
          className="transition-colors hover:text-red-700 hover:underline underline-offset-4"
        >
          <i class="fa-solid fa-cart-shopping"></i>Cart
        </NavLink>
        <NavLink
          to="/account"
          className="transition-colors hover:text-red-700 hover:underline underline-offset-4"
        >
          <i class="fa-solid fa-users"></i>{" "}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
