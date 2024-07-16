import { useState, useEffect } from "react";

import { buildApiUrl } from "@/lib/helpers";

/**
 * Function to fetch data from an API.
 * @param url
 * @returns The data, the loading state and the error message.
 */
export default function useFetch<T>(url: string): {
  data: T[];
  isFetching: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(buildApiUrl([url]));

        if (response.ok) {
          const jsonData: T[] = await response.json();
          setData(jsonData);
        } else {
          setError("Request failed. Please try again.");
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [url]);

  return { isFetching, error, data };
}
