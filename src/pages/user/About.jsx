import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function About() {

  return (
    <div>
        <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Your one-stop destination for quality products and exceptional service.
        </p>
      </section>

      {/* Company Mission */}
      <section className="py-10 px-6 md:px-16 lg:px-32">
        <div className=" shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            At <strong>EcommZ</strong>, our mission is to bring the best products to your
            doorstep with unparalleled convenience and quality. We aim to provide an
            effortless shopping experience while ensuring customer satisfaction is our top
            priority.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-10 px-6 md:px-16 lg:px-32">
        <div className=" shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p>
            Founded in 2023, EcommZ began as a small online marketplace catering to a
            handful of loyal customers. Over the years, we have grown into a thriving
            platform offering thousands of products across various categories. Our journey
            is a testament to our commitment to innovation and excellence.
          </p>
        </div>
      </section>


      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h2 className="text-2xl font-bold">Join Our Journey</h2>
        <p className="mt-4">
          Be a part of our growing community and discover the joy of effortless shopping.
        </p>
        <Link to={"/"}>
        
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100" >
          Shop Now
        </button>
        </Link>
      </section>
    </div>
  
    </div>
  )
}

export default About