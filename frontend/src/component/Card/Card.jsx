import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Card = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);

  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const productCards = products.map((product) => {
    return (
      <div
        key={product.id}
        className="w-48 h-[50%] bg-white p-1 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-56"
          />

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all delay-[900ms] flex items-center justify-center">
            <button
              onClick={() => handleQuickView(product)}
              className="px-6 py-2 text-sm font-bold text-red-600 transition-all duration-300 transform translate-y-4 bg-white border-2 border-red-600 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-red-600 hover:text-white"
            >
              QUICK VIEW
            </button>
          </div>
        </div>
        <div className="p-2">
          <div onClick={() => navigate(`/product/${product.id}`)}>
            <h3 className="mb-1 text-sm font-medium leading-tight text-gray-800 line-clamp-2">
              {product.name}
            </h3>
            <p className="mb-2 text-xs font-medium text-green-600">
              {product.brand}
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <span className="text-lg font-bold text-red-600">
              ${product.price}
            </span>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-3 py-1 text-xs font-medium text-white transition-colors duration-200 bg-blue-600 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {products.length > 0 ? (
        <div className="flex flex-wrap w-full gap-4 p-3 overflow-auto">
          {productCards}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-64">
          <p className="text-lg text-gray-500">No products available</p>
        </div>
      )}

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

                <p className="text-gray-600">
                 {selectedProduct.description}
                </p>

                <p className="text-3xl font-bold text-red-600">
                  ₹{selectedProduct.price}
                </p>

                <div className="flex gap-4">
                  <button
                    className="w-[120px] py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    Add To Cart
                  </button>

                  <button className="w-[150px] py-3 border border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50">
                    Add To Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
