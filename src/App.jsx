import React from "react";
import NavBar from "./component/NavBar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white text-navy-300">
      <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
