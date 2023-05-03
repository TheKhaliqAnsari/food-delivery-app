import React from "react";
import NavBar from "./components/NavBar";
import RestaurantBody from "./components/RestaurantBody";
import ipconfig from "./ipconfig.json";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const config = { endpoint : ipconfig.apiUrl}
{/* 
        Header
            - logo
            - nav items
            - cart
        Body
            - Search bar
            - Restaurent List
                -Restuarent Card
                    -Image
                    -Name
                    -Rating
                    -Cousines
        Footer
            - Links
            - Copyright
    */}

const app = () => {
    return(
    <>
        {/* Navbar using MUI */}
        <NavBar />
        <RestaurantBody />
    </>)
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <app />
    },
    {
        peth: "/about",
        element: <About />

    },
])

export default app;

