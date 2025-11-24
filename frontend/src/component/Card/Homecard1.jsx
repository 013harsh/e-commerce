import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Homecard1 = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

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
            onClick={() => navigate(`/product/${product.id}`)}
            className="w-32 sm:w-36 lg:w-40 cursor-pointer flex-shrink-0"
          >
            <div className="w-full h-40 sm:h-44 lg:h-48 bg-gray-200 shadow-sm hover:shadow-xl overflow-hidden flex items-center justify-center rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3">
              <h3 className="font-semibold text-xs sm:text-sm line-clamp-2">
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
    </div>
  );
};

export default Homecard1;
