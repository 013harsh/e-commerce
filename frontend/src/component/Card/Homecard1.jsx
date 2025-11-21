import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Homecard1 = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const getNewArrivals = () => {
    if (!products || products.length === 0) return [];
    return products
    .filter(product => product.category === "books")
    .slice(-9).reverse();
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
    <div>
      <div>
        <h1 className="mb-5 text-3xl font-bold px-8">New Arrivals</h1>
      </div>
      <div className="flex items-center justify-start overflow-x-auto   scrollbar-hide w-screen px-[3%]  space-x-6">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="w-full sm:w-[150px] cursor-pointer space-y-4 "
          >
            <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[230px] bg-gray-200 shadow-sm hover:shadow-xl overflow-hidden flex items-center justify-center rounded">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <p className="text-gray-600 text-xs">{product.brand}</p>
              <p className="text-green-600 font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homecard1;
