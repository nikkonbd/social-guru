import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 shadow-md mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo">
              social guru
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fas fa-bars">
                <FaBars></FaBars>
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center text-md font-medium leading-snug text-black hover:opacity-75"
                  href="#pablo">
                  <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2 py-2">Service</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center text-md font-medium leading-snug text-black hover:opacity-75"
                  href="#pablo">
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2 border-2 rounded-md px-5 py-2">
                    Login
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center text-md font-medium leading-snug text-black hover:opacity-75"
                  href="#pablo">
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2 border-2 rounded-md px-5 py-2">
                    Register
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
