import axios from "../../api/axiosconfig";
import { loaduser, remover } from "../reducer/UserSlice";


export const RegisterUser = (user) => async (dispatch, getstate) => {
  try {
    const { data: existinguser } = await axios.get(`/users?email=${user.email}`
    );
    if (existinguser.length > 0) {
      return alert("user email already exists");
    }

    if (user.email === "" || user.password === "" || (user.username === "" && user.username.trim().length === 0)
    ) {
      return alert("please fill all the fields");
    }
    if (user.password.length < 8) {
      return alert("password must be at least 6 characters long");
    }

    const { data: res } = await axios.post("/users", user);
    console.log(res.data);
    dispatch(loaduser(res.data));

  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = (user) => async (dispatch, getstate) => {
  try {
    const { data: emailuser } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    if (emailuser.length === 0) {
      return alert("user not found");
    }
    if (user.email === "" || user.password === "") { }

    const { data: validuser } = await axios.get(`/users?email=${user.email}&password=${user.password}`);

    if (validuser.length === 0) {
      return alert("wrong password");
    }
    console.log(validuser[0]);
    alert("login successful");
    localStorage.setItem("user", JSON.stringify(validuser[0]));
    dispatch(loaduser(validuser[0]));
  } catch (error) {
    console.log(error);
  }
};


export const Logoutuser = (user) => async (dispatch, getstate) => {
  try {
    localStorage.removeItem("user");
    console.log("logout successful");
    dispatch(remover());
  } catch (error) {
    console.log(error);
  }
}


export const Deleteuser = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.delete(`/users/${user.id}`);
    localStorage.removeItem("user");
    console.log("user deleted successfully");
    alert("Account deleted successfully");
    dispatch(remover());
  } catch (error) {
    console.log("Delete error:", error);
    }
  }