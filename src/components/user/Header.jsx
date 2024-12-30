import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../shared/DarkMode";

function Header() {
  return (
    <>
      <div className="navbar flex justify-between items-center bg-base-100  h-20 shadow-2xl">
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
            <Link to={"/login"}>
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
