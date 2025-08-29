import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./pages/Aboutus.jsx";
import Blogs from "./pages/Blogs.jsx";
import Header from "./components/Header.jsx";
import Slide from "./pages/Slide.jsx";
import Blog from "./pages/Blog.jsx"
import Servisec from "./pages/Services.jsx";
import ProductList from "./components/ProductList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/shop",
        element: <Slide />,
      },
      {
        path: "/services",
        element: <Servisec />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/productlist",
        element: <ProductList />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
