import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-[240px] flex items-center justify-center">
      <div className="w-[120px] h-[120px] sm:w-[190px] sm:h-[190px] rounded-full  bg-gradient-to-br from-amber-50 via-white to-blue-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden flex items-center justify-center">
        <img
          className="w-[90%] h-[90%] object-cover rounded-full ring-1 ring-gray-200/70 group-hover:scale-105 transition-transform duration-300"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8gxsyfsYYM_2Cf5GNi4dp_ZnKUcvkY9oFA&s"
          alt="Stationery product"
          onClick={() => navigate("/cart")}
        />
      </div>
    </div>
  );
};

export default Card;
