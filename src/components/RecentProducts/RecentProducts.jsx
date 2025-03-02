import React, { useContext, useEffect, useState } from "react";
import style from "./RecentProducts.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { cartContext } from "../../context/CartContext";
import { wishlistContext } from "../../context/WishListContext";
import { useQuery } from "@tanstack/react-query";

export default function RecentProducts() {
  let { addProductToCart } = useContext(cartContext);
  let { addProductToWishList, wishlist } = useContext(wishlistContext);
  function getRecentProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading, isError } = useQuery({
    queryKey: ["recentProducts"],
    queryFn: getRecentProducts,
    select: (data) => data.data.data,
  });
  return (
    <>
      <div className="container mx-auto">
        {isLoading && <PacmanLoader color={"#0aad0a"} />}
        <div className="flex flex-wrap py-10 gap-y-3 items-center">
          {data?.map((obj) => (
            <div
              className="w-full sm:w-1/2 md:w-2/6 lg:w-1/4 px-5"
              key={obj._id}
            >
              <div className="product p-2 rounded-lg">
                <Link to={`/productdetails/${obj._id}/${obj.category.name}`}>
                  <img className="w-full" src={obj.imageCover} alt="" />
                  <p className="text-main">{obj.category.name}</p>
                  <h3>{obj.title.split(" ").splice(0, 2)}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <h4>{obj.price} L.E</h4>

                    <p>
                      <i className="fa fa-star text-yellow-300"></i>{" "}
                      {obj.ratingsAverage}
                    </p>
                  </div>
                </Link>
                <p>
                  <i
                    onClick={() => addProductToWishList(obj._id)}
                    className={`fa fa-heart ${wishlist.data?.map((item) =>
                      item.id === obj.id ? `fa fa-heart text-red-700` : ""
                    )}`}
                  ></i>
                </p>
                <button
                  onClick={() => {
                    addProductToCart(obj._id);
                  }}
                  className="btn bg-main w-full text-white p-2 rounded-xl"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
