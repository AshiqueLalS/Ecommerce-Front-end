import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 w-full text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to={"/about"}>
            <p className="link link-hover">About us</p>
          </Link>
          <Link to={"/contact"}>
            <p className="link link-hover">Contact</p>
          </Link>
          <Link to={"/review"}>
            <p className="link link-hover">Review</p>
          </Link>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Ecommerce Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
