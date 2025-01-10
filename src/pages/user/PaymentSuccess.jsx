import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router"
import useFetch from "../../hooks/useFetch";

const PaymentSuccess = () => {
   const location= useLocation().search
   const searchParams = new URLSearchParams(location)
    const [paymentDetails, isLoading, error] = useFetch("/payment/session-status?session_id="+searchParams.get("session_id"));
 
    console.log({paymentDetails,searchParams});

      useEffect(() => {
        const clearCart = async () => {
          try {
            await axiosInstance({
              method: "DELETE",
              url: "/carts/clear-cart",
            });
            toast.success("Cart cleared successfully after payment!");
          } catch (err) {
            console.error("Error clearing cart after payment:", err);
            toast.error("Failed to clear cart after payment.");
          }
        };
    
        clearCart();
      }, []);

    

 
    const navigate = useNavigate();



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Payment Successful!
        </h2>

        {/* Message */}
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. Your payment was processed successfully.
        </p>

        {/* Order Summary */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg text-left">
          <h3 className="text-lg font-medium text-gray-700">Order Summary</h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>
              <span className="font-semibold">Order ID:</span> {paymentDetails?.orderId?._id}
            </li>
            <li>
              <span className="font-semibold">Total Amount:</span>{" "}
              <del>&#2352;</del> {paymentDetails?.session_data?.amount_total/100}
            </li>
            <li>
              <span className="font-semibold">Payment Method:</span> Credit Card
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/profile")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600"
          >
            Profile
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow hover:bg-gray-400"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
