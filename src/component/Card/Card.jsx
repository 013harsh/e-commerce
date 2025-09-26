import React from "react";

const Card = () => {
  return (
    <div className="group w-full sm:w-[240px] h-[240px]">
      <div className="w-[120px] h-[120px] sm:w-[190px] sm:h-[190px] rounded-full  bg-gradient-to-br from-amber-50 via-white to-blue-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex items-center justify-center">
        <img
          className="w-[90%] h-[90%] object-cover rounded-full ring-1 ring-gray-200/70 group-hover:scale-105 transition-transform duration-300"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMatVSoa3mVmLDvzhiiBtXADvA0r7uz9QCMA&s"
          alt="Stationery product"
        />
      </div>
      <p className="mt-2 text-sm font-bold">
        Featured Stationery
      </p>
    </div>
  );
};

export default Card;
