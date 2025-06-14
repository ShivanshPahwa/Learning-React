import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import Body from "./Components/Body";
import AboutUs from "./Components/AboutUs";

import "../index.css";
const AppLayout = () => {
  return (
    <div className="container">
      <Header />

      <Body />

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
  {
    path: '/AboutUs',
    element: <AboutUs/>
  },
]);
root.render(<RouterProvider router={appRouter}/>);
