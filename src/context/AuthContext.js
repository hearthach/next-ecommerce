// context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const NextAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    // Lógica de inicio de sesión
    setUser({ id: 1, username: 'usuario' });
  };

  const logout = () => {
    // Lógica de cierre de sesión
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
