import { useParams, useNavigate } from "react-router-dom";
import Cart from "../Cart";

const StationeryCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const categoryData = {
    "writing-tools": {
      title: "📝 Writing Tools",
      description:
        "Explore our collection of pens, pencils, markers, and highlighters",
      products: [
        {
          id: 1,
          name: "Blue Ballpoint Pen",
          price: "$2.99",
          image: "pen1.jpg",
        },
        {
          id: 2,
          name: "Mechanical Pencil Set",
          price: "$8.99",
          image: "pencil1.jpg",
        },
        {
          id: 3,
          name: "Highlighter Pack",
          price: "$5.99",
          image: "highlighter1.jpg",
        },
        { id: 4, name: "Marker Set", price: "$12.99", image: "marker1.jpg" },
      ],
    },
    "paper-notebooks": {
      title: "📒 Paper & Notebooks",
      description:
        "Quality notebooks, notepads, and paper products for all your needs",
      products: [
        {
          id: 5,
          name: "Spiral Notebook",
          price: "$3.99",
          image: "notebook1.jpg",
        },
        {
          id: 6,
          name: "Sticky Notes Pack",
          price: "$4.99",
          image: "sticky1.jpg",
        },
        { id: 7, name: "Legal Pad", price: "$2.99", image: "pad1.jpg" },
        { id: 8, name: "Graph Paper", price: "$1.99", image: "graph1.jpg" },
      ],
    },
    "organization-filing": {
      title: "📂 Organization & Filing",
      description: "Keep your documents organized with our filing solutions",
      products: [
        {
          id: 9,
          name: "File Folder Set",
          price: "$6.99",
          image: "folder1.jpg",
        },
        { id: 10, name: "3-Ring Binder", price: "$4.99", image: "binder1.jpg" },
        {
          id: 11,
          name: "Document Organizer",
          price: "$15.99",
          image: "organizer1.jpg",
        },
        {
          id: 12,
          name: "Paper Clips Box",
          price: "$2.99",
          image: "clips1.jpg",
        },
      ],
    },
    "ruler-scale": {
      title: "📏 Ruler / Scale",
      description: "Precision measuring tools for accurate measurements",
      products: [
        { id: 13, name: "12-inch Ruler", price: "$1.99", image: "ruler1.jpg" },
        {
          id: 14,
          name: "Protractor",
          price: "$2.99",
          image: "protractor1.jpg",
        },
        { id: 15, name: "Compass Set", price: "$8.99", image: "compass1.jpg" },
        {
          id: 16,
          name: "Triangle Set",
          price: "$5.99",
          image: "triangle1.jpg",
        },
      ],
    },
    "other-items": {
      title: "🖇️ Other Useful Items",
      description: "Essential office supplies and miscellaneous items",
      products: [
        { id: 17, name: "Stapler", price: "$7.99", image: "stapler1.jpg" },
        { id: 18, name: "Scissors", price: "$3.99", image: "scissors1.jpg" },
        { id: 19, name: "Tape Dispenser", price: "$5.99", image: "tape1.jpg" },
        { id: 20, name: "Eraser Set", price: "$2.99", image: "eraser1.jpg" },
      ],
    },
  };

  const currentCategory = categoryData[categoryId];

  if (!currentCategory) {
    return (
      <div className="p-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Category Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back to Categories
        </button>
      </div>
    );
  }

  return (
    <div className="p-5">
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {currentCategory.title}
        </h1>
        <p className="text-gray-600">{currentCategory.description}</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {currentCategory.products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm 
                     transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-500">
              Product Image
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              {product.name}
            </h4>
            <p className="text-xl font-bold text-blue-600 mb-3">
              {product.price}
            </p>
            <button
              onClick={() => navigate(`/cart`)}
              className="w-full py-2 bg-blue-500 text-white border-none rounded cursor-pointer 
                             hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/")}
        className="px-4 mt-3 bg-gray-500 border-none rounded cursor-pointer mb-4 hover:bg-gray-600 transition-colors"
      >
        ←
      </button>
    </div>
  );
};

export default StationeryCategory;
