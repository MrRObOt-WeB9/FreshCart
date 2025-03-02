import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export let cartContext = createContext();

export default function CartContextProvider({ children }) {
  const headers = {
    token: localStorage.getItem("userToken"),
  };
  const [cart, setCart] = useState([]);
  async function addProductToCart(productId) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        { headers }
      );
      getProductsFromCart();
      toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function updateProductCountToCart(productId, count) {
    try {
      let { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count,
        },
        { headers }
      );
      setCart(data);
      toast.success(data.status, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteProductFromCart(productId) {
    try {
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { headers }
      );
      setCart(data);
      toast.success(data.status, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function getProductsFromCart() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function clearCartItems() {
    try {
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      getProductsFromCart();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProductsFromCart();
  }, []);
  return (
    <cartContext.Provider
      value={{
        addProductToCart,
        cart,
        updateProductCountToCart,
        deleteProductFromCart,
        clearCartItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
