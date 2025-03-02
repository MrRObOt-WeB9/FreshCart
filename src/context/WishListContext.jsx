import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export let wishlistContext = createContext();

export default function WishListProvider({ children }) {
  const headers = {
    token: localStorage.getItem("userToken"),
  };
  const [wishlist, setWishList] = useState([]);
  async function addProductToWishList(productId) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        { headers }
      );
      getProductsFromWishList();
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
  async function deleteProductFromWishList(productId) {
    try {
      let { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        { headers }
      );
      getProductsFromWishList();
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
  async function getProductsFromWishList() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { headers }
      );
      setWishList(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProductsFromWishList();
  }, []);
  return (
    <wishlistContext.Provider
      value={{
        wishlist,
        addProductToWishList,
        deleteProductFromWishList,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
}
