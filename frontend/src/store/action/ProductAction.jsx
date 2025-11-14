import axios from "../../api/axiosconfig";
import { loadproduct, Deleteproduct } from "../reducer/ProductSlice";

export const CreateProduct = (product) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/product", product);
    dispatch(loadproduct(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const ReadProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/product");
    dispatch(loadproduct(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateProduct = (id, product) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch(`/product/${id}`, product);
    dispatch(ReadProduct());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteProduct = (product) => async (dispatch, getState) => {
  try {
    const { data } = await axios.delete(`/product/${product.id}`);
    dispatch(Deleteproduct(product));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
