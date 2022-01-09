import { useState, useEffect } from 'react';

export default function useResults(url) {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    console.log('we updating up in here');
    async function fetchData() {
      setLoading(true);
      setError();
      console.log('Fetching Data');
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setResults(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return {
    results,
    loading,
    error,
  };
}
