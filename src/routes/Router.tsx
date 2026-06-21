import HomePage from "../pages/HomePage.tsx";
import ProductPage from "../pages/ProductPage.tsx";
import CartPage from "../pages/CartPage.tsx";
import CheckoutPage from "../pages/CheckoutPage.tsx";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/layout/MainLayout.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
        { 
            index: true, 
            Component: HomePage 
        },
        { 
            path: "product/:id", 
            Component: ProductPage 
        },
        { 
            path: "cart", 
            Component: CartPage 
        },
        { 
            path: "checkout", 
            Component: CheckoutPage 
        },
    ],
  },
]);
    
