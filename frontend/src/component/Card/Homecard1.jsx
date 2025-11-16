import { useNavigate } from "react-router-dom";


const Homecard1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className="mb-5 text-3xl font-bold px-8">New Arrivals</h1>
      </div>
      <div
        className="flex items-start justify-start px-[8%]"
      >
        {[...Array(5)].map((_, i) => (
          <div 
          onClick={() => navigate("./BookProduct")}
          className="w-full sm:w-[240px] flex items-center justify-start cursor-pointer">
            <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[200px]  bg-gray-200 shadow-sm hover:shadow-xl overflow-hidden flex items-center justify-center">
              <img src="data:image/jpeg;base64,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" alt="error" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecard1;
