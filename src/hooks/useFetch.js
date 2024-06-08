import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!endPoint) return; // Add this line to prevent fetching when endPoint is null

    setIsLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/api/${endPoint}`);
      if (endPoint.endsWith('images')) {
        setData(response.data);
      } else {
        setData(response.data.data);
      }
    } catch (error) {
      setError(error);
      alert('There was an error');
    } finally {
      setIsLoading(false);
    }
  }, [endPoint]); // Add endPoint as a dependency

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Add fetchData as a dependency

  return { data, isLoading, error };
};

export default useFetch;