import React, { useState } from "react";

const Carousel = () => {
  const items = [
    {
      id: 1,

      image:
        "https://img.freepik.com/free-psd/creative-cyber-monday-web-template_23-2149108122.jpg",
    },
    {
      id: 2,

      image:
        "https://www.shutterstock.com/image-vector/concept-online-shopping-on-social-260nw-1769713256.jpg",
    },
    {
      id: 3,

      image:
        "https://i.pinimg.com/originals/9a/13/dc/9a13dc79ca4368d6c87acb2e52cadf9d.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-6xl mx-auto mt-10">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full flex-shrink-0">
              <img
                src={item.image}
                className="w-full max-h-64 object-cover rounded-lg"
              />
              <h2 className="text-center mt-2 text-lg font-semibold">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
      >
        &gt;
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
