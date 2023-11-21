import React, { useState, createContext, useContext, useEffect, useMemo } from 'react'
import axios from "axios"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  [token, setToken_] = useState(localstorage.getItem("token"))

  const setToken = (newToken) => {
    setToken_(newToken)
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      localstorage.setItem('token', token);
    }
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue} >{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthProvider }






