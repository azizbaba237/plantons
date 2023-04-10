import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function ReadProduct() {
  const { _id } = useParams();

  const [plant, setPlant] = useState({});

  // Fetch data from database
  useEffect(() => {
    const fetchPlants = async () => {
      const { data } = await axios.get(`http://localhost:5000/${_id}`);
      console.log(data);
      setPlant(data.plantsId);
    };
    fetchPlants();
  }, [_id]);

  return (
    <div className=" w-full h-full flex justify-center items-center  ">
      {plant && (
        <>
          <div className=" w-[400px] h-[500px]  flex flex-col justify-center items-center mt-8 border border-black rounded-lg bg-gray-600 ">
            {/* Detail image */}
            <div>
              {plant.avatar && (
                <img
                  src={`http://localhost:5000/${plant.avatar}`}
                  alt="cover goes here"
                  className="w-60 h-60 object-cover rounded-3xl"
                />
              )}
            </div>
            {/* Detail  */}
            <div className=" flex flex-col space-y-4 mt-4">
              <div className="flex justify-between items-center ">
                <h2 className="text-white font-semibold font-inter text-2xl">
                  NAME :
                </h2>
                <span className="text-white  font-inter text-2xl block ">
                  {plant.name}
                </span>
              </div>
              <div className="flex justify-between items-center ">
                <h2 className="text-white font-semibold font-inter text-2xl">
                  PRICE :
                </h2>
                <span className="text-white  font-inter text-2xl block ">
                  {plant.price}
                </span>
              </div>
              <div className="flex justify-between items-center ">
                <h2 className="text-white font-semibold font-inter text-2xl mr-4">
                  CATEGORIES :
                </h2>
                <span className="text-white  font-inter text-2xl block ">
                  {plant.category}
                </span>
              </div>
              <div className="flex justify-center items-center flex-col ">
                <h2 className="text-white font-semibold font-inter text-2xl">
                  DESCRIPTION :
                </h2>
                <span className="text-white  font-inter text-2xl block ">
                  {plant.description}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ReadProduct;
