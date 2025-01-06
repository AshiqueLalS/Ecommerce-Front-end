import React from 'react'
import useFetch from '../../hooks/useFetch'

function Profile() {

  const [profile, isLoading, error] = useFetch("/user/profile");


  return (
    <div><main className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
    <div className="bg-white rounded-lg shadow p-6">
   
      <div className="flex items-center space-x-6">
        <img
          src={profile?.image}
          alt="Profile"
          className="h-24 w-24 rounded-full border-2 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{profile?.name}</h2>
          <p className="text-gray-500">{profile?.email}</p>
          {/* <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit Profile
          </button> */}
        </div>
      </div>


      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Address Book</h3>
          <p className="text-gray-600 mt-2">
            {profile?.address}
          </p>
          
        </div>

   
        <div>
          <h3 className="text-xl font-semibold text-gray-700">Saved Payment Methods</h3>
          <p className="text-gray-600 mt-2">Visa **** 1234</p>
          <button className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Add New Payment Method
          </button>
        </div>
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
  )
}

export default Profile