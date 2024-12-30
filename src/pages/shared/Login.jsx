import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

function Login(role = "user") {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const user = {
    role: "user",
    login_api: "/user/login",
    profile_route: "/user/profile",
    signup_route: "/signup",
  };

  if (role === "seller") {
    (user.role = "seller"((user.login_api = "/seller/login"))),
      (user.profile_route = "/seller/profile"),
      (user.signup_route = "/seller/signup");
  }

  const onSubmit = async (data) => {
    try {
      console.log(data, "===data");

      const response = await axiosInstance({
        method: "POST",
        url: user.login_api,
        data,
      });
      console.log(response, "===response");
      toast.success("Log-in Successful");
      navigate(user.profile_route);
    } catch (error) {
      toast.error("Log-in failed");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-sm  rounded-lg shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-center">
            Login to Your Account
          </h2>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
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

            <button
              type="submit"
              className="w-full text-slate-300 bg-blue-600 py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
            

            <p className="mt-4 text-center text-sm ">
              Don't have an account?{" "}
              <Link to={user.signup_route}>
                <button className="text-blue-600 hover:underline">
                  Sign Up
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
