import React from "react";
import Button from "./Button";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[2px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2 ">GROWING WITH PLANTS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grew with plants{" "}
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:4xl text-xl font-bold">
            Fast and Flexible
          </p>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default Hero;
