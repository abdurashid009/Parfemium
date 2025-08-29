import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className=" bg-black">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
<<<<<<< HEAD
    </div>
=======

    </>
>>>>>>> 4fa6522279a04bd3a244ddbd731b6253276ed15e
  );
};

export default App;
