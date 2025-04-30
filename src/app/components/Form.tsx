"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("meogedjw");
  if (state.succeeded) {
    return <p className="mt-26 text-amber-400 text-3xl">Thanks for joining!</p>;
  }

  return (
    <div id="register" className="w-full max-sm:px-10 max-sm:h-[60vh] h-screen mt-12 text-font">
        <div className="w-full text-center text-4xl uppercase font-bold">
            <p>join now</p>
        </div>
      <div className="w-full mt-18">

        <form
          onSubmit={handleSubmit}
          className="w-80 max-sm:w-full lg:mx-auto "
        >
          <input
            placeholder="Name:"
            id="name"
            type="text"
            name="name"
            className="w-80 bg-transparent text-[16px] max-sm:text-xl max-sm:pb-2 max-sm:w-full border outline-none hover:border-[#231f20] p-4 rounded border-[#ffed00] text-[#ffed00]"
          />
          <input
            placeholder="Email:"
            id="email"
            type="email"
            name="email"
            className="w-80 mt-4 bg-transparent text-[16px] max-sm:text-xl max-sm:pb-2 border max-sm:w-full outline-none hover:border-[#231f20] p-4 rounded border-[#ffed00] text-[#ffed00]"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <input
            type="number"
            placeholder="Phone Number:"
            id="Phone number"
            name="number"
            className="w-80 bg-transparent text-[16px] mt-4 max-sm:text-xl max-sm:pb-2 max-sm:w-full border outline-none hover:border-[#231f20] p-4 rounded border-[#ffed00] text-[#ffed00]"
          />
          <button
            className="bg-[#ffed00] hover:bg-black hover:border-2 border-[#ffed00] duration-300 w-full rounded cursor-pointer uppercase hover:text-[#ffed00] py-4 text-black mt-10"
            type="submit"
            disabled={state.submitting}
          >
            register now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
