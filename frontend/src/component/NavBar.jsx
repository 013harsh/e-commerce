import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.users);
  const cartItems = useSelector((state) => state.Cart.Cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  console.log("USER:", user);

  return (
    <nav className="grid items-center w-full grid-cols-1 gap-4 px-4 py-4 text-sm font-bold text-white bg-black sm:grid-cols-3 sm:px-6 lg:px-10 sm:py-5">
      <div className="flex justify-start">
        <NavLink
          to="/"
          className="italic transition-colors hover:text-red-700 underline-offset-4"
        >
          <span className="text-2xl font-bold text-blue-300 underline"> H</span>{" "}
          🅰️ ®️ <i className="fa-solid fa-s"></i>{" "}
          <span className="text-2xl font-bold text-blue-300 underline ">
            {" "}
            H
          </span>
        </NavLink>
      </div>

      <div className="flex items-center justify-start w-full max-w-xs gap-2 bg-gray-500 sm:max-w-sm lg:max-w-md rounded-2xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-10 px-3 text-black outline-none sm:h-12 rounded-2xl"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="flex justify-end gap-x-6">
        <NavLink
          to="/cart"
          className="relative font-semibold transition-colors hover:text-red-700 hover:underline underline-offset-4 "
        >
          <i className="fa-solid fa-cart-shopping"></i>Cart
          {totalItems > 0 && (
            <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-600 rounded-full -top-2 -right-2">
              {totalItems}
            </span>
          )}
        </NavLink>

        <div className="relative">
          <div className="inline-block group">
            <div
              className="w-20 overflow-hidden transition-colors cursor-pointer nowrap hover:text-red-700 "
              onClick={() => navigate("/account")}
            >
              {user ? (
                <span className="">{user?.username}</span>
              ) : (
                <>
                  <i className="fa-solid fa-user"></i> Account
                </>
              )}
            </div>
            <div className="absolute right-0 z-50 invisible mt-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible">
              <div className="absolute w-4 h-4 rotate-45 bg-black shadow -top-2 right-10" />
              <div className="overflow-hidden bg-white border border-gray-200 shadow-lg w-80 rounded-2xl">

                 {user? (
                    <span>{user?.username}</span>
                  ):(
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

                </div>)}

                <hr className="border-gray-200" />

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
                      <NavLink className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50">
                        Personal Settings
                      </NavLink>
                    </li>

                    <li>
                      <NavLink className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50">
                        Your Wishlist
                      </NavLink>
                    </li>
                  </ul>
                </nav>

                <hr className="border-gray-200" />

                {/* Admin Section */}
                {user?.isAdmin && (
                  <nav className="px-4 py-2">
                    <div className="px-2 py-1 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                      Admin Panel
                    </div>
                    <ul className="space-y-1">
                      <li>
                        <NavLink
                          to="/createproduct"
                          className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                        >
                          <i className="mr-2 fa-solid fa-plus"></i>Add Product
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/updateproduct"
                          className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                        >
                          <i className="mr-2 fa-solid fa-edit"></i>Update
                          Product
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/BookProduct"
                          className="block px-2 py-2 text-center text-gray-900 no-underline rounded-md hover:bg-gray-50"
                        >
                          Manage Products
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                )}

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
