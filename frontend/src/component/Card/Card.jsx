import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = () => {

  // const navigate = useNavigate();
  const  products  = useSelector((state) => state.product.products);

  // const handleQuickView = (productId) => {
  //   navigate(`/product/${productId}`);
  // };

  // const handleAddToCart = (product) => {
  //   // TODO: Dispatch add to cart action
  //   console.log("Adding to cart:", product);
  //   navigate("/cart");
  // };

  const productCards = products.map((product) => {
    return (
      <div
        key={product.id}
        className="w-48 h-[55%] bg-white p-1 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <div className="relative group">
          <img
            src={product.image} alt={product.name}
            className="w-full h-56 object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <button
              // onClick={() => handleQuickView(product.id)}
              className="bg-white text-red-600 px-6 py-2 font-bold text-sm border-2 border-red-600 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              QUICK VIEW
            </button>
          </div>
        </div>

        <div className="p-3">
          <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2 leading-tight">
            {product.name }
          </h3>

          <p className="text-green-600 text-xs font-medium mb-2">
            {product.brand}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-red-600 text-lg font-bold">
              ${product.price}
            </span>

            <button
              // onClick={() => handleAddToCart(product)}
              className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="flex flex-wrap gap-4 w-full p-3 overflow-auto">
      {productCards}
    </div>
  ) : (
    <div className="flex items-center justify-center w-full h-64">
      <p className="text-gray-500 text-lg">No products available</p>
    </div>
  );
};
export default Card;
