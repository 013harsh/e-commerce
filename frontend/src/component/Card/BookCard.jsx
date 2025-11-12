import React from "react";

const BookCard = () => {
  return (
    <div className="w-full p-4 bg-gray-100">
      <div>
        <h1 className="mb-5 text-3xl font-bold arial ">Books Section</h1>
      </div>
      {/* Top Picks Section */}
      <div className="w-full p-4 mb-6 bg-white shadow rounded-xl">
        <h2 className="mb-3 text-2xl font-semibold">Top Picks BESTSELLERS</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {[...Array(11)].map((_, i) => (
             <img
             key={i}
             src="https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" // Example: The Alchemist
             alt="Book Cover"
             className="flex-shrink-0 object-cover w-32 h-48 rounded-lg shadow"
           />
          ))}
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Big Banner (HarperCollins Style) */}
        <div className="flex flex-col items-center justify-center p-6 shadow md:col-span-2 bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl">
          <h2 className="text-2xl font-semibold">A JOURNEY INTO THE STORIES THAT MATTER</h2>
          <div className="flex gap-3 mt-4">
            {[...Array(5)].map((_, i) => (
              <img
              key={i}
              src="https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" // Example: The Alchemist
              alt="Book Cover"
              className="flex-shrink-0 object-cover w-32 h-48 rounded-lg shadow"
            />
            
            ))}
          </div>
        </div>

        {/* Right Small Grid */}
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-white shadow rounded-xl">
            <h3 className="mb-2 font-semibold">Boost Your Prep with Top Books</h3>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {[...Array(3)].map((_, i) => (
                  <img
                  key={i}
                  src="https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg" // Example: The Alchemist
                  alt="Book Cover"
                  className="flex-shrink-0 object-cover w-32 h-48 rounded-lg shadow"
                />
              ))}
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-xl">
            <h3 className="mb-2 font-semibold">JEE/JEE-ADVANCE AND NEET</h3>
            <div className="flex gap-2 overflow-x-auto">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-20 bg-gray-200 rounded h-28"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Promo Grid */}
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
          <p>Up to 70% Off</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
