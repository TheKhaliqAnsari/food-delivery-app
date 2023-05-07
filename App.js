import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import RestaurantBody from "./components/RestaurantBody";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ipconfig from "./ipconfig.json";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu  from "./components/RestaurantMenu";

export const config = { endpoint: ipconfig.apiUrl };

const App = () => {
  return (
    <>
      {/* Navbar using MUI */}
      <NavBar />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestaurantBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },{
        path: "/home",
        element: <RestaurantBody />,
      },{
        path: "/restaurant-details/:resId",
        element: <RestaurantMenu />
      }
    ],
  },
]);

ReactDOM.render(
  <RouterProvider router={appRouter} />,
  document.getElementById("root")
);
