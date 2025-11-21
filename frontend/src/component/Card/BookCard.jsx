import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookCard = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);


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
    <div className="w-full p-4 bg-gray-100">
      <div>
        <h1 className="mb-5 text-3xl font-bold arial ">Books Section</h1>
      </div>

      <div className="w-full  p-4 mb-6 bg-white shadow rounded-xl">
        <h2 className="mb-3 text-2xl font-bold">NCERT</h2>
        <div className="flex space-x-4">
          {ncertBooks.map((product) => (
            <div
              key={product.id}
              className="flex space-x-4 overflow-x-auto scrollbar-hide"
              onClick={() => navigate("/BookProduct")}
            >
              <img
                src={product.image}
                alt={product.name}
                className="flex-shrink-0 object-cover w-32 h-48 rounded-lg shadow"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          onClick={() => navigate("/BookProduct")}
          className="flex flex-col items-center justify-center p-6 shadow md:col-span-2 bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl"
        >
          <h2 className="text-2xl font-semibold">
            A JOURNEY INTO THE STORIES THAT MATTER
          </h2>
          <div className="flex gap-3 mt-4">
            {otherBooks.map((product) => (
            <div
              key={product.id}
              className="flex space-x-4 overflow-x-auto scrollbar-hide"
              onClick={() => navigate("/BookProduct")}
            >
              <img
                src={product.image}
                alt={product.name}
                className="flex-shrink-0 object-cover w-32 h-48 rounded-lg shadow"
              />
            </div>
          ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-4 bg-white shadow rounded-xl">
            <h3 className="mb-2 text-2xl font-semibold">Friction</h3>
            <div
              onClick={() => navigate("/BookProduct")}
              className="flex gap-2 overflow-x-auto scrollbar-hide"
            >
              {fictionBooks.map((product) => (
            <div
              key={product.id}
              className="flex space-x-4 overflow-x-auto scrollbar-hide"
              onClick={() => navigate("/BookProduct")}
            >
              <img
                src={product.image}
                alt={product.name}
                className="flex-shrink-0 object-cover w-32 h-48 rounded-lg shadow"
              />
            </div>
          ))}
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <h3 className="mb-2 text-2xl font-semibold">Non-Friction</h3>
            <div
              onClick={() => navigate("/BookProduct")}
              className="flex gap-2 overflow-x-auto"
            >
              {nonFictionBooks.map((product) => (
            <div
              key={product.id}
              className="flex space-x-4 overflow-x-auto scrollbar-hide"
              onClick={() => navigate("/BookProduct")}
            >
              <img
                src={product.image}
                alt={product.name}
                className="flex-shrink-0 object-cover w-32 h-48 rounded-lg shadow"
              />
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="p-6 text-center text-white bg-indigo-800 shadow rounded-xl">
          <h3 className="text-lg font-semibold">Mythology Reads</h3>
          <p>Up to 70% Off</p>
        </div>
        <div className="p-6 text-center text-white bg-blue-900 shadow rounded-xl">
          <h3 className="text-lg font-semibold">Hottest Read of 2025</h3>
          <p>Up to 70% Off</p>
        </div>
        <div className="p-6 text-center text-white bg-purple-900 shadow rounded-xl">
          <h3 className="text-lg font-bold">Exam Prep & More</h3>
          <p>Up to 70% Off</p>S
        </div>
      </div>
    </div>
  );
};

export default BookCard;
