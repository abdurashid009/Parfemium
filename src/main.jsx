import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./pages/Aboutus.jsx";
import Blogs from "./pages/Blogs.jsx";
import Header from "./components/Header.jsx";
<<<<<<< HEAD
import Slide from "./pages/Slide.jsx";
=======
import Shop from "./components/ProductList.jsx";

>>>>>>> 4fa6522279a04bd3a244ddbd731b6253276ed15e
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
<<<<<<< HEAD
        path: "/shop",
        element: <Slide />,
=======
        path: "/Shop",
        element: <Shop />,
>>>>>>> 4fa6522279a04bd3a244ddbd731b6253276ed15e
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
