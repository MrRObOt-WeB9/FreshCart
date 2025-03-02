import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContext";
import { cartContext } from "../../context/CartContext";
export default function Navbar() {
  let { userToken, setUserToken } = useContext(userContext);
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }
  let { cart } = useContext(cartContext);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-light border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to={"home"}
            classname="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} classname="h-8" alt="freshcart Logo" />
          </NavLink>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
            {userToken ? (
              <>
                <NavLink
                  to={"/cart"}
                  classname="block py-2 pe-5 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-main dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  <i className="fa fa-cart-shopping relative fa-2x text-main">
                    <span className="absolute bottom-[.5rem] right-2 font-light block p-1 text-xs text-white">
                      {cart.numOfCartItems === 0 ? "" : cart.numOfCartItems}
                    </span>
                  </i>
                </NavLink>
                <span
                  onClick={() => logOut()}
                  className="block cursor-pointer py-2 px-3  text-gray-900 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:hover:text-main md:ps-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  logout
                </span>
              </>
            ) : (
              <>
                <NavLink
                  to={""}
                  classname="block py-2 px-3  text-gray-900 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Register
                </NavLink>
                <NavLink
                  to={"login"}
                  classname="block py-2 px-3  text-gray-900 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Login
                </NavLink>
              </>
            )}

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            {userToken && (
              <ul className="flex flex-col items-center gap-y-2 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to={"home"}
                    classname="block py-2 px-3 text-gray-900 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"wishlist"}
                    classname="block py-2 px-3 text-gray-900 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    wish list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"allorders"}
                    classname="block py-2 px-3 text-gray-900 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"categories"}
                    classname="block py-2 px-3 text-gray-900 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Categories
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"brands"}
                    classname="block py-2 px-3 text-gray-900 rounded-sm transition-all duration-500 hover:bg-gray-100 hover:text-main md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Brands
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
