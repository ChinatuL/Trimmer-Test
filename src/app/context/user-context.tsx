"use client";

import {
    createContext,
    useContext,
  useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { getUserFromLocalStorage } from "../lib/utilities/utils";

interface ContextProps {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
}

export const UserContext = createContext<ContextProps>({
    user: null,
    setUser: () => {},
});



export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromLocalStorage());
  }, [])
  
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
