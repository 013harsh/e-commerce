import React from "react";
import Card from "../component/Card/Card";

const Home = () => {
  return (
    <div className="block ">
      <nav className="flex ">
        <div className="w-full h-[350px] flex justify-center items-center p-3 ">
          <img
            className="h-[300px] w-full rounded-[5px] "
            src="https://mikirei.com/uploads/3ff9d441e62ae52d1800682cbf11d89a850824c1.jpg"
            alt=""
          />
        </div>
      </nav>
      <nav className="w-full h-full p-3">
        <div className="flex items-center justify-start w-full h-full gap-5 px-10 py-5 overflow-x-scroll scrollbar-hide flex-nowrap bg-zinc-100 ">
          <Card />
        </div>
      </nav>
      <nav className="w-full h-[400px] ">
        <p className="flex items-center justify-between w-full px-5 font-bold">
          <span className="text-[23px]">Trending Product</span>
          <span className="">See More</span>
        </p>
      </nav>
      <nav className="w-full h-[400px]">
        <p className="flex items-center justify-between w-full px-5 font-bold">
          <span className="text-[23px]">Kid's</span>
          <span className="">See More</span>
        </p>
      </nav>
      <nav className="w-full h-[400px]">
        <p className="flex items-center justify-between w-full px-5 font-bold">
          <span className="text-[23px]">Games</span>
          <span className="">See More</span>
        </p>
      </nav>
    </div>
  );
};

export default Home;
