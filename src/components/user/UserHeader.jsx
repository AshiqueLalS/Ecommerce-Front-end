import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "../shared/DarkMode";
import axios from "axios";
import { axiosInstance } from "../../config/axiosInstance";

function UserHeader() {
  
  const navigate = useNavigate()

  const handleLogout = async () => {
    await axiosInstance({
      method: "GET",
      url: "/user/logout",
    })
    navigate("/login")
  }
  return (
    <>
      <div className="navbar bg-base-100 gap-6 h-20 shadow-2xl">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl">
            EcommZ
          </Link>
        </div>
        <div className="flex justify-center items-center gap-6">
          <nav>
            <ul className="flex justify-center items-center gap-6">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
              <Link to={"/products"}>
                <li>Products</li>
              </Link>
            </ul>
          </nav>
          <DarkMode />
          <div>
            <Link to={"/user/cart"}>
              <button className="btn btn-primary">Cart</button>
            </Link>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Filter"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>

          <div className="dropdown dropdown-end">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-1">
                <button>
                  <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/user/profile"}>
                  <a className="justify-between">Profile</a>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHeader;
