import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://dummyjson.com/products";

const useFetch = (valueURL) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`${URL}${valueURL}`);
        // console.log(response.data);
        setData(response.data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })(valueURL);
  }, [valueURL]);

  return { isLoading, isError, data };
};

export default useFetch;
