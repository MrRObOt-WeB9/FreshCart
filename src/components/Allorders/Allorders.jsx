import React, { useEffect, useState } from "react";
import style from "./Allorders.module.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { PacmanLoader } from "react-spinners";

export default function Allorders() {
  const token = localStorage.getItem("userToken");
  const decoded = jwtDecode(token);
  let [orders, setOrders] = useState([]);
  async function getUserOrders() {
    setOrders(
      await axios.get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`
      )
    );
  }
  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <>
      <div className="py-10">
        <h1 className="font-medium text-2xl">My Orders</h1>
        {orders?.data?.length !== 0 ? (
          <div className="py-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      shippingAddress
                    </th>
                    <th scope="col" className="px-6 py-3">
                      phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      paid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.data?.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">{item.shippingAddress.city}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.shippingAddress.phone}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${item.totalOrderPrice}
                      </td>
                      <td className="px-6 py-4">
                        {item.isPaid ? (
                          <i class="fa-solid fa-check"></i>
                        ) : (
                          <i class="fa-solid fa-xmark"></i>
                        )}
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
