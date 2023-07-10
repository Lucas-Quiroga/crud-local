import { useState, createContext } from "react";

interface Users {
  id: number | string;
  email: string;
  password: string;
}

interface UsersContextType {
  users: Users[];
  setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
  activeSession: boolean;
  setActiveSession: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usersContext = createContext<UsersContextType>({
  users: [],
  setUsers: () => {},
  activeSession: false,
  setActiveSession: () => {},
});

const UsersContextProvider = ({ children }: any) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [activeSession, setActiveSession] = useState(false);

  return (
    <usersContext.Provider
      value={{ users, setUsers, activeSession, setActiveSession }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default UsersContextProvider;
