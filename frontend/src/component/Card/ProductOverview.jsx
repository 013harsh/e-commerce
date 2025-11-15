const ProductOverview = () => {

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-6 lg:p-8 pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-yellow-400 rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center">
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                17%
              </div>
              
              {/* Book Cover Design */}
              <div className="text-center p-8">
                <div className="text-black font-bold text-2xl mb-4">
                  DOPAMINE<br />DETOX
                </div>
                <div className="w-16 h-0.5 bg-black mx-auto mb-4"></div>
                <div className="text-black text-sm mb-8">
                  A SIMPLE GUIDE TO ELIMINATE DISTRACTIONS AND<br />
                  GET YOUR BRAIN TO DO HARD THINGS
                </div>
                <div className="text-black font-semibold">
                  THIBAUT MEURISSE
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              <div className="w-16 h-20 bg-yellow-300 rounded-lg border-2 border-blue-500">
                <div className="text-xs text-center p-1">View 1</div>
              </div>
              <div className="w-16 h-20 bg-yellow-300 rounded-lg border-2 border-gray-200">
                <div className="text-xs text-center p-1">View 2</div>
              </div>
              <div className="w-16 h-20 bg-yellow-300 rounded-lg border-2 border-gray-200">
                <div className="text-xs text-center p-1">View 3</div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-red-600">₹203.00</span>
              <span className="text-lg text-gray-500 line-through">₹245.00</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Dopamine Detox: A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things
            </h1>

            {/* Author & Publisher Info */}
            <div className="space-y-2 text-gray-600">
              <div className="flex flex-wrap gap-4">
                <span><strong>By:</strong> Thibaut Meurisse(Author)</span>
                <span><strong>Publisher:</strong> Wisdom Tree</span>
              </div>
              <div>
                <span><strong>Released:</strong> 01 May 2023</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Reclaim your focus in 48 hours or less. Do you keep procrastinating? Do you feel restless and unable to focus on your work? Do you have trouble getting excited about major goals? If so, you might need a dopamine detox. In today's world where distractions are everywhere, the ability to focus has become more and more difficult to achieve. We are constantly being stimulated, f...
              </p>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">Self-Help</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pages:</span>
                  <span className="font-medium">156</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-medium">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium">Paperback</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-gray-300">★</span>
              </div>
              <span className="text-gray-600">4.5 (1,250 reviews)</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-2 hover:bg-gray-100 transition-colors">-</button>
                <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">1</span>
                <button className="px-3 py-2 hover:bg-gray-100 transition-colors">+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-lg transition-colors">
                Add To Cart
              </button>

              <button className="w-full py-3 px-6 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Add To Wishlist
              </button>
            </div>

            {/* View Product Detail Button */}
            <button className="w-full py-3 px-6 border border-red-600 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors">
              VIEW PRODUCT DETAIL
            </button>

            {/* Additional Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>7 Day Return</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;