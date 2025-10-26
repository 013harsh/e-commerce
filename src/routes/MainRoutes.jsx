import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import Categories from "../pages/Categories";
import SearchBar from "../pages/SearchBar";
import PageNotFound from "../pages/PageNotFound";
import Login from "../component/singup/Login";
import Register from "../component/singup/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/search" element={<SearchBar />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
