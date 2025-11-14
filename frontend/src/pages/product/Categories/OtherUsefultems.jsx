import { useNavigate } from "react-router-dom";

const OtherUsefulItems = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 23,
      name: "Stapler",
      price: "$7.99",
      image: "stapler1.jpg",
      description: "Heavy-duty stapler with 200 staples included"
    },
    {
      id: 24,
      name: "Scissors",
      price: "$3.99",
      image: "scissors1.jpg",
      description: "Sharp stainless steel scissors with comfortable grip"
    },
    {
      id: 25,
      name: "Tape Dispenser",
      price: "$5.99",
      image: "tapedispenser1.jpg",
      description: "Desktop tape dispenser with weighted base"
    },
    {
      id: 26,
      name: "Eraser Set",
      price: "$2.99",
      image: "eraser1.jpg",
      description: "Pack of 6 pink erasers for pencil marks"
    },
    {
      id: 27,
      name: "Hole Punch",
      price: "$9.99",
      image: "holepunch1.jpg",
      description: "3-hole punch for standard binder organization"
    },
    {
      id: 28,
      name: "Glue Sticks",
      price: "$4.99",
      image: "glue1.jpg",
      description: "Pack of 4 washable glue sticks"
    },
    {
      id: 29,
      name: "Push Pins",
      price: "$2.49",
      image: "pushpins1.jpg",
      description: "Colorful push pins for bulletin boards"
    },
    {
      id: 30,
      name: "Rubber Bands",
      price: "$1.99",
      image: "rubber1.jpg",
      description: "Assorted sizes rubber bands in a storage box"
    }
  ];

  return (
    <div className="p-5">
      {/* Header */}
      <div className="mb-5">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-500 text-white border-none rounded cursor-pointer mb-4 
                   hover:bg-gray-600 transition-colors"
        >
          ← Back to Categories
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">🖇️ Other Useful Items</h1>
        <p className="text-gray-600">Essential office supplies and miscellaneous items</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm 
                     transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-500">
              Product Image
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            <p className="text-xl font-bold text-blue-600 mb-3">
              {product.price}
            </p>
            <button className="w-full py-2 bg-blue-500 text-white border-none rounded cursor-pointer 
                             hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherUsefulItems;