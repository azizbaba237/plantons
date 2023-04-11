import React from "react";
import fraise from "../assets/fraise.jpg";

export const Cart = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" mx-auto mt-[-3rem] bg-white"
            src={fraise}
            alt="fraise"
          />
          <h2 className="text-2xl font-bold text-center py-8">Strawberry</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Disponible</p>
            <p className="py-2 border-b mx-8">Frais</p>
            <p className="py-2 border-b mx-8">Livrable</p>
          </div>
          <div className="flex  gap-4">
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Buy now
            </button>
            <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 ">
              Add to cart
            </button>
          </div>
        </div>
        <div className=" bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" mx-auto mt-[-3rem] bg-white"
            src={fraise}
            alt="fraise"
          />
          <h2 className="text-2xl font-bold text-center py-8">SStrawberry</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Disponible</p>
            <p className="py-2 border-b mx-8">Frais</p>
            <p className="py-2 border-b mx-8">Livrable</p>
          </div>
          <div className="flex  gap-4">
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Buy now
            </button>
            <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 ">
              Add to cart
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className=" mx-auto mt-[-3rem] bg-white"
            src={fraise}
            alt="fraise"
          />
          <h2 className="text-2xl font-bold text-center py-8">Strawberry</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Disponible</p>
            <p className="py-2 border-b mx-8">Frais</p>
            <p className="py-2 border-b mx-8">Livrable</p>
          </div>
          <div className="flex  gap-4">
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Buy now
            </button>
            <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
