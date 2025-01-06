import React, { useState } from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Signup({role = "user"}) {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const onSubmit= async (data) =>{
    setLoading(true)
    const requestBody = new FormData()
    requestBody.append("name",data.name)
    requestBody.append("email",data.email)
    requestBody.append("password",data.password)
    requestBody.append("phone",data.phone)
    requestBody.append("address",data.address)
    if(role!=="seller"){

      requestBody.append("image",data.image[0])
    }
    console.log(requestBody);
    
   try {
    
    const response = await axiosInstance({
      method: "POST",
      url: role==="seller"? "/seller/signup": "/user/signup",
      data: role==="seller"? data : requestBody
    })

    console.log(response,"===res")
    toast.success("Registered successfully");
      navigate(role==="seller"?"/seller-login":"/login");
    

   } catch (error) {
    console.log(error);
    toast.error("Registration failed")
    
   }
   finally{setLoading(false)}
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-sm  rounded-lg shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-center">
            {role==="seller"?"Sign up as seller":"Sign up"}
          </h2>
          <form className="mt-6" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            
            <div className="mb-4">
              <label className="block text-sm font-medium ">
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                className="mt-1 w-full px-4 py-2 border  rounded-lg  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium ">
                Email Address
              </label>
              <input
                type="email"
                {...register("email")}
                className="mt-1 w-full px-4 py-2 border  rounded-lg  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium ">
                Phone number
              </label>
              <input
                type="text"
                {...register("phone")}
                className="mt-1 w-full px-4 py-2 border  rounded-lg  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium ">Password</label>
              <input
                type="password"
                {...register("password")}
                className="mt-1 w-full px-4 py-2 border  rounded-lg  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium ">Address</label>
              <input
                type="text"
                {...register("address")}
                className="mt-1 w-full px-4 py-2 border  rounded-lg  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your address"
                required
              />
            </div>
            {role==="user"?
            <div>
              <input type="file" accept='png/jpg'
              {...register("image")}
              className="mt-1 w-full px-4 py-2 rounded-lg  focus:ring-blue-500 focus:outline-none"
              />
              
            </div>: null
            }
            

            <button
              type="submit"
              className="w-full text-slate-300 bg-blue-600 py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading?"Loading...":"Sign up"}
            </button>
            

            <p className="mt-4 text-center text-sm ">
              Already have an account?{" "}
              <Link to={role==="seller"? "/seller-login": "/login"}>
                <button className="text-blue-600 hover:underline">
                  Log in
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup