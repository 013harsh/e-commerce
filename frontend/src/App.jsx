import NavBar from "./component/NavBar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./component/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Currentuser } from "./store/action/UserAction";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(Currentuser());
  },[]);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white text-navy-300">
      <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
