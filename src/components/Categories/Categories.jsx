import React, { useEffect, useState } from "react";
import style from "./Categories.module.css";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";

export default function Categories() {
  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  let { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    select: (data) => data.data.data,
  });
  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-main text-center text-3xl font-medium">
          All Categories
        </h1>
        {isLoading && <PacmanLoader color={"#0aad0a"} />}
        <div className="flex flex-wrap py-10 gap-y-3 items-center">
          {data?.map((category) => (
            <div
              key={category._id}
              className="w-full sm:w-1/2 md:w-2/6 lg:w-1/4 px-5"
            >
              <div className="product p-2 rounded-lg text-center border border-1">
                <img className="w-full" src={category.image} alt="" />
                <p className="text-gray-900">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
