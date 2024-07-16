import { useState, useEffect, useRef } from "react";

import { ENDPOINTS } from "@/config/constants/endpoints";
import { buildApiUrl } from "@/lib/helpers";
/**
 * Function to fetch data from an API by ID.
 * @param id
 * @returns The data, the loading state and the error message.
 */
export default function useFetchById<T>(id: number | null): {
  data: T | null;
  error: string | null;
  isFetching: boolean;
} {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsFetching(true);

    debounceRef.current = setTimeout(async () => {
      // Abort the previous fetch if it exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create a new AbortController instance for the current fetch
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current.signal;

      try {
        const response = await fetch(buildApiUrl([ENDPOINTS.USERS, id]), {
          signal,
        });

        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Request failed. Please try again.");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          // Check if the error is due to the request being aborted
          if (error.name === "AbortError") {
            setError("Request was aborted");
          } else {
            setError(
              error.message || "An error occurred. Please try again later.",
            );
          }
        }
      } finally {
        setIsFetching(false); // Ensure isFetching is set to false in both success and error cases
      }
    }, 1000);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [id]);

  return { data, error, isFetching };
}
