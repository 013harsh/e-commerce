import axios from "../../api/axiosconfig";
import {
  loadCart,
  addtoCart,
  removeFromCart,
  increasequantity,
  decreasequantity,
} from "../reducer/CartSlice";

// export const asyncloadCart = () => async (dispatch, getstate) => {
//   try {
//     const { data } = await axios.get("/cart");
//     dispatch(loadCart(data));
//   } catch (error) {
//     console.log(error);
//   }
// };
export const asyncloadCart = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/cart");
    dispatch(loadCart(data));
    localStorage.setItem("cart", JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export const asyncaddtoCart = (product) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/cart", {
      id: product.id, 
      ...product, 
      quantity:1,
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

// export const asyncincreasequantity =(id) => async (dispatch, getstate) => {
//     try {
//       const { data } = await axios.patch(`/cart/${id}`, {
//         action: "increase",
//       });
//       dispatch(increasequantity(id));
//       localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
//       console.log(getstate().Cart.Cart);
//     } catch (error) {
//       console.log(error);
//     }
//   };
export const asyncincreasequantity = (id) => async (dispatch, getState) => {
  try {
    const { data: item } = await axios.get(`/cart/${id}`);
    const newQty = (item?.quantity || 0) + 1;

    await axios.patch(`/cart/${id}`, { quantity: newQty });

    dispatch(increasequantity(String(id)));
    localStorage.setItem("cart", JSON.stringify(getState().Cart.Cart));
  } catch (e) {
    console.log(e);
  }
};

// export const asyncdecreasequantity =(id) => async (dispatch, getstate) => {
//     try {
//       const { data } = await axios.patch(`/cart/${id}`, {
//         action: "decrease",
//       });
//       dispatch(decreasequantity(id));
//       localStorage.setItem("cart", JSON.stringify(getstate().Cart.Cart));
//       console.log(getstate().Cart.Cart);
//     } catch (error) {
//       console.log(error);
//     }
//   };
export const asyncdecreasequantity = (id) => async (dispatch, getState) => {
  try {
    const { data: item } = await axios.get(`/cart/${id}`);
    const current = item?.quantity || 0;
    const newQty = current - 1;

    if (newQty > 0) {
      await axios.patch(`/cart/${id}`, { quantity: newQty });
      dispatch(decreasequantity(String(id)));
    } else {
      await axios.delete(`/cart/${id}`);
      // reducer already removes when quantity goes to 0 via your UI path,
      // or you can dispatch removeFromCart(id) explicitly if needed
      dispatch(decreasequantity(String(id)));
    }

    localStorage.setItem("cart", JSON.stringify(getState().Cart.Cart));
  } catch (e) {
    console.log(e);
  }
};