import { useForm } from "react-hook-form";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductList, setShowProductList] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  const watchCategory = watch("category");

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toString().includes(searchTerm)
  );

  // Load selected product data into form
  const loadProductData = (product) => {
    setSelectedProduct(product);
    setValue("name", product.name);
    setValue("brand", product.brand);
    setValue("category", product.category);
    setValue("subcategory", product.subcategory);
    setValue("price", product.price);
    setValue("stock", product.stock);
    setValue("description", product.description);
    setValue("image", product.image);
    setShowProductList(false);
    setSearchTerm(product.name);
  };

  const updateHandler = useCallback(
    async (data) => {
      if (!selectedProduct) {
        alert("Please select a product to update");
        return;
      }

      setLoading(true);
      try {
        // Here you would dispatch an update action
        // const result = await dispatch(UpdateProduct(selectedProduct.id, data));
        console.log("Updating product:", selectedProduct.id, data);

        // Simulate API call
        setTimeout(() => {
          alert("Product updated successfully!");
          reset();
          setSelectedProduct(null);
          setSearchTerm("");
          setLoading(false);
          navigate("/BookProduct");
        }, 1000);

      } catch (error) {
        console.error("Error updating product:", error);
        setLoading(false);
      }
    },
    [selectedProduct, dispatch, navigate, reset]
  );

  const categories = [
    { value: "stationery", label: "Stationery" },
    { value: "books", label: "Books" },
  ];

  const stationerySubcategories = [
    { value: "writing-tools", label: "Writing Tools" },
    { value: "paper-notebooks", label: "Paper & Notebooks" },
    { value: "organization-filing", label: "Organization & Filing" },
    { value: "ruler-scale", label: "Ruler / Scale" },
    { value: "other-items", label: "Other Useful Items" },
  ];

  const booksSubcategories = [
    { value: "fiction", label: "Fiction" },
    { value: "non-fiction", label: "Non-Fiction" },
    { value: "Ncert", label: "NCERT" },
    { value: "other-books", label: "Other Books" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Update Product
        </h1>
        <p className="text-gray-600">Search and update existing products in your inventory</p>
      </div>

      {/* Product Search Section */}
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          <i className="fa-solid fa-search mr-2"></i>Search Product
        </h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Search by product name, brand, or ID..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowProductList(e.target.value.length > 0);
              if (e.target.value.length === 0) {
                setSelectedProduct(null);
                reset();
              }
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />

          {showProductList && filteredProducts.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filteredProducts.slice(0, 10).map((product) => (
                <div
                  key={product.id}
                  onClick={() => loadProductData(product)}
                  className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      {product.brand} • ID: {product.id} • ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedProduct && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-center">
              <i className="fa-solid fa-check-circle text-green-600 mr-2"></i>
              <span className="text-green-800 font-medium">
                Selected: {selectedProduct.name} (ID: {selectedProduct.id})
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Update Form - Only show when product is selected */}
      {selectedProduct && (
        <form onSubmit={handleSubmit(updateHandler)} className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              <i className="fa-solid fa-edit mr-2"></i>Update Product Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  {...register("name", { required: "Product name is required" })}
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand
                </label>
                <input
                  {...register("brand")}
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter brand name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  {...register("category", { required: "Category is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.category.message}
                  </span>
                )}
              </div>

              {watchCategory === "stationery" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subcategory
                  </label>
                  <select
                    {...register("subcategory")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Subcategory</option>
                    {stationerySubcategories.map((sub) => (
                      <option key={sub.value} value={sub.value}>
                        {sub.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {watchCategory === "books" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subcategory
                  </label>
                  <select
                    {...register("subcategory")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Subcategory</option>
                    {booksSubcategories.map((sub) => (
                      <option key={sub.value} value={sub.value}>
                        {sub.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price *
                </label>
                <input
                  {...register("price", { required: "Price is required" })}
                  type="number"
                  step="0.01"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                />
                {errors.price && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.price.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Quantity *
                </label>
                <input
                  {...register("stock", { required: "Stock is required" })}
                  type="number"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0"
                />
                {errors.stock && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.stock.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                {...register("description", { required: "Description is required" })}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product description"
              />
              {errors.description && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              <i className="fa-solid fa-image mr-2"></i>Product Image
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                {...register("image")}
                type="url"
                placeholder="Enter image URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {selectedProduct?.image && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Current Image:</p>
                  <img
                    src={selectedProduct.image}
                    alt="Current product"
                    className="w-32 h-32 object-cover rounded-md border"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => {
                reset();
                setSelectedProduct(null);
                setSearchTerm("");
              }}
              disabled={loading}
            >
              Clear Form
            </button>
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => navigate("/")}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                  Updating...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-save mr-2"></i>
                  Update Product
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* No Product Selected Message */}
      {!selectedProduct && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <i className="fa-solid fa-search text-4xl text-gray-400 mb-4"></i>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Search for a Product to Update
          </h3>
          <p className="text-gray-600">
            Use the search box above to find and select a product you want to update.
          </p>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;