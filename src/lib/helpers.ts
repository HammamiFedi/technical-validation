/**
 * Returns the initials of a given name.
 * @param name - The full name.
 * @returns The initials in uppercase.
 */
export const getInitials = (name: string) => {
  // Split the name into first and last names
  const [firstName, lastName] = name.split(" ");

  // Get the first character of each name and convert to uppercase
  return `${firstName[0]}${lastName[0]}`.toUpperCase();
};
