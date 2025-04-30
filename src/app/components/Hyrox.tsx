import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

const Hyrox = () => {
      const items = [
        {
          id: 1,
          name: "races",
          description: "The Fitness Race",
          description2: "Find My Race",
          description3: "Results & Ranking",
          description4: "Rulebooks",
          description5: "Championships",
          description6: "FAQ",
        },
        {
          id: 2,
          name: "athletes",
          description: "Find My Level",
          description2: "Best HYROX Preparation",
          description3: "Find a HYROX TRAINING CLUB",
        },
        {
          id: 3,
          name: "gym | trainer",
          description: "Gym Finder",
        },
        {
          id: 4,
          name: "hyrox",
          description: "Our Sport is Hyrox",
          description2: "The History",
          description3: "The Hyrox Family",
          description4: "Contact",
          description5: "HYROX EU Shop",
          description6: "HYROX US Shop",
        },
      ];
  return (
    <div id="partners" className="px-6 w-full pb-20">
      <div className="w-full gap-8 lg:flex">
        <div className="bg-[#262626] max-sm:w-full w-80 p-6">
          <p className="text-3xl pt-6">H Y R O X</p>
          <p className="pt-6">Do you have any questions?</p>
          <p className="pt-2">
            <Link href="" className="text-[#ffed00]">
              Here
            </Link>{" "}
            you find the local support email addresses!
          </p>
          <div className="w-full flex">
            <p className="pt-6">Follow us |</p>
            <p>
              <Link href="https://www.facebook.com/share/g/1ANzfuGPub/?mibextid=wwXIfr ">
                <FaFacebook className="mt-6 ml-4 h-6 w-6" />
              </Link>
            </p>
          </div>
        </div>
        <div className="max-sm:grid grid-cols-2 gap-8 grid-rows-2 flex w-full">

        
        <Image
          src="/puma.svg"
          width={400}
          height={100}
          alt=""
          className="h-[4rem] w-[12rem] mt-18"
        />
        <Image
          src="/myp.svg"
          width={400}
          height={100}
          alt=""
          className="h-[4rem] w-[8rem] mt-18"
        />
        <Image
          src="/centr.svg"
          width={400}
          height={100}
          alt=""
          className="h-[4rem] w-[8rem] mt-18"
        />
        <Image
          src="/Concept2.svg"
          width={400}
          height={100}
          alt=""
          className="h-[4rem] w-[12rem] mt-18"
        />
        </div>
      </div>
      <div className="border-t-2 mt-12 border-[#ffed00]">
        <div className="w-full mt-20 lg:px-10 lg:flex lg:gap-10">
        {items.map((item) => (
          <div className="w-88 text-left" key={item.id}>
            <p className="w-full text-xl p-2 uppercase bg-[#262626]">{item.name}</p>
            <ul >
              <li className="pt-6">{item.description}</li>
              <li className="pt-2">{item.description2}</li>
              <li className="pt-2">{item.description3}</li>
              <li className="pt-2">{item.description4}</li>
              <li className="pt-2">{item.description5}</li>
              <li className="pt-2">{item.description6}</li>
            </ul>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Hyrox;
