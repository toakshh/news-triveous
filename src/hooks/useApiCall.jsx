import { useState, useEffect } from "react";
import axios from "axios";

const useApiCall = (URL) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(URL);
        // setApiData(response.data.articles)
        setApiData(response.data.news);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [URL]);
  return { apiData, loading, error };
};

export default useApiCall;
