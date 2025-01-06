import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

import useFetch from "../../hooks/useFetch";
import { Cards } from "../../components/user/Cards";

function Products() {
  const [productList, isLoading, error] = useFetch("/product/allProducts");
  

  return (
    <div>
      {isLoading ? (
        <div className="flex w-52 flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      ) : (
        <div className="container">
          <h1 className="text-3xl font-bold ">Product List</h1>
          <div className="product-list gap-5">
            {productList?.map((value) => (
              <Cards key={value._id} product={value} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
