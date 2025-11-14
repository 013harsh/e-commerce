import { useNavigate } from "react-router-dom";

const RulerScale = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 17,
      name: "12-inch Ruler",
      price: "$1.99",
      image: "ruler1.jpg",
      description: "Clear plastic ruler with both metric and imperial measurements"
    },
    {
      id: 18,
      name: "Protractor",
      price: "$2.99",
      image: "protractor1.jpg",
      description: "180-degree protractor for angle measurements"
    },
    {
      id: 19,
      name: "Compass Set",
      price: "$8.99",
      image: "compass1.jpg",
      description: "Mathematical compass set for drawing circles and arcs"
    },
    {
      id: 20,
      name: "Triangle Set",
      price: "$5.99",
      image: "triangle1.jpg",
      description: "Set of 2 triangular rulers (30-60-90 and 45-45-90)"
    },
    {
      id: 21,
      name: "Measuring Tape",
      price: "$7.99",
      image: "tape1.jpg",
      description: "Flexible measuring tape up to 60 inches"
    },
    {
      id: 22,
      name: "T-Square",
      price: "$12.99",
      image: "tsquare1.jpg",
      description: "24-inch T-square for technical drawing"
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📏 Ruler / Scale</h1>
        <p className="text-gray-600">Precision measuring tools for accurate measurements</p>
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

export default RulerScale;