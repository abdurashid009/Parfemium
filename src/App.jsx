import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />

    </>
  );
};

export default App;
