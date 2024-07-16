import { CONFIG } from "@/config";

/**
 * Returns the initials of a given name.
 * 
 * @param name - The full name.
 * @returns The initials in uppercase.
 */
export const getInitials = (name: string) => {
  // Split the name into first and last names
  const [firstName, lastName] = name.split(" ");

  // Get the first character of each name and convert to uppercase
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
};

/**
 * Builds the API URL based on the given elements.
 * 
 * @param elements - The elements to be joined in the URL path. Omit the "/" separator.
 * @returns The full API URL.
 */
export const buildApiUrl = (elements: (number | string)[]): string => {
  // Join the elements with the separator "/"
  const path = elements.join("/");

  // Return the full API URL
  return `${CONFIG.API_BASE_URL}/${path}`;
};
