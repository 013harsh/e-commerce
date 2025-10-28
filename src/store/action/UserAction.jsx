import axios from "../../api/axiosconfig";
// import { loaduser } from "../reducer/UserSlice";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();

export const RegisterUser = (user) => async (dispatch, getstate) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
    // toast.success(res.data.message);
  } catch (error) {
    console.log(error);
    // toast.error(error.response.data.me/ssage);
  }
};
export const LoginUser = (user) => async (dispatch, getstatus) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
