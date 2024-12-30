import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-4xl w-full  shadow-lg rounded-lg p-8">
        {/* Page Header */}
        <h1 className="text-2xl font-semibold  mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-medium  mb-4">Get in Touch</h2>
            <p className=" mb-4">
              Feel free to reach out to us using the contact details below. Our team is here to help!
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-medium ">Address:</span> 123 Main Street, Tvm,
                 KL10001
              </li>
              <li>
                <span className="font-medium ">Phone:</span>{" "}
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                  +91 9876543210 
                </a>
              </li>
              <li>
                <span className="font-medium ">Email:</span>{" "}
                <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
                  support@example.com
                </a>
              </li>
              <li>
                <span className="font-medium ">Hours:</span> Monday - Friday, 9 AM - 5 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
