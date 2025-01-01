import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/GlobalStyles.css";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const Cards = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/carts/add-to-cart",
        data: { productId: product?._id, quantity: 1 },
      });
      toast.success("Add to cart success");
    } catch (error) {
      console.log(error);
      toast.error("Add to cart failed");
    }
  };

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
          <button className="btn btn-primary me-10" onClick={handleAddToCart}>
            Add to cart
          </button>
          <Link to={`/productDetails/${product?._id}`}>
            <button className="btn btn-warning ">Product Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CartCards = ({ item, handleRemove }) => {
  
  const [quantity, setQuantity] = useState(item?.quantity)

  const decrementQuantity = async () => {
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/carts/add-to-cart",
        data: { productId: item?.productId?._id, quantity: -1 },
      });
      setQuantity((prevQty)=>prevQty-1)
    } catch (error) {
      console.log(error);
    }
  };
  const incrementQuantity = async () => {
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/carts/add-to-cart",
        data: { productId: item?.productId?._id, quantity: 1 },
      });
      setQuantity(quantity+1)
    } catch (error) {
      console.log(error);
    }
  };

  if(!quantity){
    return null
  }

  return (
    <div className="cart-item flex w-full h-32 items-center gap-20 bg-base-300 mb-10 rounded-md">
      <img src={item?.productId?.image} alt="cart-item" className="w-24 h-20" />
      <div className="cart-item2">
        <h1>{item?.productId?.title}</h1>
        <h1>{item?.productId?.price}</h1>
        <div className="flex gap-3 items-center">
          <button className="btn" onClick={decrementQuantity}>-</button>
          <h1>{quantity}</h1>
          <button className="btn" onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          handleRemove(item?.productId?._id)
          setQuantity(0)
        }}
      >
        Remove
      </button>
    </div>
  );
};
