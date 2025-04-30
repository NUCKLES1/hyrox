"use client"

import React from "react";
import Image from "next/image";

const FindYourRace = () => {
  const items = [
    {
      id: 1,
      url: "/lon.jpg",
      name: "lon",
      description: "Sports Direct HYROX London Olympia",
      description2: "3. May. 2025– 5. May. 2025",
    },
    {
      id: 2,
      url: "/bom.jpg",
      name: "BOM",
      description: "HYROX MUMBAI",
      description2: "3. May. 2025",
    },
    {
      id: 3,
      url: "/hee.jpg",
      name: "HEE",
      description: "HYROX Thialf Heerenveen",
      description2: "9. May. 2025– 11. May. 2025",
    },
  ];
  return (
    <div
      id="race"
      className="bg-[#262626] pb-22 lg:px-12 max-sm:px-6 h-auto w-full"
    >
      <div className="bg-[#ffed00] mx-auto p-4 text-4xl text-black uppercase w-86">
        <p>Find Your Race</p>
      </div>
      <div className="w-full flex">
        <div className="w-full lg:gap-14 lg:flex">
          {items.map((item) => (
            <div
              className="w-88 max-sm:w-full max-sm:mt-10 bg-black h-[37rem]"
              key={item.id}
            >
              <div className="">
                <Image
                  src={item.url}
                  width={400}
                  height={100}
                  alt=""
                  className="h-[18rem]"
                />
              </div>
              <p className="uppercase h-4 w-8 -mt-6 pl-4 text-2xl bg-green-300">
                {item.name}
              </p>
              <div className="h-66">
                <p className="uppercase pl-4 pt-8 text-4xl text-[#ffed00]">
                  {item.description}
                </p>
                <p className="uppercase pl-4 pt-2 text-3xl">
                  {item.description2}
                </p>
              </div>
              <div className="relative">
                <button
                  onClick={() => {
                    const element = document.getElementById("register");
                    element?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="w-full hover:border-2 hover:border-[#ffed00] hover:bg-black hover:text-[#ffed00] cursor-pointer h-12 text-black bg-[#ffed00] uppercase duration-300 font-bold"
                >
                  register now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindYourRace;
