import React, { useEffect, useState } from "react";
import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import UserHeader from "../components/user/UserHeader";
import { axiosInstance } from "../config/axiosInstance";

function UserLayout() {
  const [isUserAuth, setIsUserAuth] = useState(false);

    const location = useLocation()

  const checkUser = async ()=>{
    try {
        const response = await axiosInstance({
            method:"GET",
            url: "/user/check-user",
        })
        setIsUserAuth(true)
        console.log(response, "===sdg")
    } catch (error) {
        console.log(error)
        setIsUserAuth(false)
    }
  }

  useEffect(()=>{
    checkUser()
  },[location.pathname])

  return (
    <div>
      {isUserAuth ? <UserHeader /> : <Header />}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default UserLayout;