import React, { useEffect, useState } from "react";
import Header from "../components/user/Header";
import Footer from "../components/user/Footer";
import { Outlet, useLocation } from "react-router-dom";
import UserHeader from "../components/user/UserHeader";
import { axiosInstance } from "../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, saveUser } from "../redux/features/userSlice";

function UserLayout() {
  // const [isUserAuth, setIsUserAuth] = useState(false);

  const location = useLocation();

  const {isUserAuth} = useSelector((state) => state.user)

  const dispatch= useDispatch()

  const checkUser = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/user/check-user",
      });
      dispatch(saveUser())
      // setIsUserAuth(true);
      console.log(response, "===response");
    } catch (error) {
      console.log(error);
      dispatch(clearUser())
      // setIsUserAuth(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, [location.pathname]);

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
