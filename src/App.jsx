import React from "react";
import "../index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import Body from "./Components/Body";
// import AboutUs from "./Components/AboutUs";
import AboutUs from "./Components/AboutUs";
import Banner from "./Components/Banner";
import ProductDetails from './Components/ProductDetails'

const AppLayout = () => {
  return (
    <div className="container">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: '/Product/:productId',
        element: <ProductDetails/>
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
