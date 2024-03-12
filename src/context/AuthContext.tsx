"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const login = () => {
    setIsLoggedIn(true);

    router.push("/table");
  };

  const logout = () => {
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
