import React, { useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddProduct() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    const requestBody = new FormData();
    requestBody.append("title", data.title);
    requestBody.append("price", data.price);
    requestBody.append("description", data.description);
    requestBody.append("image", data.image[0]);
    console.log(requestBody);

    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/product/create-product",
        data: requestBody,
      });
      toast.success("Product created successfully");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Product creation failed as similar product exists");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className=" ">
        <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold  mb-6">Add a Product</h1>

          <form
            className=" p-6 rounded-lg shadow-2xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium ">
                Product Name
              </label>
              <input
                type="text"
                {...register("title")}
                className="mt-1 block w-full px-4 py-2 border  rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium ">
                Price
              </label>
              <input
                type="text"
                {...register("price")}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product price"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium "
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description")}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product description"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium ">
                Choose image
              </label>
              <input
                type="file"
                accept="png/jpg"
                {...register("image")}
                className="mt-1 w-full px-4 py-2 rounded-lg  focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {loading ? "Loading..." : "Add Product"}
            </button>
          </form>

          {/* <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product List
          </h2> */}
          {/* {productList.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productList.map((prod, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {prod.name}
                  </h3>
                  <p className="text-gray-500">{prod.description}</p>
                  <p className="text-blue-600 font-semibold mt-2">
                    {prod.price}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No products added yet.</p>
          )} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
