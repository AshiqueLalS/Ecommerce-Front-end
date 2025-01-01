import React from 'react'
import { axiosInstance } from '../../config/axiosInstance'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup(role = "user") {

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit= async (data) =>{
    console.log(data);
    

   try {
    
    const response = await axiosInstance({
      method: "POST",
      url: "/user/signup",
      data,
    })

   } catch (error) {
    console.log(error);
    
   }
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-sm  rounded-lg shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-center">
            Sign up
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
            <div>
              <input type="file" accept='png/jpg'
              {...register("image")}
              className="mt-1 w-full px-4 py-2 rounded-lg  focus:ring-blue-500 focus:outline-none"

              />
              
            </div>

            <button
              type="submit"
              className="w-full text-slate-300 bg-blue-600 py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign up
            </button>
            

            <p className="mt-4 text-center text-sm ">
              Already have an account?{" "}
              <Link to={"/user/login"}>
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