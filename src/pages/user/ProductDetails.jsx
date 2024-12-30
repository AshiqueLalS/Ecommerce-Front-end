import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import useFetch from "../../hooks/useFetch";

function ProductDetails() {
    const productId = useParams();
  
    const Id = productId?.id;

    const [productDetails, isLoading, error] = useFetch(`/product/productDetails/${Id}`)

  

  return (
    <div>
      <div className="product-details">
        <img src={productDetails?.image} alt="product" />
        <h1 className="product-title text-2xl">{productDetails?.title}</h1>
        <h3 className="text-success">${productDetails?.price}</h3>
        <p>{productDetails?.description}</p>
        <button className="btn btn-primary ">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
