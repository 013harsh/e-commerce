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
import StationeryCategory from "../pages/product/StationeryCategory";
import BookProduct from "../pages/product/bookproduct";
import Card from "../component/Card/Card";
import FilingOrganization from "../pages/product/Categories/FilingOrganization";
import PaperNotebooks from "../pages/product/Categories/PaperNotebooks";
import OtherUsefultems from "../pages/product/Categories/OtherUsefultems";
import RulerScale from "../pages/product/Categories/RulerScale";
import WritingTools from "../pages/product/Categories/WritingTools";
import CreateProduct from "../pages/admin/CreateProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/homecard1" element={<Homecard1 />} />
      <Route path="/stationeryproduct" element={<StationeryProduct />} />
      <Route path="/categor/:categoryId" element={<StationeryCategory />} />
      <Route path="/bookproduct" element={<BookProduct />} />
      <Route path="/card" element={<Card />} />
      <Route path="/filingorganization" element={<FilingOrganization />} />
      <Route path="/papernotebooks" element={<PaperNotebooks />} />
      <Route path="/otherusefultems" element={<OtherUsefultems />} />
      <Route path="/rulerscale" element={<RulerScale />} />
      <Route path="/writingtools" element={<WritingTools />} />
      <Route path="/createproduct" element={<CreateProduct />} />
    </Routes>
  );
};

export default MainRoutes;
