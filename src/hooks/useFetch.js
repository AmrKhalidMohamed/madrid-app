import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    url: `${baseUrl}/api/${endPoint}`,
    method: 'get',
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
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
  };

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, refetch };
};

export default useFetch;
