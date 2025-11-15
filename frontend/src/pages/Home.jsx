import React from "react";
import BookCard from "../component/Card/BookCard";
import Homecard1 from "../component/Card/Homecard1";
import StationeryProduct from "./product/StationeryProduct";

const Home = () => {
  return (
    <div className="block ">
      <nav className="w-full h-full p-3 ">
        <StationeryProduct />
      </nav>
      <nav className="flex ">
        <div className="w-full h-[350px] flex justify-center items-center px-3 relative">
          <img
            className="h-[300px] w-full rounded-[5px] "
            src="https://mikirei.com/uploads/3ff9d441e62ae52d1800682cbf11d89a850824c1.jpg"
            alt=""
          />
          <div className="relative"></div>
          <div className="absolute  w-full h-[80px] top-[80px] left-[40px]">
            <h1 className=" text-4xl italic font-bold text-black w-[20%]">
              Your story{" "}
            </h1>
            <h1 className="text-4xl italic  font-bold text-black text-end w-[20%]">
              starts here
            </h1>
          </div>
        </div>
      </nav>

      <nav>
        <div className="flex items-start justify-start w-full h-full py-5 overflow-x-scroll scrollbar-hide flex-nowrap bg-zinc-100  ">
          <Homecard1 />
        </div>
      </nav>
      <nav className=" flex w-full  p-3 bg-zinc-100">
        <BookCard />
      </nav>
    </div>
  );
};

export default Home;
