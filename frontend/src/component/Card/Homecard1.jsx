import React from "react";
import StationeryProduct from "../../pages/product/StationeryProduct";
import { useNavigate } from "react-router-dom";

const Homecard1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className="mb-5 text-3xl font-bold px-8">New Arrivals</h1>
      </div>
      <div className="flex items-start justify-start px-[8%]">
        {[...Array(5)].map((_, i) => (
          <div className="w-full sm:w-[240px] flex items-center justify-start cursor-pointer">
            <div
              onClick={() => navigate("/")}
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[200px]  bg-gray-200 shadow-sm hover:shadow-xl overflow-hidden flex items-center justify-center"
            >
              <img src="" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecard1;
