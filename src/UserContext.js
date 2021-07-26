import React, { useMemo, useContext, useState, createContext } from "react";

const UserContext = createContext(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 0,
    name: "Jane Doe",
    email: "jane@me.com",
    password: "Access123",
    accountBalanceUsd: 0,
  });

  const [allUsers, setAllUsers] = useState([
    {
      id: 0,
      name: "Jane Doe",
      email: "jane@me.com",
      password: "Access123",
      accountBalanceUsd: 20,
    },
    {
      id: 1,
      name: "Peter Parker",
      email: "peter@mit.edu",
      password: "Passcode321",
      accountBalanceUsd: 50,
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@msn.com",
      password: "Letmein33",
      accountBalanceUsd: 100,
    },
  ]);

  const providerValue = useMemo(
    () => ({
      user,
      setUser,
      allUsers,
      setAllUsers,
    }),
    [user, allUsers]
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}
