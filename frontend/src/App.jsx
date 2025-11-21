import NavBar from "./component/NavBar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./component/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Currentuser } from "./store/action/UserAction";
import { ReadProduct } from "./store/action/ProductAction";
import StationeryProduct from "./pages/product/StationeryProduct";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(Currentuser());
    dispatch(ReadProduct());
  },[]);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white text-navy-300">

      <NavBar />
      <StationeryProduct/>
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
