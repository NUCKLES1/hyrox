import React from "react";
import Image from "next/image";

const TheWorld = () => {
  return (
    <div className="w-full h-screen max-sm:[100dvh] lg:flex">
      <div className="w-[70%] max-sm:w-full max-sm:h-full">
        <Image src="/run.jpg" width={100} height={100} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="w-[30%] max-sm:w-[80%] max-sm:mx-auto max-sm:pt-[70vh]">
        <div className="bg-[#ffed00] relative max-sm:-mt-200 max-sm:text-center uppercase text-black text-4xl max-sm:text-2xl lg:mt-[50%] pb-10 p-4">
          <p>The World Series of Fitness Racing</p>
        </div>
      </div>
    </div>
  );
};

export default TheWorld;
