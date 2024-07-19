import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const menuItem = [
    {
      link:"About",
      href:"/about"
    },
    {
      link:"Work",
      href:"/work"
    },
    {
      link:"Contact",
      href:"/contact"
    }

  ];

  return (
      <nav className="px-4">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="sm:block ml-auto">
                <div className="flex space-x-4">
                  {menuItem.map((item, index) => {
                    return (
                      <Link key={index} to={item.href}
                        className="px-3 py-2 text-sm font-medium text-Dark text-[17px]"
                        aria-current="page">
                        {item.link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
