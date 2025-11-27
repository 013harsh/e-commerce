import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncaddtoCart } from "../../store/action/CartAction";

const Homecard1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(asyncaddtoCart(product));
    console.log("Adding to cart:");
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
    return <div className="py-8 text-center">No new arrivals available</div>;
  }

  return (
    <div className="w-full">
      <div>
        <h1 className="px-8 mb-5 text-3xl font-bold">New Arrivals</h1>
      </div>
      <div className="flex items-center justify-start w-full p-4 px-4 space-x-2 overflow-x-auto rounded-lg bg-slate-100 scrollbar-hide sm:px-6 lg:px-8 sm:space-x-4 lg:space-x-6">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-32 sm:w-36 lg:w-40"
          >
            <div className="relative flex items-center justify-center w-full h-40 overflow-hidden bg-gray-200 rounded-lg shadow-sm group sm:h-44 lg:h-48 hover:shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all bg-black bg-opacity-0 group-hover:bg-opacity-30">
                <button
                  onClick={() => handleQuickView(product)}
                  className="px-4 py-2 text-xs font-bold text-red-600 transition-all duration-300 transform translate-y-4 bg-white border-2 border-red-600 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-red-600 hover:text-white"
                >
                  QUICK VIEW
                </button>
              </div>
            </div>
            <div className="mt-3">
              <h3 
                className="text-xs font-semibold transition-colors cursor-pointer sm:text-sm line-clamp-2 hover:text-blue-600"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {product.name}
              </h3>
              <p className="text-xs text-gray-600">{product.brand}</p>
              <p className="text-sm font-bold text-green-600">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {showQuickView && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-50"
          onClick={() => setShowQuickView(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden bg-white shadow-lg rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuickView(false)}
              className="absolute flex items-center justify-center w-8 h-8 transition bg-gray-100 rounded-full top-4 right-4 hover:bg-gray-200"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 p-3 lg:grid-cols-2 gap-9">
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {selectedProduct.name}
                </h1>

                <p className="text-gray-600">
                 {selectedProduct.brand}
                </p>

                <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
                 {selectedProduct.description}
                </p>

                <p className="text-3xl font-bold text-red-600">
                  ₹{selectedProduct.price}
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    className="w-full py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                    onClick={() => {
                      setShowQuickView(false);
                      navigate(`/product/${selectedProduct.id}`);
                    }}
                  >
                    View Full Details
                  </button>
                  
                  <div className="flex gap-4">
                    <button
                      className="flex-1 py-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      Add To Cart
                    </button>

                    <button className="flex-1 py-3 font-semibold text-red-600 border border-red-600 rounded-lg hover:bg-red-50">
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
