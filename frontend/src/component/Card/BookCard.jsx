import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const BookCard = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    navigate("/cart");
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const getBooksBySubcategory = (subcategory) => {
    if (!products || products.length === 0) return [];
    return products
      .filter(
        (product) =>
          product.category === "books" && product.subcategory === subcategory
      )
      .slice(-5)
      .reverse();
  };
  const displayProducts = getBooksBySubcategory();
  if (displayProducts.length === 0) {
    return <div className="text-center py-8">No new arrivals available</div>;
  }
  const ncertBooks = getBooksBySubcategory("Ncert");
  const otherBooks = getBooksBySubcategory("other-books");
  const fictionBooks = getBooksBySubcategory("fiction");
  const nonFictionBooks = getBooksBySubcategory("non-fiction");

  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg">
      <div>
        <h1 className="mb-5 text-2xl sm:text-3xl font-bold font-sans">
          Books Section
        </h1>
      </div>

      <div className="w-full  p-4 mb-6 bg-white shadow rounded-xl">
        <h2 className="mb-3 text-2xl font-bold">NCERT</h2>
        <div className="flex space-x-4">
          {ncertBooks.map((product) => (
            <div
              key={product.id}
              className="relative group flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-48 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center rounded-lg">
                <button
                  onClick={() => handleQuickView(product)}
                  className="bg-white text-red-600 px-4 py-1 font-bold text-xs border-2 border-red-600 
                  opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                  transition-all duration-300 hover:bg-red-600 hover:text-white rounded"
                >
                  QUICK VIEW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center p-6 shadow md:col-span-2 bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl">
          <h2 className="text-2xl font-semibold">
            A JOURNEY INTO THE STORIES THAT MATTER
          </h2>
          <div className="flex gap-3 mt-4">
            {otherBooks.map((product) => (
              <div
                key={product.id}
                className="relative group flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-48 object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center rounded-lg">
                  <button
                    onClick={() => handleQuickView(product)}
                    className="bg-white text-red-600 px-4 py-1 font-bold text-xs border-2 border-red-600 
                    opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                    transition-all duration-300 hover:bg-red-600 hover:text-white rounded"
                  >
                    QUICK VIEW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-4 bg-white shadow rounded-xl">
            <h3 className="mb-2 text-xl sm:text-2xl font-semibold">Fiction</h3>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {fictionBooks.map((product) => (
                <div
                  key={product.id}
                  className="relative group flex-shrink-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-48 object-cover rounded-lg shadow cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center rounded-lg">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="bg-white text-red-600 px-4 py-1 font-bold text-xs border-2 border-red-600 
                      opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                      transition-all duration-300 hover:bg-red-600 hover:text-white rounded"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <h3 className="mb-2 text-xl sm:text-2xl font-semibold">
              Non-Fiction
            </h3>
            <div className="flex gap-2 overflow-x-auto">
              {nonFictionBooks.map((product) => (
                <div
                  key={product.id}
                  className="relative group flex-shrink-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-48 object-cover rounded-lg shadow cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center rounded-lg">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="bg-white text-red-600 px-4 py-1 font-bold text-xs border-2 border-red-600 
                      opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                      transition-all duration-300 hover:bg-red-600 hover:text-white rounded"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showQuickView && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-6"
          onClick={() => setShowQuickView(false)}
        >
          <div
            className="max-w-2xl w-full bg-white rounded-xl shadow-lg relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuickView(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 
              rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-9">
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h1>

                <p className="text-gray-600">
                 {selectedProduct.brand}
                </p>

                <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                 {selectedProduct.description}
                </p>

                <p className="text-red-600 text-3xl font-bold">
                  ₹{selectedProduct.price}
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    onClick={() => {
                      setShowQuickView(false);
                      navigate(`/product/${selectedProduct.id}`);
                    }}
                  >
                    View Full Details
                  </button>
                  
                  <div className="flex gap-4">
                    <button
                      className="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      Add To Cart
                    </button>

                    <button className="flex-1 py-3 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50">
                      Add To Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
