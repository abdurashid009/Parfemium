<<<<<<< HEAD
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

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
=======
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProductsGrid from './pages/ProductList'
import Special from './pages/Special'

const App = () => {
  return (
    <div className=''>
      
    <ProductsGrid/>
    <Special />
    
    </div>
  )
}
>>>>>>> f943f2253e20dcee26fe0fc94a167cffc9dc5190

export default App;
