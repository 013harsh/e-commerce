import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../component/Card/Card";

const BookProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex gap-5 w-full h-full bg-gray-100 p-[3%] border-2  border-red-900 ">
      <Card />
    </div>
  );
};

export default BookProduct;
