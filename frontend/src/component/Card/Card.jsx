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
    navigate("/cart");
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowQuickView(true);
  };

  const productCards = products.map((product) => {
    return (
      <div
        key={product.id}
        className="w-48 h-[40%] bg-white p-1 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all delay-[9000 ] flex items-center justify-center">
            <button
              onClick={() => handleQuickView(product)}
              className="bg-white text-red-600 px-6 py-2 font-bold text-sm border-2 border-red-600 
              opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
              transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              QUICK VIEW
            </button>
          </div>
        </div>
        <div className="p-2">
          <div onClick={() => navigate(`/product/${product.id}`)}>
            <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2 leading-tight">
              {product.name}
            </h3>
            <p className="text-green-600 text-xs font-medium mb-2">
              {product.brand}
            </p>
          </div>
          <div className="flex items-center justify-between ">
            <span className="text-red-600 text-lg font-bold">
              ${product.price}
            </span>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors duration-200"
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
        <div className="flex flex-wrap gap-4 w-full p-3 overflow-auto">
          {productCards}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-64">
          <p className="text-gray-500 text-lg">No products available</p>
        </div>
      )}

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

                <p className="text-gray-600">
                 {selectedProduct.description}
                </p>

                <p className="text-red-600 text-3xl font-bold">
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
