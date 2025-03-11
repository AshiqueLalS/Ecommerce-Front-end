import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Order from "../../components/user/Order";

function Profile() {
  const [profile, isLoading, error] = useFetch("/user/profile");

  const [showOrder, setShowOrder] = useState(false);

  return (
    <div>
      <main className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 ">
        <div className="bg-white rounded-lg shadow-2xl p-6 ">
          <div className="flex items-center space-x-6">
            <img
              src={profile?.image}
              alt="Profile"
              className="h-24 w-24 rounded-full border-2 border-blue-500"
            />
            <div>
              <h2 className="text-gray-600 text-2xl font-semibold ">
                {profile?.name}
              </h2>
              <p className="text-gray-600">{profile?.email}</p>
              {/* <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit Profile
          </button> */}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold  gap-6 text-gray-600">
                Address Book
              </h3>
              <p className=" mt-2 text-gray-600 ">{profile?.address}</p>
            </div>
          </div>

          <button
            className="btn btn-accent mt-4"
            onClick={() => setShowOrder(!showOrder)}
          >
            My Orders
          </button>

          {showOrder && <Order role={"user"} />}
        </div>
      </main>
    </div>
  );
}

export default Profile;
