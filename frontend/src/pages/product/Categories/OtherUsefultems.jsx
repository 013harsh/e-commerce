import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PaperNotebooks = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const getBooksBySubcategory = (subcategory) => {
    if (!products || products.length === 0) return [];
    return products.filter((product) => product.subcategory === subcategory)
    .reverse();
  };
  const otheritems = getBooksBySubcategory("other-items");

  return (
    <div className="p-5">

      <div className="mb-5">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-500 text-white border-none rounded cursor-pointer mb-4 
                   hover:bg-gray-600 transition-colors"
        >
          ← Back to Categories
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          📒 Paper & Notebooks
        </h1>
        <p className="text-gray-600">
          Quality notebooks, notepads, and paper products for all your needs
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {otheritems.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm 
                     transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-500">
              <img src={product.image} alt={product.name} 
               className="max-h-full max-w-full"/>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              {product.name}
            </h4>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            <p className="text-xl font-bold text-blue-600 mb-3">
              {product.price}
            </p>
            <button
              className="w-full py-2 bg-blue-500 text-white border-none rounded cursor-pointer 
                             hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperNotebooks;
