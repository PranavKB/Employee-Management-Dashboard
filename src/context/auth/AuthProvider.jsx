import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { App } from "antd";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("auth") === "true";
  });
  const { message } = App.useApp();

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
    message.success('Logged in successfully');
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    message.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
