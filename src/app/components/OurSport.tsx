"use client"

import React from "react";
import Image from "next/image";

const OurSport = () => {
  return (
    <div className="w-full h-auto pb-20 lg:mt-40 lg:px-10">
      <div className="lg:bg-[#ffed00] lg:mx-auto p-4 text-4xl text-black max-sm:text-white max-sm:font-bold uppercase max-sm:text-2xl lg:w-108">
        <p>Our Sport is Hyrox</p>
      </div>
      <div className="w-full lg:flex">
        <div className="lg:w-[50%]">
          <div className="text-xl mt-20 max-sm:mt-4 pb-10 p-4">
            <p>
              HYROX: The Sport of Fitness Racing that you have always been
              training for.
            </p>
            <p className="mt-10">
              With over 80+ global races in 2025 seeing over 550.000 athletes &
              350,000 spectators, welcome to the World Series of Fitness Racing.
            </p>
            <p className="mt-10">
              Are you ready to take your training to the next level & join the
              #HYROXFAMILY?
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("register");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="border-2 px-4 cursor-pointer border-[#ffed00] text-[#ffed00] h-12 hover:text-black hover:bg-[#ffed00] uppercase duration-300 font-bold ml-4"
          >
            what is hyrox?
          </button>
        </div>
        <div className="w-[50%] max-sm:w-full max-sm:mt-22 max-sm:h-80 h-[90vh]">
          <Image
            src="/gym.jpg"
            width={800}
            height={800}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurSport;
