import { useState, useEffect } from 'react';

type FetchData<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

export function useFetch<T = unknown>(url: string): FetchData<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
    };
  }, [url]);

  return { data, isLoading, error };
}