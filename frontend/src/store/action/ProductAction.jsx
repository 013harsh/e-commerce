import axios from "../../api/axiosconfig";
import { loadproduct, RemoveProduct } from "../reducer/ProductSlice";

export const AddProduct = (product) => async (dispatch) => {
  try {
    const productData = {
      ...product,
      id: Date.now().toString(),
      price: parseFloat(product.price) || 0,
      stock: parseInt(product.stock) || 0,

      image: product.image || null,
    };

    const { data } = await axios.post("/products", productData, {
      headers: { "Content-Type": "application/json" },
      //  headers: { "Content-Type": "multipart/form-data" },
    });

    dispatch(ReadProduct());

    console.log(data);
    return { success: true, data };
  } catch (error) {
    console.log(error);

    return { success: false, error };
  }
};

export const ReadProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products");

    dispatch(loadproduct(Array.isArray(data) ? data : data.products || []));
    console.log(data);
  } catch (error) {
    console.log(error);
    dispatch(loadproduct([]));
  }
};

export const UpdateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/products/${id}`, product);
    dispatch(ReadProduct());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/products/${id}`);
    dispatch(RemoveProduct(id));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
