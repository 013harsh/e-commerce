import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Homecard1 from "../../component/Card/Homecard1";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const products = useSelector((state) => state.product.products);

  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <div className="max-w-full  mx-auto h-full p-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative w-[50%] h-[350px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 col-span-2">
            <h1 className="text-2xl font-bold text-red-600">{product.name}</h1>
            <h1 className="text-2xl font-semibold text-red-900">
              ${product.price}
            </h1>

            <h1 className="text-xl  text-gray-800">
              <strong className="text-2xl  text-gray-900">Brand: </strong>
              {product.brand}
            </h1>
            <h1 className="text-xl  text-gray-800">
              <strong className="text-2xl  text-gray-900">Stock: </strong>{" "}
              {product.stock}
            </h1>

            <p className="text-gray-800 text-lg">
              <strong className="text-2xl  text-gray-900">Description: </strong>
              {product.description}
            </p>
            <div className="flex space-x-4">
              <button className=" inline p-6 bg-green-600 text-white py-2 rounded-lg">
                Add to Cart
              </button>

              <button className=" p-6 bg-orange-500 text-white py-2 rounded-lg">
                Buy Now
              </button>

              <button className=" p-6 border border-gray-400 py-2 rounded-lg">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6 lg:p-8">
        <Homecard1 />
      </div>
    </div>
  );
};

export default ProductDetails;
