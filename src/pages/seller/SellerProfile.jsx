import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Order from "../../components/user/Order";

function SellerProfile() {
  const [sellerProfile, isLoading, error] = useFetch("/seller/seller-profile");

  const [showOrder, setShowOrder] = useState(false);
  return (
    <div>
      <main className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {sellerProfile?.name}
              </h2>
              <p className="text-gray-500">{sellerProfile?.email}</p>
              {/* <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit Profile
          </button> */}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Address Book
              </h3>
              <p className="text-gray-600 mt-2">{sellerProfile?.address}</p>
            </div>
          </div>
          <div>
          <button
            className="btn btn-accent mt-4"
            onClick={() => setShowOrder(!showOrder)}
          >
            My Orders
          </button>

          {showOrder && <Order role="seller"/>}
          </div>

          {/* <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700">Order History</h3>
        <div className="mt-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <div className="flex justify-between">
              <p>Order #12345</p>
              <p className="text-green-600">Delivered</p>
            </div>
            <p className="text-gray-500">Placed on: 2025-01-01</p>
          </div>
        </div>
      </div> */}
        </div>
      </main>
    </div>
  );
}

export default SellerProfile;
