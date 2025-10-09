import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
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
          to="/cart"
          className="font-semibold transition-colors hover:text-red-700 hover:underline underline-offset-4"
        >
          <i class="fa-solid fa-cart-shopping"></i>Cart
        </NavLink>
        <div className="relative">
          <div className="inline-block group">
            <div className="transition-colors cursor-pointer hover:text-red-700 ">
              Account
            </div>

            <div className="absolute right-0 z-50 invisible mt-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible">
              <div className="absolute w-4 h-4 rotate-45 bg-black shadow -top-2 right-10" />
              <div className="overflow-hidden bg-white border border-gray-200 shadow-lg w-80 rounded-2xl">
                <div className="p-4">
                  <div className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-colors">
                    <div
                      onClick={() => navigate("/login")}
                      className="text-white no-underline cursor-pointer"
                    >
                      Login
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-600">New to our store?</p>
                    <div className="text-base font-semibold text-red-700 cursor-pointer hover:underline">
                      <div onClick={() => navigate("/register")}>Register</div>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-200" />
                {/* Menu list */}
                <nav className="px-4 py-2">
                  <ul className="space-y-1">
                    <li>
                      <NavLink
                        to="/account"
                        className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                      >
                        Your Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/settings"
                        className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                      >
                        Personal Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/orders"
                        className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                      >
                        Your Orders
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                      >
                        Your Wishlist
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/gift-cards"
                        className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                      >
                        Your Gift Certificate
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/addresses"
                        className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                      >
                        Your Addresses
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/change-password"
                        className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                      >
                        Change Password
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <hr className="border-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
