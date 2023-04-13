import React from "react";

export const FruitsCarou = (props) => {
  return (
    <div className="w-80 shadow-xl flex flex-col bg-green-600 rounded-lg hover:scale-105 duration-300">
      <img className="rounded-lg" src={props.url} alt="fraise" />
      <div>
        <h2 className="text-2xl font-bold text-center py-4">{props.name}</h2>
        <p className="text-center text-4xl font-bold">{props.price}</p>
        <p className="py-2 text-center border-b mx-8 mt-8">{props.description}</p>
        <div className="text-center font-medium">
          {/* <p className="py-2 border-b mx-8">Frais</p>
          <p className="py-2 border-b mx-8">Livrable</p> */}
        </div>
      </div>
      <div className="flex px-12">
        <button className="bg-[#00df9a] w-[90px] px-2 rounded-md font-medium my-6 mx-auto py-3 text-black">
          Buy now
        </button>
        <button className=" bg-black text-[#00df9a] w-[100px] px-2  rounded-md font-medium my-6 mx-auto py-3 ">
          Add to cart
        </button>
      </div>
    </div>
  );
};
