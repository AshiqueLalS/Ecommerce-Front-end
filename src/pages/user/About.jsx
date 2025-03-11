import React from "react";
import { Link, useNavigate } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="min-h-screen ">
        <section className="bg-blue-600 text-white py-10 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Your one-stop destination for quality products and exceptional
            service.
          </p>
        </section>

        <section className="py-10 px-6 md:px-16 lg:px-32">
          <div className=" shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              At <strong>EcommZ</strong>, our mission is to bring the best
              products to your doorstep with unparalleled convenience and
              quality. We aim to provide an effortless shopping experience while
              ensuring customer satisfaction is our top priority.
            </p>
          </div>
        </section>

  
        <section className="bg-blue-600 text-white py-10 text-center">
          <h2 className="text-2xl font-bold">Join Our Journey</h2>
          <p className="mt-4">
            Be a part of our growing community and discover the joy of
            effortless shopping.
          </p>
          <Link to={"/"}>
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100">
              Shop Now
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default About;


