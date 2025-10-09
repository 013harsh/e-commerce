import React from "react";
import Card from "../component/Card/Card";
import BookCard from "../component/Card/BookCard";

const Home = () => {
  return (
    <div className="block ">
      <nav className="flex ">
        <div className="w-full h-[350px] flex justify-center items-center p-3 relative">
          <img
            className="h-[300px] w-full rounded-[5px] "
            src="https://mikirei.com/uploads/3ff9d441e62ae52d1800682cbf11d89a850824c1.jpg"
            alt=""
          />  
          <div className="relative"></div>
          <div className="absolute  w-full h-full top-[80px] left-[40px]">
            <h1 className="text-4xl italic font-bold text-black w-[20%]">Your story </h1>
            <h1 className="text-4xl italic  font-bold text-black text-end w-[20%]">starts here</h1>
          </div>          
        </div>
      </nav>
      <nav className="w-full h-full p-3">
        <div className="flex items-center justify-start w-full h-full gap-5 px-10 py-5 overflow-x-scroll scrollbar-hide flex-nowrap bg-zinc-100 ">
          <Card />
        </div>
      </nav>
      <nav className="w-full h-full p-3 bg-zinc-100">
        <BookCard />
      </nav>
    </div>
  );
};

export default Home;
