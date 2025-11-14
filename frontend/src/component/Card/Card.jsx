const Card = ({
  image = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
  title = "The Monk, Vol. 2: A Romance",
  author = "M. G. Lewis",
  price = "₹1,631",
  onQuickView = () => console.log("Quick view clicked"),
  onAddToCart = () => console.log("Add to cart"),
  className = "",
}) => {
  return (
    <div
      className={`w-48 bg-white p-1 m-4 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`}
    >
      {/* Book Cover Section */}
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-56 object-cover" />

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={onQuickView}
            className="bg-white text-red-600 px-6 py-2 font-bold text-sm border-2 border-red-600 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-600 hover:text-white"
          >
            QUICK VIEW
          </button>
        </div>
      </div>

      {/* Book Details Section */}
      <div className="p-3">
        {/* Title */}
        <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Author */}
        <p className="text-green-600 text-xs font-medium mb-2">{author}</p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-red-600 text-lg font-bold">{price}</span>

          {/* Add to Cart Button */}
          <button
            onClick={onAddToCart}
            className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
