import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import UserContextProvider from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import VerifyCode from "./components/VerifyCode/VerifyCode";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartContextProvider from "./context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import WishList from "./components/WishList/WishList";
import WishListProvider from "./context/WishListContext";
import Checkout from "./components/Checkout/Checkout";
import Allorders from "./components/Allorders/Allorders";
import CashOrder from "./components/CashOrder/CashOrder";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "verify-code", element: <VerifyCode /> },
        { path: "reset-password", element: <ResetPassword /> },
        {
          path: "home",
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "cash",
          element: (
            <ProtectedRoute>
              <CashOrder />
            </ProtectedRoute>
          ),
        },
        {
          path: "allorders",
          element: (
            <ProtectedRoute>
              <Allorders />
            </ProtectedRoute>
          ),
        },
        {
          path: "productdetails/:id/:category",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      <CartContextProvider>
        <WishListProvider>
          <UserContextProvider>
            <RouterProvider router={routes} />
            <ToastContainer />
          </UserContextProvider>
        </WishListProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default App;
