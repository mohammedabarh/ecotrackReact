import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Replace with real Auth0 integration in production!
  const [user, setUser] = useState(null);

  const login = (demoUser = null) =>
    setUser(
      demoUser || {
        name: "Sarah Johnson",
        email: "sarah@ecotrack.com",
        picture: "https://randomuser.me/api/portraits/women/44.jpg",
      }
    );
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}