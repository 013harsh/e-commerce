import { useNavigate } from "react-router-dom";

const WritingTools = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Blue Ballpoint Pen",
      price: "$2.99",
      image: "pen1.jpg",
      description: "Smooth writing ballpoint pen with blue ink"
    },
    {
      id: 2,
      name: "Mechanical Pencil Set",
      price: "$8.99",
      image: "pencil1.jpg",
      description: "Set of 3 mechanical pencils with extra leads"
    },
    {
      id: 3,
      name: "Highlighter Pack",
      price: "$5.99",
      image: "highlighter1.jpg",
      description: "Pack of 4 fluorescent highlighters in different colors"
    },
    {
      id: 4,
      name: "Marker Set",
      price: "$12.99",
      image: "marker1.jpg",
      description: "Professional marker set with 12 vibrant colors"
    },
    {
      id: 5,
      name: "Gel Pen Set",
      price: "$6.99",
      image: "gelpen1.jpg",
      description: "Smooth gel pens in assorted colors"
    },
    {
      id: 6,
      name: "Fine Tip Markers",
      price: "$9.99",
      image: "finetip1.jpg",
      description: "Precision fine tip markers for detailed work"
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📝 Writing Tools</h1>
        <p className="text-gray-600">Explore our collection of pens, pencils, markers, and highlighters</p>
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

export default WritingTools;