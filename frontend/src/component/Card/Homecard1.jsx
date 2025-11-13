import React from "react";

const Homecard1 = () => {
  return (
    <div className="div">
      <div>
        <h1 className="mb-5 text-3xl font-bold">New Arrivals</h1>
      </div>
      <div className="flex items-center justify-center">
        {[...Array(1)].map((_, i) => (
          <div className="w-full sm:w-[240px] flex items-center justify-center cursor-pointer">
            <div className="w-[120px] h-[120px] sm:w-[190px] sm:h-[190px] rounded-full  bg-gradient-to-br from-amber-50 via-white to-blue-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex items-center justify-center">
              ${}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecard1;
