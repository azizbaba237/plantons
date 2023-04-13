import React from "react";

const Header = () => {
  return (
    <div>
      <div className="h-[750px] w-full relative bg-green-900">
        <img
          src="https://cdn.pixabay.com/photo/2018/10/03/22/08/kohl-3722517_1280.jpg"
          alt=""
          className="h-full w-full object-cover absolute mix-blend-overlay"
        />
        <div className="flex flex-col justify-center items-center pt-64" >
          <h1 className="text-yellow-300 tracking-wide">GROWIND WHIT PLANTS</h1>
          <p className="text-white tracking-wide text-6xl font-bold uppercase py-6">Grew with plants </p>
          <p className=" text-yellow-300 tracking-wide ">Fast & Flexible</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
