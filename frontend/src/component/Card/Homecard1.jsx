import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Homecard1 = () => {
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

  const getNewArrivals = () => {
    if (!products || products.length === 0) return [];
    return products
      .filter((product) => product.category === "books")
      .slice(-9)
      .reverse();
  };
  // // If you want to show specific book subcategories
  // const getBooksBySubcategory = (subcategory) => {
  //   if (!products || products.length === 0) return [];
  //   return products
  //     .filter(product =>
  //       product.category === "books" &&
  //       product.subcategory === subcategory
  //     )
  //     .slice(-5)
  //     .reverse();
  // };

  const displayProducts = getNewArrivals();

  if (displayProducts.length === 0) {
    return <div className="text-center py-8">No new arrivals available</div>;
  }

  return (
    <div className="w-full">
      <div>
        <h1 className="mb-5 text-3xl font-bold px-8">New Arrivals</h1>
      </div>
      <div className="flex items-center justify-start bg-slate-100  rounded-lg p-4 overflow-x-auto scrollbar-hide w-full px-4 sm:px-6 lg:px-8 space-x-2 sm:space-x-4 lg:space-x-6">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="w-32 sm:w-36 lg:w-40 flex-shrink-0"
          >
            <div className="relative group w-full h-40 sm:h-44 lg:h-48 bg-gray-200 shadow-sm hover:shadow-xl overflow-hidden flex items-center justify-center rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                <button
                  onClick={() => handleQuickView(product)}
                  className="bg-white text-red-600 px-4 py-2 font-bold text-xs border-2 border-red-600 
                  opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                  transition-all duration-300 hover:bg-red-600 hover:text-white rounded"
                >
                  QUICK VIEW
                </button>
              </div>
            </div>
            <div className="mt-3">
              <h3 
                className="font-semibold text-xs sm:text-sm line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {product.name}
              </h3>
              <p className="text-gray-600 text-xs">{product.brand}</p>
              <p className="text-green-600 font-bold text-sm">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
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

export default Homecard1;
