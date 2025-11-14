import axios from "../../api/axiosconfig";
import { loadproduct, RemoveProduct } from "../reducer/ProductSlice";

export const CreateProduct = (product) => async (dispatch) => {
  try {
    const { data } = await axios.post("/products", product, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch(loadproduct(data.products || data));
    alert("Product added successfully");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const ReadProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct());
    console.log(data);
    alert("Product fetched successfully");
  } catch (error) {
    console.log(error);
  }
};

export const UpdateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`/products/${id}`, product);
    dispatch(ReadProduct());
    console.log(data);
    alert("Product updated successfully");
  } catch (error) {
    console.log(error);
  }
};

export const DeleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/products/${id}`);
    dispatch(RemoveProduct(id));
    console.log(data);
    alert("Product deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
