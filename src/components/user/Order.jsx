import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import toast from "react-hot-toast";
import axios from "axios";
import { axiosInstance } from "../../config/axiosInstance";

function Order({ role }) {
  console.log({ role });
  const [orderDetails, isLoading, error] = useFetch("/payment/orderFetch");
  const [sellerOrderDetails] = useFetch("/payment/seller-orderFetch");
  const [userDetails] = useFetch("/seller/userFetch");
  console.log({ orderDetails });
  console.log({ sellerOrderDetails });
  console.log({ userDetails });

  //   const [orderStatus, setOrderStatus] = useState(sellerOrderDetails.orderStatus); // State to manage the dropdown value

  //   const updateOrderStatus = async (orderId, newStatus) => {
  //     try {
  //       await axiosInstance.put(`/orders/${orderId}/status`, { status: newStatus });
  //       setOrderStatus(newStatus); // Update the local state
  //       toast.success("Order status updated successfully!");
  //     } catch (error) {
  //       console.error("Error updating order status:", error);
  //       toast.error("Failed to update order status.");
  //     }
  //   };
  const handleStatusChange = (orderId) => async (e) => {
    try {
      const result = await axiosInstance.patch(
        "/order/order-status/" + orderId,
        {
          orderStatus: e.target.value?.toLowerCase(),
        }
      );
      console.log(result);
      if (result.status === 201)
        toast.success("Order status updated successfully!");
    } catch (error) {
      console.log(error.message);
    }
  };
  const orderDetailByRole =
    role === "seller" ? sellerOrderDetails : orderDetails;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-600">Order History</h3>
      <div className="mt-4">
        {orderDetailByRole?.length ? (
          orderDetailByRole.map((orderDetailsByRole) => (
            <div
              key={orderDetailsByRole?._id}
              className="bg-gray-100 p-4 rounded-lg shadow"
            >
              <div className="flex justify-between ">
                <p className="text-gray-600">Order #{orderDetailsByRole._id}</p>
                {userDetails.map(
                  (user) =>
                    orderDetailsByRole.userId === user._id && (
                      <div>
                        <p key={user._id} className="text-gray-600">
                          Username: {user.name}
                        </p>
                        <p key={user._id} className="text-gray-600">
                          email: {user.email}
                        </p>
                        <p key={user._id} className="text-gray-600">
                          address: {user.address}
                        </p>
                      </div>
                    )
                )}
                {role === "seller" ? (
                  <div className=" ">
                    <select
                      className="bg-gray-50 text-green-600"
                      onChange={handleStatusChange(orderDetailsByRole._id)}
                      defaultValue={
                        orderDetailsByRole.orderStatus || "processing"
                      }
                    >
                      <option
                        className="text-green-600 bg-gray-50"
                        value={"processing"}
                      >
                        Processing
                      </option>
                      <option
                        className="text-green-600 bg-gray-50"
                        value={"out-for-delivery"}
                      >
                        out-for-delivery
                      </option>
                      <option
                        className="text-green-600 bg-gray-50"
                        value={"delivered"}
                      >
                        Delivered
                      </option>
                    </select>
                  </div>
                ) : (
                  <p className="text-green-600 capitalize">
                    {orderDetailsByRole.orderStatus}
                  </p>
                )}
              </div>
              <p className="text-gray-600">
                Placed on:{" "}
                {new Date(orderDetailsByRole.updatedAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default Order;
