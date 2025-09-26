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
        <div className="flex flex-wrap items-center justify-center w-full h-full p-2 bg-zinc-100 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </nav>
      <nav className="w-full h-[400px] ">
        <p className="flex items-center justify-between w-full px-5 font-bold">
          <span className="text-[23px]">Trending Product</span>
        </p>
      </nav>
      <nav className="w-full h-[400px] border border-black">
      <p className="flex items-center justify-between w-full px-5 font-bold">
          <span className="text-[23px]">Kid's</span>
        </p>
        </nav> 
      <nav className="w-full h-[400px] border border-black">
      <p className="flex items-center justify-between w-full px-5 font-bold">
          <span className="text-[23px]">Games</span>
        </p>
      </nav>
    </div>
  );
};

export default Home;
