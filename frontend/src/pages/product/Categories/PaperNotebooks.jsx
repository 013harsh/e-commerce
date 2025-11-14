import { useNavigate } from "react-router-dom";

const PaperNotebooks = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 5,
      name: "Spiral Notebook",
      price: "$3.99",
      image: "notebook1.jpg",
      description: "80-page spiral notebook with ruled lines"
    },
    {
      id: 6,
      name: "Sticky Notes Pack",
      price: "$4.99",
      image: "sticky1.jpg",
      description: "Colorful sticky notes in various sizes"
    },
    {
      id: 7,
      name: "Legal Pad",
      price: "$2.99",
      image: "pad1.jpg",
      description: "Yellow legal pad with perforated pages"
    },
    {
      id: 8,
      name: "Graph Paper",
      price: "$1.99",
      image: "graph1.jpg",
      description: "Grid paper perfect for math and drawing"
    },
    {
      id: 9,
      name: "Composition Book",
      price: "$2.49",
      image: "composition1.jpg",
      description: "Classic black and white composition notebook"
    },
    {
      id: 10,
      name: "Index Cards",
      price: "$3.49",
      image: "index1.jpg",
      description: "Pack of 100 white index cards"
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
        <h1 className="text-3xl font-bold text-gray-800 mb-2">📒 Paper & Notebooks</h1>
        <p className="text-gray-600">Quality notebooks, notepads, and paper products for all your needs</p>
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

export default PaperNotebooks;