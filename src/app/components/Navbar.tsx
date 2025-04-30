"use client";

import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [isStyle, setIsStyle] = useState(false);

  const toggleStyles = () => {
    setIsStyle(!isStyle);
  };
  return (
    <div className="flex bg-black h-26 fixed max-sm:h-16 top-0 max-sm:px-4 px-20 w-full justify-between z-10">
      <div className="lg:text-4xl max-sm:mt-4 mt-8">
        <p>H Y R O X</p>
      </div>
      <button
        onClick={toggleStyles}
        className="lg:hidden text-white h-full text-center"
      >
        {!isStyle ? (
          <CiMenuBurger className="w-6 h-6  transition-all duration-500" />
        ) : (
          <LiaTimesSolid className="w-6 h-6 transition-all duration-500" />
        )}
      </button>
      <div
        className="absolute lg:hidden z-10 left-0 top-[7vh] bg-black w-full text-center"
        style={{
          height: isStyle ? "93vh" : "0px",
          transition: "height 0.5s ease-in-out",
        }}
      >
        {isStyle && (
          <div>
            <nav className="pt-[30%] gap-3 text-[30px]">
              <ul className="text-white pt-1 uppercase inter gap-3">
                <div className="bold text-white no-underline">
                  <li
                    onClick={() => {
                      const element = document.getElementById("register");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="cursor-pointer active:text-[#FF7B00] hover:text-[#FF7B00] duration-300"
                  >
                    Register
                  </li>
                </div>
                <div className="bold text-white no-underline">
                  <li
                    onClick={() => {
                      const element = document.getElementById("race");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="cursor-pointer hover:text-[#FF7B00] duration-300"
                  >
                    races
                  </li>
                </div>
                <div className="bold text-white no-underline">
                  <li
                    onClick={() => {
                      const element = document.getElementById("about");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="cursor-pointer hover:text-[#FF7B00] duration-300 active:text-[#FF7B00] no-underline"
                  >
                    about
                  </li>
                </div>
                <div className="bold text-white no-underline">
                  <li
                    onClick={() => {
                      const element = document.getElementById("partners");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="cursor-pointer hover:text-[#FF7B00] duration-300 active:text-[#FF7B00] no-underline"
                  >
                    PARTNERS
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        )}
      </div>
      <div className="flex gap-4 mt-8 max-sm:hidden justify-items-end">
        <button
          onClick={() => {
            const element = document.getElementById("register");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="border-2 px-4 cursor-pointer border-[#ffed00] text-[#ffed00] h-12 hover:text-black hover:bg-[#ffed00] uppercase duration-300 font-bold"
        >
          register now
        </button>
        <button
          onClick={() => {
            const element = document.getElementById("about");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="border-2 px-4 cursor-pointer border-[#ffed00] text-[#ffed00] h-12 hover:text-black hover:bg-[#ffed00] uppercase duration-300 font-bold"
        >
          about
        </button>
      </div>
    </div>
  );
};

export default Navbar;
