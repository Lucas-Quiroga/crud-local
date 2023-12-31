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
  userActive: Users | undefined;
  setUserActive: React.Dispatch<React.SetStateAction<Users | undefined>>;
}

export const usersContext = createContext<UsersContextType>({
  users: [],
  setUsers: () => {},
  activeSession: false,
  setActiveSession: () => {},
  userActive: undefined,
  setUserActive: () => {},
});

const UsersContextProvider = ({ children }: any) => {
  const [users, setUsers] = useState<Users[]>([]);
  const [activeSession, setActiveSession] = useState(false);
  const [userActive, setUserActive] = useState<Users | undefined>(undefined);

  return (
    <usersContext.Provider
      value={{
        users,
        setUsers,
        activeSession,
        setActiveSession,
        setUserActive,
        userActive,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default UsersContextProvider;
