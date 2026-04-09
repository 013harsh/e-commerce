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
    <div className="max-w-4xl min-h-screen p-6 mx-auto bg-white">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Update Product
        </h1>
        <p className="text-gray-600">Search and update existing products in your inventory</p>
      </div>

      {/* Product Search Section */}
      <div className="p-6 mb-6 rounded-lg bg-blue-50">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          <i className="mr-2 fa-solid fa-search"></i>Search Product
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
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {showProductList && filteredProducts.length > 0 && (
            <div className="absolute z-10 w-full mt-1 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60">
              {filteredProducts.slice(0, 10).map((product) => (
                <div
                  key={product.id}
                  onClick={() => loadProductData(product)}
                  className="flex items-center p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-12 h-12 mr-3 rounded"
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
          <div className="p-4 mt-4 border border-green-200 rounded-md bg-green-50">
            <div className="flex items-center">
              <i className="mr-2 text-green-600 fa-solid fa-check-circle"></i>
              <span className="font-medium text-green-800">
                Selected: {selectedProduct.name} (ID: {selectedProduct.id})
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Update Form - Only show when product is selected */}
      {selectedProduct && (
        <form onSubmit={handleSubmit(updateHandler)} className="space-y-6">
          <div className="p-6 rounded-lg bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              <i className="mr-2 fa-solid fa-edit"></i>Update Product Information
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Product Name *
                </label>
                <input
                  {...register("name", { required: "Product name is required" })}
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product name"
                />
                {errors.name && (
                  <span className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
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
                <label className="block mb-2 text-sm font-medium text-gray-700">
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
                  <span className="mt-1 text-sm text-red-500">
                    {errors.category.message}
                  </span>
                )}
              </div>

              {watchCategory === "stationery" && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
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
                  <label className="block mb-2 text-sm font-medium text-gray-700">
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
                <label className="block mb-2 text-sm font-medium text-gray-700">
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
                  <span className="mt-1 text-sm text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
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
                  <span className="mt-1 text-sm text-red-500">
                    {errors.stock.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Description *
              </label>
              <textarea
                {...register("description", { required: "Description is required" })}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product description"
              />
              {errors.description && (
                <span className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              <i className="mr-2 fa-solid fa-image"></i>Product Image
            </h2>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
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
                  <p className="mb-2 text-sm text-gray-600">Current Image:</p>
                  <img
                    src={selectedProduct.image}
                    alt="Current product"
                    className="object-cover w-32 h-32 border rounded-md"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 text-gray-700 transition-colors border border-gray-300 rounded-md hover:bg-gray-50"
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
              className="px-6 py-2 text-gray-700 transition-colors border border-gray-300 rounded-md hover:bg-gray-50"
              onClick={() => navigate("/")}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 text-white transition-colors bg-orange-500 rounded-md hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <i className="mr-2 fa-solid fa-spinner fa-spin"></i>
                  Updating...
                </>
              ) : (
                <>
                  <i className="mr-2 fa-solid fa-save"></i>
                  Update Product
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* No Product Selected Message */}
      {!selectedProduct && (
        <div className="py-12 text-center rounded-lg bg-gray-50">
          <i className="mb-4 text-4xl text-gray-400 fa-solid fa-search"></i>
          <h3 className="mb-2 text-lg font-medium text-gray-900">
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