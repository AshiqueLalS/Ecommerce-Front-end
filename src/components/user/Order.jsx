import React from "react";
import useFetch from "../../hooks/useFetch";

function Order({ role }) {
  const [orderDetails, isLoading, error] = useFetch("/payment/orderFetch");
  console.log({ orderDetails });

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-600">Order History</h3>
      <div className="mt-4">
        {orderDetails?.length ? (
          orderDetails.map((order) => (
            <div key={order?._id} className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="flex justify-between">
                <p className="text-gray-600">Order #{order._id}</p>
                {role === "seller" ? (
                  <div className=" ">
                    <select className="bg-gray-50 text-green-600">
                      <option
                        className="text-green-600 bg-gray-50"
                        value={"processing"}
                      >
                        processing
                      </option>
                      <option
                        className="text-green-600 bg-gray-50"
                        value={"out-for-delevery"}
                      >
                        out-for-delevery
                      </option>
                      <option
                        className="text-green-600 bg-gray-50"
                        value={"Delivered"}
                      >
                        Delivered
                      </option>
                    </select>
                  </div>
                ) : (
                  <p className="text-green-600 capitalize">out for delevery</p>
                )}
              </div>
              <p className="text-gray-600">
                Placed on: {new Date(order.updatedAt).toLocaleDateString()}
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
