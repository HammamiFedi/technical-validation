import { createContext, useState } from "react";

type UserContextType = {
  userId: number | null;
  setUserId: (id: number) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [id, setId] = useState<number | null>(null);

  const setUserId = (id: number) => setId(id);

  return (
    <UserContext.Provider value={{ userId: id, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}
