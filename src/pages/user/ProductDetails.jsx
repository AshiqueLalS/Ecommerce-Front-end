import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import useFetch from "../../hooks/useFetch";
import toast from "react-hot-toast";

function ProductDetails({}) {
    const productId = useParams();
    var role =sessionStorage.getItem("role")
  
    const Id = productId?.id;

    const [productDetails, isLoading, error] = useFetch(`/product/productDetails/${Id}`)

    const handleAddToCart = async()=>{
      try {
        const response = await axiosInstance({
          method: "POST",
          url: "/carts/add-to-cart",
          data: {productId:Id, quantity: 1},
        })
        toast.success("Add to cart success")
      } catch (error) {
        console.log(error)
        toast.error("Add to cart failed")
      }
    }




  return (
    <div>
      <div className="product-details">
        <img src={productDetails?.image} alt="product" />
        <h1 className="product-title text-2xl">{productDetails?.title}</h1>
        <h3 className="text-success">${productDetails?.price}</h3>
        <p>{productDetails?.description}</p>
        {role==="user"?
       
        <button className="btn btn-primary " onClick={handleAddToCart}>Add to cart</button>
        :
        <Link to="/products">
        <button className="btn btn-primary" > Go Back</button>
        </Link>
      }
      </div>
    </div>
  );
}

export default ProductDetails;
