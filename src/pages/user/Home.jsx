import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import { Link } from "react-router-dom";
import Carousel from "../../components/user/Carousel";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="min-h-5">
        <section className="bg-blue-600 text-white py-10 text-center">
          <h1 className="text-4xl font-bold">Welcome to EcommZ</h1>
          <p className="mt-4 text-lg">
            Discover the best deals on your favorite products. Shop now and save
            big!
          </p>
        </section>
      </div>
      <div>
        <Carousel />

        <section className="bg-blue-500 text-white mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-4xl font-bold">Discover Amazing Products</h2>
            <p className="mt-4 text-lg">
              Shop the latest trends and exclusive deals!
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-100">
              Start Shopping
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
