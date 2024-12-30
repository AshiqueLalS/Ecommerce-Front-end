import React from "react";
import { Link } from "react-router-dom";
import "../../styles/GlobalStyles.css";

export const Cards=({ product })=> {
  return (
    <div className="product-card">
      <Link to={`/productDetails/${product?._id}`}>
        <img src={product?.image} alt="products" />
      </Link>
      <div className="product-detail-list">
        <Link to={`/productDetails/${product?._id}`}>
          <h2 className="product-title text-lg">{product?.title}</h2>
        </Link>
        <p className="product-price text-success">${product?.price}</p>
        <div className="buttons-productlist">
          <button className="btn btn-primary me-10">Add to cart</button>
          <Link to={`/productDetails/${product?._id}`}>
            <button className="btn btn-warning ">Product Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const CartCards = ({item, handleRemove}) =>{
  return (
    <div className="cart-item flex w-full h-32 items-center gap-20 bg-base-300 mb-10 rounded-md">
      <img src={item?.productId?.image} alt="cart-item"  className="w-24 h-20"/>
      <div>
        <h1>{item?.productId?.title}</h1>
        <h1>{item?.productId?.price}</h1>
        <h1>{item?.quantity}</h1>
      </div>
      <button className="btn btn-secondary" onClick={()=>handleRemove(item?.productId?._id)}>Remove</button>
    </div>
  )
}


