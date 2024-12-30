import React from "react";
import { Link } from "react-router-dom";
import "../../styles/GlobalStyles.css";

function Cards({ product }) {
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

export default Cards;
