import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { CartCards } from "../../components/user/Cards";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
function Cart() {
  const [cartDetails, isLoading, error] = useFetch("/carts/get-cart-details");
  
  const [cartItems, setCartItems] = useState([])

  console.log({cartItems,cartDetails});
  
  

  const totalPrice = cartItems.reduce((acc, item)=>acc += item?.price*item?.quantity,0)
  
  console.log(totalPrice);
  

  useEffect(() => {
    setCartItems(cartDetails?.products||[]);
  }, [cartDetails]);

  const handleRemoveProduct = async (productId) => {
    setCartItems((prevCartItems)=>prevCartItems.map(item=>item._id===productId?{...item, quantity: 0}:item))
    try {
      const response = await axiosInstance({
        method: "DELETE",
        url: "/carts/remove-product-cart",
        data: { productId },
      });

      toast.success("product removed successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const makePayment = async () => {
    try {
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
      );

      const session = await axiosInstance({
        url: "/payment/create-checkout-session",
        method: "POST",
        data: { products: cartDetails?.products },
      });
      console.log(session, "===session");
      const result = stripe.redirectToCheckout({
        sessionId: session.data.sessionId,
      });

      if (result.error) {
        toast.error("Payment failed. Try again.");
      } else {
        handlePaymentSuccess();
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  const handlePaymentSuccess = async () => {
    try {
      await axiosInstance({
        method: "DELETE",
        url: "/carts/clear-cart",
      });

      setCartItems([]); // Clear cart on frontend
      toast.success("Cart cleared successfully after payment!");
    } catch (err) {
      console.error("Error clearing cart:", err);
      toast.error("Failed to clear cart.");
    }
  };

  return (
    <div className="">
      <div>
        {cartItems.map((value) => (
          <CartCards
            item={value}
            key={value._id}
            handleRemove={handleRemoveProduct}
            setCartItems={setCartItems}
          />
        ))}
      </div>
      {cartDetails?.products?.length ? (
        <div className="w-6/12 bg-base-300 flex flex-col items-center gap-5">
          {" "}
          <h2>Price summary</h2>
          <h2>Total Price: {totalPrice}</h2>
          <button className="btn btn-warning" onClick={makePayment}>
            Checkout
          </button>
        </div>
      ) : (
        <h1 className="text-2xl">Cart is empty</h1>
      )}
    </div>
  );
}

export default Cart;
