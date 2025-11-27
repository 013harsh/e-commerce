import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncaddtoCart } from "../../store/action/CartAction";

const BookCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:");
    dispatch(asyncaddtoCart(product));
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
    return <div className="py-8 text-center">No new arrivals available</div>;
  }
  const ncertBooks = getBooksBySubcategory("Ncert");
  const otherBooks = getBooksBySubcategory("other-books");
  const fictionBooks = getBooksBySubcategory("fiction");
  const nonFictionBooks = getBooksBySubcategory("non-fiction");

  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg">
      <div>
        <h1 className="mb-5 font-sans text-2xl font-bold sm:text-3xl">
          Books Section
        </h1>
      </div>

      <div className="w-full p-4 mb-6 bg-white shadow rounded-xl">
        <h2 className="mb-3 text-2xl font-bold">NCERT</h2>
        <div className="flex space-x-4">
          {ncertBooks.map((product) => (
            <div key={product.id} className="relative flex-shrink-0 group">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-32 h-48 rounded-lg shadow cursor-pointer"
                // onClick={() => navigate(`/product/${product.id}`)}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-all bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-30">
                <button
                  onClick={() => handleQuickView(product)}
                  className="px-4 py-1 text-xs font-bold text-red-600 transition-all duration-300 transform translate-y-4 bg-white border-2 border-red-600 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-red-600 hover:text-white"
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
              <div key={product.id} className="relative flex-shrink-0 group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-32 h-48 rounded-lg shadow cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-30">
                  <button
                    onClick={() => handleQuickView(product)}
                    className="px-4 py-1 text-xs font-bold text-red-600 transition-all duration-300 transform translate-y-4 bg-white border-2 border-red-600 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-red-600 hover:text-white"
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
            <h3 className="mb-2 text-xl font-semibold sm:text-2xl">Fiction</h3>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {fictionBooks.map((product) => (
                <div key={product.id} className="relative flex-shrink-0 group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-32 h-48 rounded-lg shadow cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-all bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-30">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="px-4 py-1 text-xs font-bold text-red-600 transition-all duration-300 transform translate-y-4 bg-white border-2 border-red-600 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-red-600 hover:text-white"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <h3 className="mb-2 text-xl font-semibold sm:text-2xl">
              Non-Fiction
            </h3>
            <div className="flex gap-2 overflow-x-auto">
              {nonFictionBooks.map((product) => (
                <div key={product.id} className="relative flex-shrink-0 group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-32 h-48 rounded-lg shadow cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-all bg-black bg-opacity-0 rounded-lg group-hover:bg-opacity-30">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="px-4 py-1 text-xs font-bold text-red-600 transition-all duration-300 transform translate-y-4 bg-white border-2 border-red-600 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-red-600 hover:text-white"
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

                <p className="text-gray-600">{selectedProduct.brand}</p>

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

export default BookCard;
