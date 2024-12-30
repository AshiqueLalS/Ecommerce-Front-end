import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchProductList = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: url,
      });

      setData(response?.data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return [data, isLoading, error];
}

export default useFetch;
