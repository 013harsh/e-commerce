import NavBar from "./component/NavBar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./component/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Currentuser } from "./store/action/UserAction";
import { ReadProduct } from "./store/action/ProductAction";
import ScrollToTop from "./component/ScrollToTop";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Currentuser());
    dispatch(ReadProduct());
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen  overflow-x-hidden  bg-white">
      <ScrollToTop />
      <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
