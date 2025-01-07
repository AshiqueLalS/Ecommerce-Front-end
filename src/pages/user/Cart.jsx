import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { CartCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";
function Cart() {
  const [cartDetails, isLoading, error] = useFetch("/carts/get-cart-details");


  const [totalPrice, setTotalPrice] = useState(cartDetails?.totalPrice)
  console.log(cartDetails?.totalPrice)

  useEffect(()=>{
    setTotalPrice(cartDetails?.totalPrice)

  }
  ,[cartDetails?.totalPrice])

  
  const handleRemoveProduct = async (productId)=>{
    try {
      const response = await axiosInstance({
        method: "DELETE",
        url: "/carts/remove-product-cart",
        data: {productId},
      })
      
      toast.success("product removed successfully")
    } catch (error) {
      console.log(error);
      
    }
    
  }
 

  return (
    
      <div className="">
        <div>
          {cartDetails?.products?.map((value) => (
            <CartCards item={value} key={value._id} handleRemove={handleRemoveProduct} />
          ))}
        </div>
        {cartDetails?.products?.length ? (
          <div className="w-6/12 bg-base-300 flex flex-col items-center gap-5">
            {" "}
            <h2>Price summary</h2>
            <h2>Total Price: {totalPrice}</h2>
            <button className="btn btn-warning">Checkout</button>
          </div>
        ) : (
          <h1 className="text-2xl">Cart is empty</h1>
        )}
      </div>
    
  );
}

export default Cart;
