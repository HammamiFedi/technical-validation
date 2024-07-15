import { useState, useEffect } from "react";
import { CONFIG } from "@/config";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(CONFIG.API_BASE_URL + url);

        if (response.ok) {
          const jsonData: T[] = await response.json();
          setData(jsonData);
        } else {
          setError("Error fetching data");
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
