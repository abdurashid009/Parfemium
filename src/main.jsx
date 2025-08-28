import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./pages/Aboutus.jsx";
import Blogs from "./pages/Blogs.jsx";
import Header from "./components/Header.jsx";
import Shop from "./components/ProductList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // ✅ default sahifa
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
        path: "/Shop",
        element: <Shop />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
