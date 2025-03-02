import React, { useContext, useEffect, useState } from "react";
import style from "./WishList.module.css";
import { wishlistContext } from "../../context/WishListContext";
import { PacmanLoader } from "react-spinners";
import { cartContext } from "../../context/CartContext";

export default function WishList() {
  let { wishlist, deleteProductFromWishList } = useContext(wishlistContext);
  let { addProductToCart } = useContext(cartContext);
  return (
    <>
      <div className="py-10">
        <h1 className="font-medium text-2xl">My Wish List</h1>
        {wishlist ? (
          <div className="py-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.count === 0 && (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td colSpan={4} className="p-4 text-center">
                        The WishList Is Empty
                      </td>
                    </tr>
                  )}
                  {wishlist.data?.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <img
                          src={item.imageCover}
                          className="w-16 md:w-32 max-w-full max-h-full"
                          alt={item.title}
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${item.price}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex">
                          <button
                            onClick={() => deleteProductFromWishList(item.id)}
                            className="font-medium pe-3 text-red-600 dark:text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => addProductToCart(item.id)}
                            className="btn bg-main w-full text-white p-2 rounded-xl"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <PacmanLoader color={"#0aad0a"} />
        )}
      </div>
    </>
  );
}
