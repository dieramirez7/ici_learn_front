import { createContext, useState, useEffect } from 'react';
import AuthServices from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (token, userId) => {
    setIsLoading(true);
    try {
      localStorage.setItem('token', token);
      const userData = await AuthServices.getUser(userId);
      setUser(userData);
      setToken(token);
      setIsLoggedIn(true);
      localStorage.setItem('userId', userId);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      login(token, userId);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, isLoggedIn, login, logout, user, isLoading, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
