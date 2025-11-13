import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EditProfile from "../pages/EditProfile";
import Homecard1 from "../component/Card/Homecard1";
import StationeryProduct from "../pages/product/StationeryProduct";
import BookProduct from "../pages/product/bookproduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/homecard1" element={<Homecard1 />} />
      <Route path="/stationeryproduct" element={<StationeryProduct />} />
      <Route path="/bookproduct" element={<BookProduct />} />
    </Routes>
  );
};

export default MainRoutes;
