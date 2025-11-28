import axios from "../../api/axiosconfig";
import {
  loadCart,
  addtoCart,
  removeFromCart,
  increasequantity,
  decreasequantity,
} from "../reducer/CartSlice";

export const asyncloadCart = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/cart");
    dispatch(loadCart(data));
  } catch (error) {
    console.log(error);
  }
};

export const asyncaddtoCart = (product) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/cart", {
      id: product.id, 
      ...product
    });

    dispatch(addtoCart(product));
    localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
    console.log(getstate().Cart.Cart);
  } catch (error) {
    console.log(error);
  }
};

export const asyncremoveFromCart =(id) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.delete(`/cart/${id}`);
      dispatch(removeFromCart(id));
      localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
      console.log(getstate().Cart.Cart);
    } catch (error) {
      console.log(error);
    }
  };

export const asyncincreasequantity =(id) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.patch(`/cart/${id}`, {
        action: "increase",
      });
      dispatch(increasequantity(id));
      localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
      console.log(getstate().Cart.Cart);
    } catch (error) {
      console.log(error);
    }
  };

export const asyncdecreasequantity =(id) => async (dispatch, getstate) => {
    try {
      const { data } = await axios.patch(`/cart/${id}`, {
        action: "decrease",
      });
      dispatch(decreasequantity(id));
      localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
      console.log(getstate().Cart.Cart);
    } catch (error) {
      console.log(error);
    }
  };