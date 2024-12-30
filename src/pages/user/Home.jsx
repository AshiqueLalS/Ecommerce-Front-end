import React from "react";
import Header from "../../components/user/Header";
import Footer from "../../components/user/Footer";
import { Link } from "react-router-dom";

function Home() {
    
      const categories = [
        { name: "Electronics", image: "https://via.placeholder.com/200" },
        { name: "Fashion", image: "https://via.placeholder.com/200" },
        { name: "Home & Kitchen", image: "https://via.placeholder.com/200" },
      ];
    
      const featuredProducts = [
        { name: "Product 1", price: "$49.99", image: "https://via.placeholder.com/200" },
        { name: "Product 2", price: "$79.99", image: "https://via.placeholder.com/200" },
        { name: "Product 3", price: "$99.99", image: "https://via.placeholder.com/200" },
      ];
    
      const testimonials = [
        {
          name: "Jane Doe",
          text: "Amazing shopping experience! The delivery was fast, and the products are top-notch.",
          image: "https://via.placeholder.com/100",
        },
        {
          name: "John Smith",
          text: "I found everything I needed at unbeatable prices. Highly recommend this store!",
          image: "https://via.placeholder.com/100",
        },
      ];
  return (
    <div className="container mx-auto p-4">
 


 
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to ShopEasy</h1>
        <p className="mt-4 text-lg">
          Discover the best deals on your favorite products. Shop now and save big!
        </p>
        <Link to={"/login"}>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100" >
          Shop Now
        </button>
        </Link>
      </section>

      
      
        </div>
      
    </div>
  




    
  );
    }

export default Home;
