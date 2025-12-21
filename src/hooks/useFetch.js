import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!endPoint) return;

    setIsLoading(true);
    setError(null);
    setData([]);
    try {
      const response = await axios.get(`${baseUrl}/api/${endPoint}`);
      if (endPoint.endsWith("images")) {
        setData(response.data);
      } else {
        setData(response.data.data);
      }
    } catch (error) {
      const normalizedError = {
        message:
          error?.response?.data?.message ||
          error?.response?.statusText ||
          error?.message ||
          "Unable to reach the tours service.",
        status: error?.response?.status,
        statusText: error?.response?.statusText,
        code: error?.code,
      };
      setError(normalizedError);
    } finally {
      setIsLoading(false);
    }
  }, [endPoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

export default useFetch;
